
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'Consultoria MS',
      role: 'Contadora',
      content: 'O NFSe Pro revolucionou nossa emissão de notas fiscais. O que antes demorava 30 minutos, agora faço em 2 minutos.',
      rating: 5,
      avatar: 'MS'
    },
    {
      name: 'João Santos',
      company: 'Tech Solutions',
      role: 'CEO',
      content: 'Integração perfeita com nossa prefeitura. Nunca tivemos problemas de rejeição desde que começamos a usar.',
      rating: 5,
      avatar: 'JS'
    },
    {
      name: 'Ana Costa',
      company: 'Design Studio',
      role: 'Designer',
      content: 'Interface muito intuitiva. Mesmo sem conhecimento técnico, consegui configurar tudo sozinha.',
      rating: 5,
      avatar: 'AC'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais de 10.000 empresas confiam no NFSe Pro para suas notas fiscais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={18} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
