import { useState, useEffect } from 'react';

export default function DeadlineFunnel() {
  const getDeadline = () => {
    const stored = localStorage.getItem('deadline_end');
    if (stored) {
      const end = new Date(stored).getTime();
      if (end > Date.now()) return end;
    }
    const end = new Date(Date.now() + 24 * 60 * 60 * 1000);
    localStorage.setItem('deadline_end', end.toISOString());
    return end.getTime();
  };

  const [deadline] = useState(getDeadline);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [spots, setSpots] = useState(7);

  useEffect(() => {
    const storedSpots = localStorage.getItem('deadline_spots');
    if (storedSpots) {
      setSpots(parseInt(storedSpots, 10));
    } else {
      const randomSpots = Math.floor(Math.random() * 5) + 5;
      setSpots(randomSpots);
      localStorage.setItem('deadline_spots', String(randomSpots));
    }
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, deadline - now);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section className="relative py-20 bg-[#0A1628] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#10B981]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Urgency badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-500/30 bg-red-500/10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-red-400 font-bold text-sm tracking-wide uppercase">Oferta por tiempo limitado</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Esta oferta <span className="text-red-400">expira pronto</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            El precio actual es exclusivo para los primeros estudiantes. Una vez que se acaben los cupos, el precio subirá significativamente.
          </p>
        </div>

        {/* Countdown timer */}
        <div className="flex justify-center gap-4 md:gap-6 mb-10">
          {[
            { value: pad(timeLeft.hours), label: 'Horas' },
            { value: pad(timeLeft.minutes), label: 'Minutos' },
            { value: pad(timeLeft.seconds), label: 'Segundos' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#10B981]/5 to-transparent" />
                <span className="text-3xl md:text-4xl font-bold text-white relative z-10 tabular-nums">
                  {item.value}
                </span>
              </div>
              <span className="text-xs text-gray-500 mt-2 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Spots remaining */}
        <div className="max-w-md mx-auto mb-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Cupos disponibles</span>
            <span className="text-sm font-bold text-[#10B981]">{spots} de 20</span>
          </div>
          <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-[#10B981] transition-all duration-1000"
              style={{ width: `${((20 - spots) / 20) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            <i className="ri-fire-fill text-orange-400 mr-1"></i>
            {spots <= 5 ? '¡Últimos cupos! Se están agotando rápidamente' : 'Los cupos se están llenando rápido'}
          </p>
        </div>

        {/* Urgency cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            {
              icon: 'ri-timer-flash-line',
              title: 'Precio sube en 24h',
              desc: 'El precio actual no estará disponible después del contador',
              color: 'text-red-400',
              bg: 'bg-red-500/10',
              border: 'border-red-500/20',
            },
            {
              icon: 'ri-group-line',
              title: 'Cupos limitados',
              desc: 'Solo aceptamos 20 estudiantes por grupo para garantizar calidad',
              color: 'text-orange-400',
              bg: 'bg-orange-500/10',
              border: 'border-orange-500/20',
            },
            {
              icon: 'ri-gift-line',
              title: 'Bonos exclusivos',
              desc: 'Los bonos adicionales solo están disponibles durante esta oferta',
              color: 'text-[#10B981]',
              bg: 'bg-[#10B981]/10',
              border: 'border-[#10B981]/20',
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`rounded-xl border ${card.border} ${card.bg} p-5 text-center`}
            >
              <div className={`w-10 h-10 flex items-center justify-center ${card.bg} rounded-lg mx-auto mb-3`}>
                <i className={`${card.icon} ${card.color} text-xl`}></i>
              </div>
              <h4 className={`font-bold ${card.color} mb-1 text-sm`}>{card.title}</h4>
              <p className="text-xs text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#pricing"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg whitespace-nowrap cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] animate-[ctaBounce_1.5s_ease-in-out_infinite]"
            style={{
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: '#FFD700',
              boxShadow: '0 0 25px rgba(16,185,129,0.4)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            <i className="ri-rocket-2-fill text-2xl"></i>
            ¡Quiero Asegurar Mi Cupo Ahora!
            <i className="ri-arrow-right-line text-xl"></i>
          </a>
          <p className="text-xs text-gray-500 mt-4 flex items-center justify-center gap-2">
            <i className="ri-shield-check-fill text-[#10B981]"></i>
            Garantía de satisfacción de 7 días — Si no te convence, te devolvemos tu dinero
          </p>
        </div>
      </div>
    </section>
  );
}
