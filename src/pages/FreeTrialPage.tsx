
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';

const FreeTrialPage = () => {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    nomeEmpresa: '',
    cnpj: '',
    regimeTributario: '',
    cep: '',
    endereco: '',
    cidade: '',
    uf: '',
    telefone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAdvance = () => {
    setStep(2);
  };

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-md mx-auto">
              <Card className="shadow-xl">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="mx-auto mb-6 text-green-600" size={64} />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Cadastro Realizado!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Obrigado, enviamos as informações de acesso para o seu email
                  </p>
                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Voltar ao Início
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-md mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {step === 1 ? 'Teste Grátis por 15 Dias' : 'Dados da Empresa'}
                </CardTitle>
                <p className="text-gray-600">
                  {step === 1 
                    ? 'Digite seu e-mail para começar' 
                    : 'Complete as informações da sua empresa'
                  }
                </p>
              </CardHeader>
              <CardContent className="p-6">
                {step === 1 ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <Button 
                      onClick={handleAdvance}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={!formData.email}
                    >
                      Avançar
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nomeEmpresa">Nome da Empresa *</Label>
                      <Input
                        id="nomeEmpresa"
                        placeholder="Nome da sua empresa"
                        value={formData.nomeEmpresa}
                        onChange={(e) => handleInputChange('nomeEmpresa', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="cnpj">CNPJ *</Label>
                      <Input
                        id="cnpj"
                        placeholder="00.000.000/0000-00"
                        value={formData.cnpj}
                        onChange={(e) => handleInputChange('cnpj', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="regimeTributario">Regime Tributário *</Label>
                      <Select onValueChange={(value) => handleInputChange('regimeTributario', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o regime" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mei">MEI</SelectItem>
                          <SelectItem value="simples">Simples</SelectItem>
                          <SelectItem value="lucro-real">Lucro Real</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="cep">CEP *</Label>
                      <Input
                        id="cep"
                        placeholder="00000-000"
                        value={formData.cep}
                        onChange={(e) => handleInputChange('cep', e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="endereco">Endereço *</Label>
                      <Input
                        id="endereco"
                        placeholder="Rua, número, complemento"
                        value={formData.endereco}
                        onChange={(e) => handleInputChange('endereco', e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cidade">Cidade *</Label>
                        <Input
                          id="cidade"
                          placeholder="Cidade"
                          value={formData.cidade}
                          onChange={(e) => handleInputChange('cidade', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="uf">UF *</Label>
                        <Input
                          id="uf"
                          placeholder="SP"
                          maxLength={2}
                          value={formData.uf}
                          onChange={(e) => handleInputChange('uf', e.target.value.toUpperCase())}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        placeholder="(11) 99999-9999"
                        value={formData.telefone}
                        onChange={(e) => handleInputChange('telefone', e.target.value)}
                        required
                      />
                    </div>

                    <Button 
                      onClick={handleSubmit}
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={!formData.nomeEmpresa || !formData.cnpj || !formData.regimeTributario || !formData.cep || !formData.endereco || !formData.cidade || !formData.uf || !formData.telefone}
                    >
                      Concluir Cadastro
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialPage;
