
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, Smartphone, DollarSign, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('credit-card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="mr-2" size={20} />
            Voltar
          </Link>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Banqomun</span>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Dados de pagamento</CardTitle>
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Cliente: <strong>TESTE PJ</strong></span>
                    <span>E-mail: <strong>daniel.souza@acaruly.com.br</strong></span>
                  </div>
                  <div>CPF/CNPJ: <strong>93.879.219/0001-93</strong></div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-4 block">Selecione uma forma de pagamento</Label>
                  <div className="grid grid-cols-3 gap-4">
                    <button
                      onClick={() => setSelectedPayment('credit-card')}
                      className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                        selectedPayment === 'credit-card' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <CreditCard className="text-gray-700" size={24} />
                      <span className="text-sm font-medium">Cartão de crédito</span>
                    </button>
                    
                    <button
                      onClick={() => setSelectedPayment('pix')}
                      className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                        selectedPayment === 'pix' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Smartphone className="text-gray-700" size={24} />
                      <span className="text-sm font-medium">Pix</span>
                    </button>
                    
                    <button
                      onClick={() => setSelectedPayment('boleto')}
                      className={`p-4 border-2 rounded-lg flex flex-col items-center space-y-2 transition-colors ${
                        selectedPayment === 'boleto' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <DollarSign className="text-gray-700" size={24} />
                      <span className="text-sm font-medium">Boleto</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center justify-center w-6 h-6 bg-amber-500 text-white rounded-full text-xs font-bold">1</div>
                  <span className="text-sm text-gray-600">Informações</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <div className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-xs font-bold">2</div>
                  <span className="text-sm font-medium">Pagamento</span>
                </div>

                {selectedPayment === 'credit-card' && (
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">Cartões</Label>
                      <div className="flex space-x-2 mt-2">
                        <img src="/visa.png" alt="Visa" className="h-6" onError={(e) => {e.currentTarget.style.display = 'none'}} />
                        <img src="/mastercard.png" alt="Mastercard" className="h-6" onError={(e) => {e.currentTarget.style.display = 'none'}} />
                        <img src="/amex.png" alt="American Express" className="h-6" onError={(e) => {e.currentTarget.style.display = 'none'}} />
                        <img src="/elo.png" alt="Elo" className="h-6" onError={(e) => {e.currentTarget.style.display = 'none'}} />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardNumber" className="text-sm font-medium">Número do cartão</Label>
                      <Input
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', formatCardNumber(e.target.value))}
                        maxLength={19}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate" className="text-sm font-medium">MM/AA</Label>
                        <Input
                          id="expiryDate"
                          placeholder="MM/AA"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', formatExpiryDate(e.target.value))}
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-sm font-medium">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="000"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value.replace(/\D/g, ''))}
                          maxLength={4}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardHolder" className="text-sm font-medium">Titular do cartão</Label>
                      <Input
                        id="cardHolder"
                        placeholder="Nome como está no cartão"
                        value={formData.cardHolder}
                        onChange={(e) => handleInputChange('cardHolder', e.target.value)}
                      />
                    </div>

                    <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3">
                      Pagar
                    </Button>

                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <span>ℹ️</span>
                      <span>Entenda nossas taxas</span>
                    </div>
                  </div>
                )}

                {selectedPayment !== 'credit-card' && (
                  <div className="text-center py-8">
                    <p className="text-gray-600">
                      {selectedPayment === 'pix' ? 'Configure o pagamento via PIX' : 'Configure o pagamento via Boleto'}
                    </p>
                  </div>
                )}

                <Button variant="outline" className="w-full">
                  Voltar
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Invoice Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Dados de fatura</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Beneficiário:</span>
                    <span>Prefeitura Municipal de Apresentação</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Endereço:</span>
                    <span>Rua Bonnard</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">CNPJ:</span>
                    <span>48.219.562/0001-67</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Fatura:</span>
                    <span>117919</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Vencimento:</span>
                    <span>15/07/2025</span>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>(=) Valor do Documento:</span>
                    <span>R$ 3.465.55</span>
                  </div>
                  <div className="flex justify-between">
                    <span>(-) Desconto:</span>
                    <span>R$ 0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>(+) Outros Acréscimos:</span>
                    <span>R$ 0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>(+) Correção:</span>
                    <span>R$ 0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>(+) Juros:</span>
                    <span>R$ 0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>(+) Mora/Multa:</span>
                    <span>R$ 0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>(+) Encargos:</span>
                    <span>R$ 278.33</span>
                  </div>
                  <div className="flex justify-between">
                    <span>(=) Parcelas:</span>
                    <span>1 x R$ 3.733.88</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total a pagar:</span>
                    <span>R$ 3.733,88</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
