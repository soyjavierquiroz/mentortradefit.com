# Validación del respaldo

Fecha: 11 de octubre de 2026 (America/La_Paz).

- Repositorio remoto inicialmente vacío; no se reemplazó historial previo.
- `npm ci --no-audit --no-fund`: correcto, 398 paquetes instalados a partir del lockfile.
- `npm run build`: correcto, Vite 7.3.2, 1637 módulos transformados.
- `npm run type-check`: correcto, sin errores de TypeScript.
- Aviso de compilación: datos de Browserslist/caniuse-lite con siete meses de antigüedad; no impidió generar el sitio.
- Integridad: 61 archivos originales coinciden con su manifiesto SHA-256.
- Se restauraron los archivos originales tras la prueba para conservar exactamente `out/` y las declaraciones generadas encontradas en el servidor.
- Revisión de patrones de claves privadas/tokens en los archivos a respaldar: sin coincidencias. `.env` excluido e idéntico a `.env.example`.
- No se probó Docker ni se realizó una prueba visual del navegador o de servicios externos.

El directorio original en `/home/mentortradefit.com` no fue eliminado ni modificado.
