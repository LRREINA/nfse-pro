
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  const handleLogin = (email: string, password?: string) => {
    console.log('Login:', { email, password });
    // Redirecionar para o dashboard
    window.location.href = 'https://simples-fiscal-brasil.lovable.app/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 to-green-50/50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
