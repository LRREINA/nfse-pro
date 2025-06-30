
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 49',
      period: '/mês',
      description: 'Ideal para MEIs e pequenos prestadores',
      features: [
        'Emissão ilimitada de NFS-e',
        '1 usuário',
        'Até 100 clientes cadastrados',
        'Integração com prefeituras',
        'Envio automático por email',
        'Suporte via email'
      ],
      highlighted: false,
      buttonText: 'Começar agora',
      planId: 'basic'
    },
    {
      name: 'Profissional',
      price: 'R$ 99',
      period: '/mês',
      description: 'Para empresas em crescimento',
      features: [
        'Emissão ilimitada de NFS-e',
        'Até 3 usuários',
        'Clientes ilimitados',
        'Integração com prefeituras',
        'Envio automático por email',
        'Relatórios avançados',
        'API de integração',
        'Suporte prioritário'
      ],
      highlighted: true,
      buttonText: 'Mais Popular',
      planId: 'professional'
    },
    {
      name: 'Enterprise',
      price: 'R$ 199',
      period: '/mês',
      description: 'Para empresas estabelecidas',
      features: [
        'Emissão ilimitada de NFS-e',
        'Usuários ilimitados',
        'Múltiplos CNPJs',
        'Integração com prefeituras',
        'Envio automático por email',
        'Relatórios completos',
        'API completa',
        'Automações avançadas',
        'Suporte dedicado',
        'Onboarding personalizado'
      ],
      highlighted: false,
      buttonText: 'Falar com vendas',
      planId: 'enterprise'
    }
  ];

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planos que crescem com seu negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Emissão ilimitada de NFS-e em todos os planos. Teste grátis por 15 dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 relative ${
                plan.highlighted
                  ? 'ring-2 ring-blue-600 shadow-xl scale-105'
                  : 'shadow-lg hover:shadow-xl transition-shadow duration-300'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/checkout?plan=${plan.planId}`}>
                <Button
                  className={`w-full py-3 ${
                    plan.highlighted
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Teste grátis por 15 dias. Sem compromisso, sem cartão de crédito.
          </p>
          <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Ver comparação completa de planos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
