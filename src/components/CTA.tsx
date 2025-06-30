
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-20"></div>
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pronto para simplificar suas NFS-e?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se a milhares de empresas que já automatizaram sua emissão de notas fiscais
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/teste-gratis">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                Teste Grátis por 15 Dias
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              Agendar Demonstração
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-center space-x-3">
              <Check className="text-green-300 flex-shrink-0" size={20} />
              <span>Configuração em 5 minutos</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="text-green-300 flex-shrink-0" size={20} />
              <span>Suporte especializado</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="text-green-300 flex-shrink-0" size={20} />
              <span>Sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
