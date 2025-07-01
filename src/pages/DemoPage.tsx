
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Header with back button */}
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <ArrowLeft size={20} />
              Voltar ao início
            </Button>
          </Link>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Demonstração do{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                NFSe Pro
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja como nossa plataforma pode simplificar a gestão de suas Notas Fiscais de Serviço
            </p>
          </div>

          {/* Video container */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/m_Clcl6ncZg"
                title="Demonstração NFSe Pro"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Call to action after video */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pronto para começar?
              </h2>
              <p className="text-gray-600 mb-6">
                Teste nossa plataforma gratuitamente por 15 dias e veja como podemos ajudar sua empresa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/teste-gratis">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Teste Grátis por 15 Dias
                  </Button>
                </Link>
                <Link to="/#planos">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                    Ver Planos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
