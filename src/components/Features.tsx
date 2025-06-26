
import { FileText, Zap, Building, Mail, BarChart3, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileText className="text-blue-600" size={32} />,
      title: 'Emissão Simplificada',
      description: 'Interface intuitiva para emitir NFS-e em poucos cliques. Cadastre clientes e serviços para preenchimento automático.'
    },
    {
      icon: <Zap className="text-green-600" size={32} />,
      title: 'Cálculo Automático',
      description: 'Cálculo automático de impostos (ISS, INSS, IRPJ) com configuração personalizada para seu regime tributário.'
    },
    {
      icon: <Building className="text-blue-600" size={32} />,
      title: 'Integração com Prefeituras',
      description: 'Integração direta com todas as prefeituras do Brasil. Configuração guiada e transmissão automática.'
    },
    {
      icon: <Mail className="text-green-600" size={32} />,
      title: 'Envio Automático',
      description: 'Envio automático da NFS-e por email para cliente e contador. Geração de PDF e XML organizados.'
    },
    {
      icon: <BarChart3 className="text-blue-600" size={32} />,
      title: 'Relatórios Completos',
      description: 'Dashboard com métricas importantes e relatórios customizáveis por período, cliente e serviço.'
    },
    {
      icon: <Shield className="text-green-600" size={32} />,
      title: 'API Robusta',
      description: 'API completa para integração com CRMs, sistemas de faturamento e outras plataformas.'
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tudo que você precisa para gerenciar suas NFS-e
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Funcionalidades desenvolvidas especificamente para empresas prestadoras de serviço
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
