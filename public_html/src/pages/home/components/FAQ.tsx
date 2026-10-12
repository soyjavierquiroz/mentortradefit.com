
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Necesito experiencia previa en trading o inversiones?',
      answer: 'No, absolutamente no. Nuestro programa está diseñado desde cero para personas sin experiencia. Comenzamos con los conceptos más básicos y avanzamos gradualmente. Muchos de nuestros estudiantes más exitosos empezaron sin saber nada sobre mercados financieros. Lo único que necesitas es compromiso y ganas de aprender.'
    },
    {
      question: '¿Cuánto tiempo necesito dedicar si trabajo 10-12 horas al día?',
      answer: 'Entendemos perfectamente tu situación porque diseñamos el programa pensando en ti. Puedes avanzar con solo 30-60 minutos al día. El contenido está organizado en módulos cortos que puedes ver en tu tiempo libre. Además, las estrategias que enseñamos no requieren estar pegado a la pantalla todo el día. Muchos estudiantes revisan el mercado solo 15-20 minutos por la mañana y por la noche.'
    },
    {
      question: '¿Cuánto dinero necesito para empezar a invertir?',
      answer: 'Puedes comenzar a practicar con cuentas demo (dinero virtual) sin arriesgar nada. Cuando estés listo para operar con dinero real, recomendamos empezar con un mínimo de $500-$1000, aunque algunos brokers permiten comenzar con menos. Lo importante es que sea dinero que puedas permitirte arriesgar mientras aprendes. Nunca uses dinero que necesites para gastos esenciales.'
    },
    {
      question: '¿Qué diferencia hay entre el plan Básico y VIP?',
      answer: 'El plan Básico te da acceso completo a todo el contenido educativo, los 3 pilares, videos, material descargable y la comunidad de estudiantes. Es perfecto para aprender a tu ritmo. El plan VIP incluye todo eso MÁS mentoría personalizada 1 a 1, revisión de tus operaciones, sesiones en vivo, y soporte directo con mentores. Es ideal si quieres acelerar tu aprendizaje con guía personalizada.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0A1628]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Preguntas <span className="text-[#10B981]">Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-400">
            Resolvemos tus dudas más importantes sobre el programa y las inversiones
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden hover:border-[#10B981]/30 transition-all"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(10,22,40,0.98) 100%)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white text-lg pr-4">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 flex items-center justify-center bg-[#10B981]/10 rounded-lg flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <i className="ri-arrow-down-s-line text-[#10B981] text-xl"></i>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
