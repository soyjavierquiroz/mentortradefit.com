import { useState } from 'react';

const transformations = [
  {
    name: 'Martín Herrera',
    country: 'México',
    city: 'CDMX',
    photo: 'https://readdy.ai/api/search-image?query=young%20mexican%20man%20early%20thirties%20short%20dark%20hair%20confident%20serious%20expression%20professional%20portrait%20headshot%20dark%20moody%20background%20studio%20lighting%20wearing%20black%20tshirt&width=200&height=200&seq=ba-martin-01&orientation=squarish',
    timeframe: '90 días',
    before: {
      income: '$800/mes',
      situation: 'Empleado en call center, viviendo al día sin ahorros ni inversiones',
      mindset: 'Sin conocimiento financiero',
      hours: 'Sin tiempo libre',
    },
    after: {
      income: '$4,200/mes',
      situation: 'Trader independiente operando desde casa con ingresos consistentes',
      mindset: 'Mentalidad de inversionista',
      hours: '2 horas al día',
    },
    growthPercent: '+425%',
    winRate: '82%',
  },
  {
    name: 'Isabella Torres',
    country: 'Colombia',
    city: 'Bogotá',
    photo: 'https://readdy.ai/api/search-image?query=colombian%20woman%20late%20twenties%20long%20straight%20dark%20hair%20warm%20confident%20smile%20professional%20portrait%20headshot%20dark%20neutral%20background%20soft%20studio%20lighting%20wearing%20elegant%20dark%20blouse&width=200&height=200&seq=ba-isabella-02&orientation=squarish',
    timeframe: '60 días',
    before: {
      income: '$600/mes',
      situation: 'Estudiante universitaria con deudas y trabajos temporales',
      mindset: 'Miedo a invertir',
      hours: 'Dependía de otros',
    },
    after: {
      income: '$3,800/mes',
      situation: 'Genera ingresos pasivos mientras termina su carrera universitaria',
      mindset: 'Confianza total',
      hours: '1.5 horas al día',
    },
    growthPercent: '+533%',
    winRate: '79%',
  },
  {
    name: 'Roberto Castillo',
    country: 'Argentina',
    city: 'Córdoba',
    photo: 'https://readdy.ai/api/search-image?query=argentinian%20man%20mid%20thirties%20with%20trimmed%20beard%20determined%20expression%20professional%20portrait%20headshot%20dark%20background%20dramatic%20lighting%20wearing%20dark%20henley%20shirt&width=200&height=200&seq=ba-roberto-03&orientation=squarish',
    timeframe: '120 días',
    before: {
      income: '$1,200/mes',
      situation: 'Dueño de negocio pequeño con ingresos inestables y estrés constante',
      mindset: 'Frustrado con finanzas',
      hours: '12 horas trabajando',
    },
    after: {
      income: '$7,500/mes',
      situation: 'Diversificó ingresos con trading y ahora su negocio crece solo',
      mindset: 'Libertad financiera',
      hours: '3 horas al día',
    },
    growthPercent: '+525%',
    winRate: '88%',
  },
  {
    name: 'Sofía Ramírez',
    country: 'Chile',
    city: 'Valparaíso',
    photo: 'https://readdy.ai/api/search-image?query=chilean%20woman%20early%20thirties%20with%20wavy%20brown%20hair%20bright%20genuine%20smile%20professional%20portrait%20headshot%20dark%20moody%20background%20natural%20soft%20lighting%20wearing%20casual%20dark%20sweater&width=200&height=200&seq=ba-sofia-04&orientation=squarish',
    timeframe: '75 días',
    before: {
      income: '$950/mes',
      situation: 'Madre soltera trabajando doble turno sin ver a sus hijos',
      mindset: 'Agotada y sin esperanza',
      hours: 'Sin tiempo para familia',
    },
    after: {
      income: '$5,100/mes',
      situation: 'Trabaja desde casa y pasa todo el día con sus hijos',
      mindset: 'Empoderada y libre',
      hours: '2 horas al día',
    },
    growthPercent: '+437%',
    winRate: '85%',
  },
];

const beforeLabels = [
  { key: 'income', icon: 'ri-money-dollar-circle-line', label: 'Ingreso' },
  { key: 'situation', icon: 'ri-user-line', label: 'Situación' },
  { key: 'mindset', icon: 'ri-brain-line', label: 'Mentalidad' },
  { key: 'hours', icon: 'ri-time-line', label: 'Tiempo' },
];

export default function BeforeAfter() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="antes-despues" className="relative py-24 bg-[#0A1628] overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#10B981]/4 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#DAA520]/4 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 mb-6">
            <i className="ri-arrow-left-right-line text-[#10B981] text-sm"></i>
            <span className="text-[#10B981] font-bold text-sm tracking-wide uppercase">Transformación Real</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            De Donde Estaban a{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FFD700, #DAA520, #FDB931)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Donde Están Hoy
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Historias reales de estudiantes que cambiaron su vida por completo en menos de 120 días
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {transformations.map((t, index) => {
            const isActive = activeCard === index;
            return (
              <div
                key={index}
                className={`relative rounded-2xl border overflow-hidden transition-all duration-500 cursor-pointer ${
                  isActive
                    ? 'border-[#10B981]/50 shadow-[0_0_40px_rgba(16,185,129,0.12)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(10,22,40,0.98) 100%)',
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Top bar */}
                <div
                  className="h-1 w-full transition-all duration-500"
                  style={{
                    background: isActive
                      ? 'linear-gradient(90deg, #EF4444, #10B981)'
                      : 'linear-gradient(90deg, rgba(239,68,68,0.3), rgba(16,185,129,0.3))',
                  }}
                />

                <div className="p-7">
                  {/* Profile header */}
                  <div className="flex items-center justify-between mb-7">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#DAA520]/50 shadow-lg">
                          <img src={t.photo} alt={t.name} className="w-full h-full object-cover object-top" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center bg-[#10B981] rounded-full border-2 border-[#0A1628]">
                          <i className="ri-check-line text-white text-xs"></i>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">{t.name}</h4>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                          <i className="ri-map-pin-2-fill text-[#10B981] text-xs"></i>
                          {t.city}, {t.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DAA520]/10 border border-[#DAA520]/25">
                        <i className="ri-timer-flash-line text-[#DAA520] text-xs"></i>
                        <span className="text-[#DAA520] text-xs font-bold">{t.timeframe}</span>
                      </div>
                      <span className="text-gray-600 text-[10px]">de transformación</span>
                    </div>
                  </div>

                  {/* Before / After comparison */}
                  <div className="grid grid-cols-2 gap-0 rounded-xl overflow-hidden border border-white/5">
                    {/* ANTES */}
                    <div className="bg-[#EF4444]/5 border-r border-white/5 p-5">
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#EF4444]/20">
                          <i className="ri-close-line text-[#EF4444] text-xs"></i>
                        </div>
                        <span className="text-[#EF4444] font-bold text-sm uppercase tracking-wider">Antes</span>
                      </div>
                      <div className="space-y-4">
                        {beforeLabels.map((item) => (
                          <div key={item.key}>
                            <div className="flex items-center gap-1.5 mb-1">
                              <i className={`${item.icon} text-gray-600 text-xs`}></i>
                              <span className="text-gray-600 text-[11px] uppercase tracking-wide">{item.label}</span>
                            </div>
                            <p className={`text-sm leading-snug ${item.key === 'income' ? 'text-[#EF4444] font-bold text-base' : 'text-gray-400'}`}>
                              {t.before[item.key as keyof typeof t.before]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* DESPUÉS */}
                    <div className="bg-[#10B981]/5 p-5">
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#10B981]/20">
                          <i className="ri-check-line text-[#10B981] text-xs"></i>
                        </div>
                        <span className="text-[#10B981] font-bold text-sm uppercase tracking-wider">Después</span>
                      </div>
                      <div className="space-y-4">
                        {beforeLabels.map((item) => (
                          <div key={item.key}>
                            <div className="flex items-center gap-1.5 mb-1">
                              <i className={`${item.icon} text-gray-600 text-xs`}></i>
                              <span className="text-gray-600 text-[11px] uppercase tracking-wide">{item.label}</span>
                            </div>
                            <p className={`text-sm leading-snug ${item.key === 'income' ? 'text-[#10B981] font-bold text-base' : 'text-white'}`}>
                              {t.after[item.key as keyof typeof t.after]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center py-3 rounded-xl bg-white/3 border border-white/5">
                      <p
                        className="text-xl font-extrabold mb-0.5"
                        style={{
                          background: 'linear-gradient(135deg, #FFD700, #DAA520)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {t.growthPercent}
                      </p>
                      <p className="text-gray-500 text-[10px] uppercase tracking-wide">Crecimiento</p>
                    </div>
                    <div className="text-center py-3 rounded-xl bg-white/3 border border-white/5">
                      <p className="text-xl font-extrabold text-[#10B981] mb-0.5">{t.winRate}</p>
                      <p className="text-gray-500 text-[10px] uppercase tracking-wide">Win Rate</p>
                    </div>
                    <div className="text-center py-3 rounded-xl bg-white/3 border border-white/5">
                      <p className="text-xl font-extrabold text-white mb-0.5">{t.timeframe}</p>
                      <p className="text-gray-500 text-[10px] uppercase tracking-wide">Tiempo</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary bar */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-[#10B981]/20 p-8 mb-14" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(10,22,40,0.95) 100%)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'ri-arrow-up-double-line', value: '+480%', label: 'Crecimiento Promedio', color: '#10B981' },
              { icon: 'ri-timer-line', value: '90 días', label: 'Tiempo Promedio', color: '#DAA520' },
              { icon: 'ri-pie-chart-line', value: '83.5%', label: 'Win Rate Promedio', color: '#10B981' },
              { icon: 'ri-heart-pulse-line', value: '100%', label: 'Cambio de Vida', color: '#DAA520' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 flex items-center justify-center mx-auto mb-2 rounded-lg" style={{ background: `${stat.color}15`, border: `1px solid ${stat.color}25` }}>
                  <i className={`${stat.icon} text-lg`} style={{ color: stat.color }}></i>
                </div>
                <p className="text-2xl md:text-3xl font-extrabold text-white mb-0.5">{stat.value}</p>
                <p className="text-gray-500 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <style>{`
            @keyframes baCtaBounce {
              0%, 100% { transform: translateY(0); }
              15% { transform: translateY(-8px); }
              30% { transform: translateY(0); }
              45% { transform: translateY(-5px); }
              60% { transform: translateY(0); }
            }
            @keyframes baCtaGlow {
              0%, 100% { box-shadow: 0 0 25px rgba(16,185,129,0.4); }
              50% { box-shadow: 0 0 45px rgba(16,185,129,0.7), 0 0 80px rgba(16,185,129,0.2); }
            }
            .ba-cta-bounce-btn {
              animation: baCtaBounce 2.5s ease-in-out infinite, baCtaGlow 2s ease-in-out infinite;
            }
            .ba-cta-bounce-btn:hover {
              animation: none;
              transform: scale(1.05);
              box-shadow: 0 0 40px rgba(16,185,129,0.5) !important;
            }
          `}</style>
          <a
            href="#precios"
            className="ba-cta-bounce-btn inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg whitespace-nowrap cursor-pointer transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: '#FFD700',
              boxShadow: '0 0 25px rgba(16,185,129,0.4)',
            }}
          >
            <i className="ri-exchange-line text-2xl"></i>
            ¡Quiero Mi Transformación!
            <i className="ri-arrow-right-line text-xl"></i>
          </a>
          <p className="text-xs text-gray-500 mt-4">
            Tu historia de éxito puede ser la próxima
          </p>
        </div>
      </div>
    </section>
  );
}
