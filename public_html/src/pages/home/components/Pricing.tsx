export default function Pricing() {
  const plans = [
    {
      name: 'Básico',
      price: '$99.99',
      period: 'pago único',
      description: 'Perfecto para comenzar tu camino en el trading e inversiones',
      features: [
        'Acceso completo a los 3 Pilares',
        'Material educativo para una persona que no sabe nada&nbsp;',
        'Videos instructivos paso a paso',
        'Acceso a comunidad de estudiantes',
        'Actualizaciones de contenido',
        'Certificado de finalización',
        'Soporte'
      ],
      highlighted: false,
      cta: 'Comenzar Ahora'
    },
    {
      name: 'VIP',
      price: '$249.99',
      period: 'pago único',
      description: 'Para quienes buscan mentoría personalizada y resultados acelerados',
      features: [
        'Todo lo incluido en Básico',
        'Mentoría personalizada 1 a 1',
        'Sesiones Operativas en vivo',
        'Acceso prioritario a webinars exclusivos',
        'Revisión personalizada de operaciones',
        'Estrategias avanzadas de trading',
        'Soporte directo con mentores',
        'Grupo privado VIP',
        'Llamadas mensuales de seguimiento'
      ],
      highlighted: true,
      cta: 'Acceso VIP',
      badge: 'Más Popular'
    }
  ];

  return (
    <section id="precios" className="pt-0 pb-8 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-2">
          <style>{`
            .gold-white-gradient {
              background: linear-gradient(135deg, #FFD700, #FFFFFF, #DAA520, #F5F5F5, #FDB931);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              text-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
            }
          `}</style>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="gold-white-gradient">
              EMPIEZA A CREAR TU PROPIO FUTURO<br />NADIE LO HARÁ POR TI
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all hover:shadow-2xl border ${
                plan.highlighted
                  ? 'border-[#10B981]/60 shadow-[0_0_40px_rgba(16,185,129,0.15)] lg:scale-105'
                  : 'border-white/10 shadow-lg'
              }`}
              style={{
                background: plan.highlighted
                  ? 'linear-gradient(180deg, rgba(16,185,129,0.1) 0%, rgba(10,22,40,0.98) 100%)'
                  : 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(10,22,40,0.98) 100%)',
              }}
            >
              {plan.badge && (
                <div className="absolute top-0 right-0 bg-[#10B981] text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                  {plan.badge}
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-500 text-sm">{plan.period}</span>
                  </div>
                </div>

                <a
                  href="#contacto"
                  className={`block w-full text-center px-6 py-4 rounded-lg text-lg font-bold transition-all whitespace-nowrap cursor-pointer mb-8 ${
                    plan.highlighted
                      ? 'bg-[#10B981] text-white hover:bg-[#059669] shadow-lg hover:shadow-xl hover:shadow-[#10B981]/20'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                  }`}
                >
                  {plan.cta}
                </a>

                <div className="space-y-4">
                  <div className="font-semibold text-white mb-3">Incluye:</div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center bg-[#10B981]/20 rounded-full flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-[#10B981] text-sm"></i>
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="#contacto"
                    className="relative block w-full text-center bg-gradient-to-r from-[#16A34A] to-[#22C55E] text-2xl font-extrabold px-8 py-5 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap animate-bounce hover:animate-none"
                  >
                    <span style={{ background: 'linear-gradient(135deg, #FFD700, #FDB931, #DAA520)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      Unirme Ahora
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          {/* VIP Upgrade Title */}
          <div className="text-center mb-8">
            <style>{`
              .gold-gray-upgrade {
                background: linear-gradient(135deg, #FFD700, #DAA520, #B8860B, #A0A0A0, #C0C0C0);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }
            `}</style>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="gold-gray-upgrade">
                POR SOLO $150 MÁS ADQUIERE EL </span><span className="text-[#10B981]">VIP</span><span className="gold-gray-upgrade"><br />MÁS COMPLETO Y RECOMENDADO
              </span>
            </h3>
          </div>

          <div className="border-2 border-[#10B981]/30 rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.05) 100%)' }}>
            <div className="w-16 h-16 flex items-center justify-center bg-[#10B981] rounded-full mx-auto mb-4 shadow-lg shadow-[#10B981]/30">
              <i className="ri-shield-check-line text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Garantía de Satisfacción 30 Días
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Si en los primeros 30 días no estás satisfecho con el programa, te devolvemos el 100% de tu inversión. 
              Sin preguntas, sin complicaciones. Queremos que te sientas seguro al dar este paso.
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center">
          <p className="text-base text-gray-400 mb-6 font-semibold">Métodos de pago seguros</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="w-20 h-20 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
              <i className="ri-visa-line text-4xl text-gray-300"></i>
              <span className="text-[10px] text-gray-500 mt-1">Visa</span>
            </div>
            <div className="w-20 h-20 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
              <i className="ri-mastercard-line text-4xl text-gray-300"></i>
              <span className="text-[10px] text-gray-500 mt-1">Mastercard</span>
            </div>
            <div className="w-20 h-20 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
              <i className="ri-paypal-line text-4xl text-gray-300"></i>
              <span className="text-[10px] text-gray-500 mt-1">PayPal</span>
            </div>
            <div className="w-20 h-20 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
              <i className="ri-bank-card-line text-4xl text-gray-300"></i>
              <span className="text-[10px] text-gray-500 mt-1">Débito</span>
            </div>
            <div className="w-20 h-20 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
              <i className="ri-coin-line text-4xl text-[#26A17B]"></i>
              <span className="text-[10px] text-[#26A17B] mt-1 font-semibold">USDT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
