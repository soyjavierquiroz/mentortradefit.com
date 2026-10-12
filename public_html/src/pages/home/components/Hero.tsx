import { useEffect, useState } from 'react';
import BrandIsotipo from '@/components/BrandIsotipo';
import HeroVideo from '@/components/HeroVideo';

export default function Hero() {
  const [viewersNow, setViewersNow] = useState(47);
  const [enrolledToday, setEnrolledToday] = useState(12);
  const [recentHours, setRecentHours] = useState(34);
  const [pulse, setPulse] = useState(true);

  // Live counters animation
  useEffect(() => {
    const interval = setInterval(() => {
      setViewersNow((prev) => {
        const change = Math.floor(Math.random() * 7) - 3;
        return Math.max(28, Math.min(89, prev + change));
      });
      setEnrolledToday((prev) => {
        const change = Math.random() > 0.6 ? 1 : 0;
        return Math.max(8, Math.min(30, prev + change));
      });
      setRecentHours((prev) => {
        const change = Math.floor(Math.random() * 3) - 1;
        return Math.max(20, Math.min(55, prev + change));
      });
      setPulse((p) => !p);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#020617] lg:min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.16),transparent_24%),radial-gradient(circle_at_15%_30%,rgba(34,197,94,0.12),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(56,189,248,0.08),transparent_26%),linear-gradient(180deg,#040816_0%,#050B19_34%,#020617_68%,#01040D_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.09)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/6 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 pb-10 pt-5 text-center sm:px-6 sm:pb-14 sm:pt-7 md:px-8 lg:px-12 lg:pb-16 lg:pt-10">
        <div className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3.5 py-2.5 backdrop-blur-md sm:mb-6 sm:gap-4 sm:px-5 sm:py-3">
          <BrandIsotipo className="h-10 w-10 shrink-0 rounded-2xl shadow-lg shadow-emerald-500/20 sm:h-12 sm:w-12" />
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300/80">Trader Fit</p>
        </div>

        <div className="mx-auto max-w-[69rem] xl:max-w-[73rem]">
          <h1 className="text-[clamp(1.7775rem,4.6vw,3.565rem)] font-black leading-[0.9] tracking-[-0.052em] text-white">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Mi metodo de 60 dias
            </span>{' '}
            para generar{' '}
            <span className="inline-block rounded-[1.4rem] border border-amber-300/30 bg-amber-300/10 px-[0.7em] py-[0.18em] text-amber-100 sm:rounded-[1.6rem]">
              minimo $2938/mes
            </span>{' '}
            haciendo trading con una guia clara, simple y accionable.
          </h1>
        </div>

        <div className="mt-5 flex flex-col lg:mt-8">
          <div className="order-1 mx-auto w-full max-w-5xl">
            <HeroVideo />
          </div>

          <div className="order-2 mt-4 grid gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-3 lg:order-1 lg:mx-auto lg:mt-0 lg:flex lg:max-w-4xl lg:flex-wrap lg:items-center lg:justify-center">
            <span className="rounded-full border border-amber-300/30 bg-amber-300 px-3.5 py-2 text-[0.72rem] font-black uppercase tracking-[0.16em] text-slate-950 shadow-lg shadow-amber-300/20 sm:px-4 sm:py-2.5 sm:text-xs lg:px-6 lg:py-3 lg:text-sm">
              Sin tener experiencia
            </span>
            <span className="rounded-full border border-amber-300/30 bg-amber-300 px-3.5 py-2 text-[0.72rem] font-black uppercase tracking-[0.16em] text-slate-950 shadow-lg shadow-amber-300/20 sm:px-4 sm:py-2.5 sm:text-xs lg:px-6 lg:py-3 lg:text-sm">
              Sin arriesgar tu capital
            </span>
            <span className="rounded-full border border-amber-300/30 bg-amber-300 px-3.5 py-2 text-[0.72rem] font-black uppercase tracking-[0.16em] text-slate-950 shadow-lg shadow-amber-300/20 sm:px-4 sm:py-2.5 sm:text-xs lg:px-6 lg:py-3 lg:text-sm">
              Dedicando solo 1h al dia
            </span>
          </div>
        </div>

        <div className="mt-5 flex justify-center sm:mt-7 lg:mt-10">
          <a
            href="#pricing"
            className="cta-glow inline-flex items-center gap-3 rounded-2xl border border-emerald-300/35 bg-gradient-to-r from-[#14532D] via-[#169447] to-[#22C55E] px-5 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_0_30px_rgba(34,197,94,0.28)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_52px_rgba(34,197,94,0.4)] sm:px-7 sm:py-4 sm:text-base lg:text-lg"
          >
            <BrandIsotipo className="h-10 w-10 shrink-0 rounded-2xl border border-white/15 sm:h-11 sm:w-11" />
            <span>¡Quiero Asegurar Mi Cupo Ahora!</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 z-20 hidden flex-col gap-2 md:flex">
        <div className="flex items-center gap-2.5 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2.5 shadow-lg">
          <span
            className={`w-2.5 h-2.5 rounded-full bg-red-500 ${pulse ? 'opacity-100' : 'opacity-40'}
            transition-opacity duration-500`}
          ></span>
          <div className="flex items-center gap-1.5">
            <i className="ri-eye-line text-white/70 text-sm w-4 h-4 flex items-center justify-center"></i>
            <span className="text-white/90 text-xs font-semibold">{viewersNow}</span>
            <span className="text-white/50 text-xs">viendo ahora</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2.5 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse"></span>
          <div className="flex items-center gap-1.5">
            <i className="ri-user-add-line text-white/70 text-sm w-4 h-4 flex items-center justify-center"></i>
            <span className="text-white/90 text-xs font-semibold">{enrolledToday}</span>
            <span className="text-white/50 text-xs">inscritos hoy</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2.5 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FCD34D] animate-pulse"></span>
          <div className="flex items-center gap-1.5">
            <i className="ri-fire-line text-white/70 text-sm w-4 h-4 flex items-center justify-center"></i>
            <span className="text-white/90 text-xs font-semibold">{recentHours}</span>
            <span className="text-white/50 text-xs">inscritos últimas 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
}
