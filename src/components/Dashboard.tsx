
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, TrendingUp, Clock, CheckCircle, Plus, Download, Filter } from 'lucide-react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const stats = [
    {
      title: 'NFS-e Emitidas',
      value: '247',
      change: '+12%',
      icon: <FileText className="text-blue-600" size={24} />,
      color: 'blue'
    },
    {
      title: 'Valor Total',
      value: 'R$ 125.430',
      change: '+8%',
      icon: <TrendingUp className="text-green-600" size={24} />,
      color: 'green'
    },
    {
      title: 'Pendentes',
      value: '3',
      change: '-2',
      icon: <Clock className="text-yellow-600" size={24} />,
      color: 'yellow'
    },
    {
      title: 'Processadas',
      value: '244',
      change: '+14',
      icon: <CheckCircle className="text-green-600" size={24} />,
      color: 'green'
    }
  ];

  const recentNotes = [
    { id: '001', client: 'Empresa ABC Ltda', service: 'Consultoria', value: 'R$ 2.500,00', status: 'Autorizada', date: '25/06/2024' },
    { id: '002', client: 'Tech Solutions', service: 'Desenvolvimento', value: 'R$ 5.000,00', status: 'Autorizada', date: '25/06/2024' },
    { id: '003', client: 'Marketing Pro', service: 'Consultoria', value: 'R$ 1.800,00', status: 'Pendente', date: '24/06/2024' },
    { id: '004', client: 'Inovação Digital', service: 'Treinamento', value: 'R$ 3.200,00', status: 'Autorizada', date: '24/06/2024' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Bem-vindo de volta! Aqui está o resumo das suas NFS-e.</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="mr-2" size={18} />
            Nova NFS-e
          </Button>
        </div>
      </div>

      <div className="p-6">
        {/* Period Selector */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-sm text-gray-600">Período:</span>
          {['7d', '30d', '90d', '1y'].map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod(period)}
              className={selectedPeriod === period ? 'bg-blue-600 text-white' : ''}
            >
              {period === '7d' ? '7 dias' : period === '30d' ? '30 dias' : period === '90d' ? '90 dias' : '1 ano'}
            </Button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className={`text-sm mt-1 ${
                      stat.change.startsWith('+') ? 'text-green-600' : 
                      stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {stat.change} vs período anterior
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Últimas NFS-e Emitidas</CardTitle>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2" size={16} />
                    Filtrar
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2" size={16} />
                    Exportar
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Cliente</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Serviço</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Valor</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentNotes.map((note) => (
                      <tr key={note.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2 text-sm text-gray-900">{note.client}</td>
                        <td className="py-3 px-2 text-sm text-gray-600">{note.service}</td>
                        <td className="py-3 px-2 text-sm font-medium text-gray-900">{note.value}</td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            note.status === 'Autorizada' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {note.status}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-sm text-gray-600">{note.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="mr-2" size={18} />
                Emitir Nova NFS-e
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2" size={18} />
                Consultar NFS-e
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => window.location.href = '/relatorios/faturamento'}
              >
                <Download className="mr-2" size={18} />
                Relatório de Faturamento
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="mr-2" size={18} />
                NFS-e Pendentes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
