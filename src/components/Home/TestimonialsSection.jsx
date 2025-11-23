import React from 'react'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      location: 'Ciudad de Panamá, Panamá',
      rating: 5,
      text: 'Bocas del Toro superó todas mis expectativas. Las islas son hermosas, la gente es increíblemente amable y la comida deliciosa. Gracias a esta guía encontré los mejores lugares para hospedarme y comer. ¡Definitivamente volveré!',
      avatar: '👩🏻'
    },
    {
      id: 2,
      name: 'James Mitchell',
      location: 'Miami, USA',
      rating: 5,
      text: 'Best Caribbean destination I\'ve visited! The snorkeling at Zapatillas Islands was absolutely incredible. Found amazing tours and local guides through this site. The water taxis made island hopping so easy and affordable.',
      avatar: '👨🏼'
    },
    {
      id: 3,
      name: 'Carlos Ramírez',
      location: 'Medellín, Colombia',
      rating: 5,
      text: 'Un paraíso escondido en el Caribe. La bioluminiscencia es algo que todos deben experimentar al menos una vez en la vida. Los restaurantes locales tienen la mejor comida de mar que he probado. Bocas tiene la mezcla perfecta de aventura y relajación.',
      avatar: '👨🏽'
    },
    {
      id: 4,
      name: 'Sophie Laurent',
      location: 'París, Francia',
      rating: 5,
      text: 'Magnifique! Je suis tombée amoureuse de Bocas del Toro. Les plages sont paradisiaques, l\'ambiance est décontractée et la vie nocturne est surprenante. J\'ai adoré le Aqua Lounge et les bars locaux. Une expérience inoubliable!',
      avatar: '👩🏼'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Lo Que Dicen Nuestros Visitantes
        </h2>
        <p className="text-gray-600 text-lg">
          Experiencias reales de viajeros que han explorado Bocas del Toro
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
          >
            <div className="flex items-start mb-4">
              <div className="text-4xl mr-4">{testimonial.avatar}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                  <Quote size={24} className="text-blue-500 opacity-50" />
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
