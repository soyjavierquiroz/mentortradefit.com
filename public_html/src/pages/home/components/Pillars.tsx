
import { useState } from 'react';

export default function Pillars() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pillars = [
    {
      number: '01',
      icon: 'ri-brain-line',
      title: 'Mentalidad y Gestión de Riesgo',
      shortTitle: 'Mentalidad',
      description:
        'Desarrolla la psicología del inversionista exitoso. Controla emociones, gestiona riesgo y toma decisiones CORRECTAS.',
      color: '#10B981',
      benefits: [
        'Control emocional',
        'Protección de capital',
        'Mentalidad a largo plazo',
        'Gestión del miedo',
      ],
    },
    {
      number: '02',
      icon: 'ri-line-chart-line',
      title: 'Análisis paso a paso simple',
      shortTitle: 'Análisis',
      description:
        'Domina herramientas profesionales. Lee gráficos, identifica tendencias y encuentra puntos óptimos de entrada y salida de oportunidades inversion',
      color: '#059669',
      benefits: [
        'Lectura de gráficos',
        'Patrones rentables',
        'Indicadores técnicos',
        'Timing perfecto',
      ],
    },
    {
      number: '03',
      icon: 'ri-briefcase-line',
      title: 'Construcción de Portafolio',
      shortTitle: 'Portafolio',
      description:
        'Construye un portafolio diversificado. Selecciona activos, balancea riesgo-retorno y crea tu Escudo Financiero.',
      color: '#047857',
      benefits: [
        'Diversificación inteligente',
        'Activos rentables',
        'Balance óptimo',
        'Crecimiento sostenible',
      ],
    },
  ];

  return (
    <section id="pilares" className="py-20 pb-12 bg-[#0A1628]">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pillar-bar {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .pillar-bar:nth-child(1) { animation-delay: 0.1s; }
        .pillar-bar:nth-child(2) { animation-delay: 0.25s; }
        .pillar-bar:nth-child(3) { animation-delay: 0.4s; }
        .pillar-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          transition: left 0.6s ease;
        }
        .pillar-card:hover .pillar-shine {
          left: 100%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Title - positioned higher */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 bg-[#10B981]/15 border border-[#10B981]/30 rounded-full px-8 py-3 mb-6 shadow-lg shadow-[#10B981]/10">
            <i className="ri-shield-star-line text-[#10B981] text-2xl"></i>
            <span className="text-[#10B981] text-lg font-bold tracking-wide uppercase">
              Nuestro Método
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Los 3 Pilares del{' '}
            <span className="text-[#10B981]">Escudo Financiero</span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Tres pilares fundamentales que te darán las herramientas para
            construir tu seguridad financiera de manera sólida.
          </p>
        </div>

        {/* Pillar Bars */}
        <div className="flex flex-col lg:flex-row gap-5 mt-12">
          {pillars.map((pillar, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                className="pillar-bar flex-1 opacity-0"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`pillar-card relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer h-full ${
                    isHovered
                      ? 'border-[#10B981]/60 shadow-[0_0_40px_rgba(16,185,129,0.15)]'
                      : 'border-white/10 shadow-lg'
                  }`}
                  style={{
                    background: isHovered
                      ? 'linear-gradient(180deg, rgba(16,185,129,0.12) 0%, rgba(10,22,40,0.98) 100%)'
                      : 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(10,22,40,0.98) 100%)',
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  }}
                >
                  <div className="pillar-shine"></div>

                  {/* Top accent bar */}
                  <div
                    className="h-1.5 w-full transition-all duration-500"
                    style={{
                      background: isHovered
                        ? `linear-gradient(90deg, ${pillar.color}, #34D399)`
                        : 'rgba(255,255,255,0.08)',
                    }}
                  ></div>

                  <div className="p-7 flex flex-col h-full">
                    {/* Number + Icon row */}
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-6xl font-black transition-all duration-500"
                        style={{
                          background: 'linear-gradient(135deg, #FFD700, #DAA520, #B8860B)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          filter: isHovered ? 'brightness(1.3) drop-shadow(0 0 8px rgba(255,215,0,0.4))' : 'brightness(0.7)',
                        }}
                      >
                        {pillar.number}
                      </span>
                      <div
                        className={`w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-500 ${
                          isHovered ? 'bg-[#10B981] shadow-lg shadow-[#10B981]/30' : 'bg-white/5'
                        }`}
                      >
                        <i
                          className={`${pillar.icon} text-2xl ${
                            isHovered ? 'text-white' : 'text-gray-500'
                          } transition-colors duration-500`}
                        ></i>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-bold mb-3 leading-tight transition-all duration-500"
                      style={{
                        color: '#FFFFFF',
                        textShadow: isHovered
                          ? '0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(255,255,255,0.2)'
                          : '0 0 10px rgba(255,255,255,0.15)',
                      }}
                    >
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    {/* Benefits list */}
                    <div className="space-y-2.5 mt-auto">
                      {pillar.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <div
                            className={`w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-500 ${
                              isHovered ? 'bg-[#10B981]/20' : 'bg-white/5'
                            }`}
                          >
                            <i
                              className={`ri-check-line text-xs ${
                                isHovered ? 'text-[#10B981]' : 'text-gray-600'
                              } transition-colors duration-500`}
                            ></i>
                          </div>
                          <span
                            className={`text-sm transition-all duration-500 ${
                              isHovered ? 'text-white' : 'text-gray-400'
                            }`}
                            style={{
                              textShadow: isHovered ? '0 0 8px rgba(255,255,255,0.2)' : 'none',
                            }}
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom arrow indicator */}
                    <div
                      className={`mt-6 pt-5 border-t transition-all duration-500 ${
                        isHovered ? 'border-[#10B981]/30' : 'border-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-sm font-semibold transition-colors duration-500 ${
                            isHovered ? 'text-[#10B981]' : 'text-gray-600'
                          }`}
                        >
                          Explorar pilar
                        </span>
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-500 ${
                            isHovered ? 'bg-[#10B981]/20 translate-x-1' : 'bg-white/5'
                          }`}
                        >
                          <i
                            className={`ri-arrow-right-line text-sm ${
                              isHovered ? 'text-[#10B981]' : 'text-gray-600'
                            } transition-colors duration-500`}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          {/* Removed CTA button */}
        </div>
      </div>
    </section>
  );
}
