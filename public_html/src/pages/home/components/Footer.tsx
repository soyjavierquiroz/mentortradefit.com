
import BrandIsotipo from '@/components/BrandIsotipo';

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
            <BrandIsotipo className="h-11 w-11 rounded-2xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-amber-300/80">Trader Fit</p>
          </div>

          <p className="text-sm text-gray-400">© 2026 Trader Fit. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
