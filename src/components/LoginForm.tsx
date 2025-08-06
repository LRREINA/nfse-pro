import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
interface LoginFormProps {
  onSubmit: (email: string, password?: string) => void;
}
const LoginForm = ({
  onSubmit
}: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      return;
    }
    setIsLoading(true);
    try {
      onSubmit(email, password || undefined);
    } finally {
      setIsLoading(false);
    }
  };
  const handleGovBRLogin = () => {
    // Aqui seria implementada a lógica do Gov.br
    console.log('Login via Gov.br');
    window.open('https://simples-fiscal-brasil.lovable.app/', '_blank');
  };
  return <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">NF</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">NFSe</span>
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">Fazer Login</CardTitle>
        <CardDescription className="text-gray-600">
          Acesse sua conta para gerenciar suas NFS-e
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={e => setEmail(e.target.value)} required className="w-full" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="Digite sua senha (opcional)" value={password} onChange={e => setPassword(e.target.value)} className="w-full" />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading || !email.trim()}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">ou</span>
            </div>
          </div>

          <Button type="button" variant="outline" className="w-full mt-4 border-green-500 text-green-700 hover:bg-green-50" onClick={handleGovBRLogin}>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-600 font-semibold">🇧🇷</span>
              <span>Login com Gov.br</span>
            </div>
          </Button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Não tem uma conta?{' '}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Teste Grátis
            </a>
          </p>
        </div>
      </CardContent>
    </Card>;
};
export default LoginForm;