import { useState } from 'react';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    country: 'México',
    city: 'Guadalajara',
    photo: 'https://readdy.ai/api/search-image?query=young%20latin%20american%20man%20in%20his%20late%20twenties%20smiling%20confidently%20wearing%20casual%20dark%20shirt%20professional%20headshot%20portrait%20with%20soft%20neutral%20background%20warm%20lighting&width=200&height=200&seq=test-carlos-01&orientation=squarish',
    investmentBefore: '$500',
    earningsNow: '$4,280/mes',
    percentGrowth: '+756%',
    timeInProgram: '4 meses',
    quote: 'Empecé sin saber absolutamente nada de trading. En 60 días ya estaba generando mis primeras ganancias consistentes. El método es claro y directo.',
    badge: 'Top Trader',
    verified: true,
  },
  {
    name: 'Valentina Ríos',
    country: 'Colombia',
    city: 'Medellín',
    photo: 'https://readdy.ai/api/search-image?query=young%20colombian%20woman%20in%20her%20mid%20twenties%20with%20dark%20hair%20smiling%20warmly%20professional%20portrait%20headshot%20soft%20neutral%20background%20natural%20lighting%20casual%20elegant%20style&width=200&height=200&seq=test-valentina-02&orientation=squarish',
    investmentBefore: '$300',
    earningsNow: '$3,150/mes',
    percentGrowth: '+950%',
    timeInProgram: '3 meses',
    quote: 'Dejé mi trabajo de oficina hace 2 meses. Ahora opero desde casa y gano más que antes. La mentoría VIP fue la mejor decisión de mi vida.',
    badge: 'Mejor Resultado',
    verified: true,
  },
  {
    name: 'Diego Álvarez',
    country: 'Argentina',
    city: 'Buenos Aires',
    photo: 'https://readdy.ai/api/search-image?query=argentinian%20man%20in%20his%20early%20thirties%20with%20short%20beard%20confident%20expression%20professional%20headshot%20portrait%20neutral%20dark%20background%20studio%20lighting%20wearing%20polo%20shirt&width=200&height=200&seq=test-diego-03&orientation=squarish',
    investmentBefore: '$1,000',
    earningsNow: '$6,420/mes',
    percentGrowth: '+542%',
    timeInProgram: '5 meses',
    quote: 'Ya había probado otros cursos y perdí dinero. Este programa me enseñó gestión de riesgo real. Ahora soy consistente cada semana.',
    badge: null,
    verified: true,
  },
  {
    name: 'Luciana Paredes',
    country: 'Perú',
    city: 'Lima',
    photo: 'https://readdy.ai/api/search-image?query=peruvian%20woman%20in%20her%20late%20twenties%20with%20long%20dark%20hair%20bright%20smile%20professional%20portrait%20headshot%20soft%20warm%20background%20natural%20makeup%20casual%20chic%20style&width=200&height=200&seq=test-luciana-04&orientation=squarish',
    investmentBefore: '$200',
    earningsNow: '$2,938/mes',
    percentGrowth: '+1369%',
    timeInProgram: '2 meses',
    quote: 'Con solo 1 hora al día logré resultados que jamás imaginé. El grupo VIP y las sesiones en vivo son oro puro. Totalmente recomendado.',
    badge: 'Récord',
    verified: true,
  },
  {
    name: 'Andrés Fuentes',
    country: 'Chile',
    city: 'Santiago',
    photo: 'https://readdy.ai/api/search-image?query=chilean%20man%20in%20his%20mid%20thirties%20with%20glasses%20friendly%20expression%20professional%20headshot%20portrait%20clean%20neutral%20background%20soft%20studio%20lighting%20wearing%20casual%20blazer&width=200&height=200&seq=test-andres-05&orientation=squarish',
    investmentBefore: '$750',
    earningsNow: '$5,100/mes',
    percentGrowth: '+580%',
    timeInProgram: '6 meses',
    quote: 'Soy ingeniero y siempre fui escéptico. Los números no mienten: llevo 4 meses consecutivos en positivo. El método funciona si lo sigues.',
    badge: null,
    verified: true,
  },
  {
    name: 'Camila Soto',
    country: 'Ecuador',
    city: 'Quito',
    photo: 'https://readdy.ai/api/search-image?query=ecuadorian%20woman%20in%20her%20early%20twenties%20with%20curly%20hair%20genuine%20smile%20professional%20portrait%20headshot%20warm%20neutral%20background%20natural%20lighting%20wearing%20simple%20elegant%20top&width=200&height=200&seq=test-camila-06&orientation=squarish',
    investmentBefore: '$400',
    earningsNow: '$3,750/mes',
    percentGrowth: '+837%',
    timeInProgram: '3 meses',
    quote: 'Tenía miedo de perder mi dinero. La garantía me dio confianza para empezar. Hoy genero ingresos extras que cambiaron mi calidad de vida.',
    badge: null,
    verified: true,
  },
];

const stats = [
  { value: '500+', label: 'Estudiantes Activos', icon: 'ri-group-fill' },
  { value: '$1.4M', label: 'Ganancias Generadas', icon: 'ri-money-dollar-circle-fill' },
  { value: '94%', label: 'Tasa de Éxito', icon: 'ri-bar-chart-fill' },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.ceil(testimonials.length / visibleCount) - 1;

  const goNext = () => setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const goPrev = () => setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  const visibleTestimonials = testimonials.slice(
    activeIndex * visibleCount,
    activeIndex * visibleCount + visibleCount
  );

  return (
    <section id="testimonios" className="relative pt-12 pb-24 bg-[#0A1628] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#DAA520]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#DAA520]/30 bg-[#DAA520]/10 mb-6">
            <i className="ri-star-fill text-[#DAA520] text-sm"></i>
            <span className="text-[#DAA520] font-bold text-sm tracking-wide uppercase">Historias de Éxito</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Resultados Reales de{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FFD700, #DAA520, #FDB931)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Nuestros Traders
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estudiantes reales que transformaron su vida financiera con nuestro método de 60 días
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((t, i) => (
            <div
              key={`${activeIndex}-${i}`}
              className="relative rounded-2xl border border-white/10 p-7 transition-all duration-300 hover:border-[#10B981]/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] group"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(10,22,40,0.98) 100%)',
              }}
            >
              {/* Badge */}
              {t.badge && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DAA520]/15 border border-[#DAA520]/30">
                  <i className="ri-trophy-fill text-[#DAA520] text-xs"></i>
                  <span className="text-[#DAA520] text-[11px] font-bold">{t.badge}</span>
                </div>
              )}

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#DAA520]/50 shadow-lg">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {t.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 flex items-center justify-center bg-[#10B981] rounded-full border-2 border-[#0A1628]">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">{t.name}</h4>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <i className="ri-map-pin-2-fill text-[#10B981] text-xs"></i>
                    {t.city}, {t.country}
                  </p>
                  <p className="text-[#10B981] text-xs font-semibold flex items-center gap-1 mt-0.5">
                    <i className="ri-verified-badge-fill text-xs"></i>
                    Estudiante Verificado
                  </p>
                </div>
              </div>

              {/* Results Box */}
              <div className="rounded-xl bg-[#10B981]/8 border border-[#10B981]/15 p-4 mb-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Inversión Inicial</p>
                    <p className="text-white font-bold text-xl">{t.investmentBefore}</p>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <p className="text-gray-500 text-xs mb-1">Ganancia Actual</p>
                    <p className="text-[#10B981] font-extrabold text-xl flex items-center gap-1">
                      {t.earningsNow}
                      <i className="ri-arrow-up-line text-sm"></i>
                    </p>
                    <span className="text-[#10B981]/70 text-[11px] font-semibold">{t.percentGrowth}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-4">
                <i className="ri-double-quotes-l text-[#DAA520]/15 text-4xl absolute -top-2 -left-1"></i>
                <p className="text-gray-300 text-sm leading-relaxed pl-4">
                  {t.quote}
                </p>
              </div>

              {/* Time in program */}
              <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                <i className="ri-time-line text-xs"></i>
                <span>En el programa hace {t.timeInProgram}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-20">
          <button
            onClick={goPrev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-white text-lg"></i>
          </button>
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  i === activeIndex ? 'bg-[#10B981] w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          <button
            onClick={goNext}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-white text-lg"></i>
          </button>
        </div>

        {/* Global Stats */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20">
                  <i className={`${stat.icon} text-[#10B981] text-xl`}></i>
                </div>
                <p
                  className="text-3xl md:text-4xl font-extrabold mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #FFD700, #DAA520, #FDB931)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <style>{`
            @keyframes ctaBounce {
              0%, 100% { transform: translateY(0); }
              15% { transform: translateY(-8px); }
              30% { transform: translateY(0); }
              45% { transform: translateY(-5px); }
              60% { transform: translateY(0); }
            }
            @keyframes ctaGlow {
              0%, 100% { box-shadow: 0 0 25px rgba(16,185,129,0.4); }
              50% { box-shadow: 0 0 45px rgba(16,185,129,0.7), 0 0 80px rgba(16,185,129,0.2); }
            }
            .cta-bounce-btn {
              animation: ctaBounce 2.5s ease-in-out infinite, ctaGlow 2s ease-in-out infinite;
            }
            .cta-bounce-btn:hover {
              animation: none;
              transform: scale(1.05);
              box-shadow: 0 0 40px rgba(16,185,129,0.5) !important;
            }
          `}</style>
          <a
            href="#precios"
            className="cta-bounce-btn inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg whitespace-nowrap cursor-pointer transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
              color: '#FFD700',
              boxShadow: '0 0 25px rgba(16,185,129,0.4)',
            }}
          >
            <i className="ri-rocket-2-fill text-2xl"></i>
            ¡Quiero Resultados Como Estos!
            <i className="ri-arrow-right-line text-xl"></i>
          </a>
          <p className="text-xs text-gray-500 mt-4">
            Únete a más de <strong className="text-[#10B981]">500 traders exitosos</strong> que ya transformaron su vida
          </p>
        </div>
      </div>
    </section>
  );
}
