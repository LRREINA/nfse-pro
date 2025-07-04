import { Button } from '@/components/ui/button';
import { Check, FileText, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            A gestão inteligente de{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              NFS-e
            </span>{' '}
            para sua empresa
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Emita suas Notas Fiscais de Serviço de forma rápida, segura e automatizada. 
            Integração direta com todas as prefeituras do Brasil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/teste-gratis">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Teste Grátis por 15 Dias
              </Button>
            </Link>
            <Link to="/demonstracao">
              <Button size="lg" variant="outline" className="border-blue-600 px-8 py-3 text-lg text-gray-50 font-bold bg-emerald-700 hover:bg-emerald-600">
                Ver Demonstração
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-sm">
              <FileText className="text-blue-600" size={20} />
              <span className="text-gray-700 font-medium text-base">Emissão Ilimitada*</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-sm">
              <Clock className="text-green-600" size={20} />
              <span className="text-gray-700 font-medium">Fácil de configurar</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4 shadow-sm">
              <Shield className="text-blue-600" size={20} />
              <span className="text-gray-700 font-medium">100% Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;