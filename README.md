# MentorTradeFit: respaldo y restauración

Respaldo del sitio `/home/mentortradefit.com`, preparado el 11 de octubre de 2026 (America/La_Paz).
Repositorio: https://github.com/soyjavierquiroz/mentortradefit.com.git

## Contenido

- `public_html/src/`: aplicación React 19, TypeScript, Vite 7 y Tailwind.
- `public_html/package-lock.json`: versiones bloqueadas para reinstalar dependencias.
- `public_html/out/`: copia exacta de la versión compilada encontrada en el servidor, lista para servir sin Node.js.
- `public_html/temp/`: referencias y componentes originales; se conservan para no perder archivos.
- `public_html/.env.example`: configuración de ejemplo. El `.env` original era idéntico a este archivo y solo contenía una URL pública de YouTube; se reconstruye copiando el ejemplo.
- `public_html/Dockerfile`, `nginx.conf`, `docker-compose.yml`: despliegue alternativo existente.
- `docs/openlitespeed-vhost.conf.reference`: configuración original del virtual host como referencia.
- `docs/original-files.sha256.json`: inventario SHA-256 de los archivos originales conservados.

No se incluyen `node_modules` (se reconstruye con `npm ci`), logs de acceso/error, certificados ni claves privadas. No se encontró una base de datos local en esta carpeta. Este respaldo cubre los archivos del sitio, no toda la configuración ni cuentas de CyberPanel del servidor.

## Restauración inmediata de la versión existente

```bash
git clone https://github.com/soyjavierquiroz/mentortradefit.com.git
cd mentortradefit.com
```

Configurar el servidor web para servir la carpeta `public_html/out/`, con `index.html` como índice y fallback a `/index.html` para rutas que no correspondan a archivos. No servir la raíz del repositorio ni `public_html/` completo.

En CyberPanel/OpenLiteSpeed: crear el sitio `mentortradefit.com`, copiar `public_html/out/` al directorio del dominio y establecer el document root en `/home/mentortradefit.com/public_html/out`. Ajustar propietario/permisos a la cuenta creada por CyberPanel. Usar la referencia de virtual host para las reglas de rewrite, adaptando rutas y usuario; el usuario original era `mento5266`, pero puede cambiar. Volver a configurar DNS, alias `www`, listeners y emitir certificados HTTPS. Los archivos de `/etc/letsencrypt/` no están respaldados aquí.

## Desarrollo y regeneración

Usar Node.js 22 (mínimo 22.12 para Vite 7) y npm; la verificación del respaldo usó Node 22.22.3 y npm 10.9.8.

```bash
cd public_html
cp .env.example .env
npm ci
npm run dev
# servidor de desarrollo en puerto 3000
npm run build
npm run preview -- --host 127.0.0.1
```

`npm run build` reemplaza `out/`. Para recuperar la compilación original respaldada: `git restore public_html/out` desde la raíz del repositorio. Variables opcionales leídas por `vite.config.ts`: `BASE_PATH`, `IS_PREVIEW`, `PROJECT_ID`, `VERSION_ID`, `READDY_AI_DOMAIN`. Se pasan en el entorno al compilar. `IS_PREVIEW` se activa con cualquier valor no vacío. El video de portada está fijado en `src/components/HeroVideo.tsx` con ID `aQhTmuZiKOY`; la variable `VITE_HERO_VIDEO_YOUTUBE_URL` del ejemplo no se usa actualmente.

## Alternativa Docker

Desde `public_html/`:

```bash
docker build -t mentortradefit:restaurado .
docker run -d --name mentortradefit -p 8080:80 mentortradefit:restaurado
```

El Dockerfile original usa `node:20` y `npm install`; para reinstalaciones reproducibles conviene adaptar la imagen a `node:22` y usar `npm ci`. No se modificó el archivo original en este respaldo. El compose existente corresponde a Docker Swarm/Traefik, requiere la red externa `traefik_public`, el resolver `myresolver` y actualmente configura el dominio `traderfit.kurukin.com`, no `mentortradefit.com`; adaptar esas opciones antes de usarlo.

## Dependencias externas y límites

Video y miniaturas de YouTube; imágenes de Readdy; widget de asistencia Readdy con identificador público en `index.html`; geolocalización `ipapi.co`; fuentes Google y Remix Icon desde CDN. Esos servicios/recursos no se descargaron al respaldo y pueden cambiar o dejar de estar disponibles. Las claves `deadline_end` y `deadline_spots` se guardan en el navegador del visitante, no en el servidor. Se conserva el favicon original `/vite.svg`, aunque no se encontró ese archivo en el árbol.

## Comprobar integridad de los archivos originales

Desde la raíz del repositorio:

```bash
python3 - <<'PYVERIFY'
import hashlib, json
from pathlib import Path
manifest = json.loads(Path('docs/original-files.sha256.json').read_text())
errors = [name for name, expected in manifest.items()
          if not Path(name).is_file() or hashlib.sha256(Path(name).read_bytes()).hexdigest() != expected]
if errors:
    raise SystemExit('Archivos diferentes o ausentes: ' + ', '.join(errors))
print(f'Correctos: {len(manifest)} archivos originales')
PYVERIFY
```

Ejecutar antes de recompilar. Consultar `docs/VALIDACION.md` para el resultado de las comprobaciones del respaldo.
