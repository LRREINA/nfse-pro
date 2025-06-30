import { Building2, Smartphone, Monitor, Cloud, Shield } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      category: 'Prefeituras',
      icon: <Building2 className="text-blue-600" size={32} />,
      description: 'Integração direta com todas as prefeituras do Brasil',
      items: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Belo Horizonte', '+ 5.500 municípios']
    },
    {
      category: 'CRMs e ERPs',
      icon: <Monitor className="text-green-600" size={32} />,
      description: 'Conecte com suas ferramentas de gestão',
      items: ['RD Station', 'Pipedrive', 'HubSpot', 'Zoho', 'API Customizada']
    },
    {
      category: 'Certificado Digital',
      icon: <Shield className="text-blue-600" size={32} />,
      description: 'Suporte completo a certificados digitais',
      items: ['A1 (arquivo)', 'A3 (token)', 'Validação automática', 'Alertas de vencimento']
    },
    {
      category: 'Mobilidade',
      icon: <Smartphone className="text-green-600" size={32} />,
      description: 'Acesse de qualquer lugar',
      items: ['Web responsivo', 'App mobile', 'Offline sync', 'Notificações push']
    }
  ];

  return (
    <section id="integracoes" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Integrações que fazem a diferença
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conecte-se com as ferramentas que você já usa e tenha total mobilidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-xl p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">{integration.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{integration.category}</h3>
                <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
                <ul className="space-y-1">
                  {integration.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
