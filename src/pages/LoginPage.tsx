
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  FileText, 
  Download, 
  Search, 
  Eye, 
  TrendingUp,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const LoginPage = () => {
  const [filtros, setFiltros] = useState({
    dataInicio: '',
    dataFim: '',
    cnpj: '',
    numeroNfse: ''
  });

  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [totalFaturamento, setTotalFaturamento] = useState(0);

  // Dados de exemplo
  const dadosFaturamento = [
    {
      id: 1,
      nomeTomador: 'Empresa ABC Ltda',
      numeroNota: '000001',
      valor: 2500.00,
      numeroFatura: 'FAT-2024-001',
      condicoesPagamento: '30 dias',
      dataEmissao: '01/07/2024',
      cnpjTomador: '12.345.678/0001-90'
    },
    {
      id: 2,
      nomeTomador: 'Tech Solutions EIRELI',
      numeroNota: '000002',
      valor: 5000.00,
      numeroFatura: 'FAT-2024-002',
      condicoesPagamento: '15 dias',
      dataEmissao: '03/07/2024',
      cnpjTomador: '98.765.432/0001-10'
    },
    {
      id: 3,
      nomeTomador: 'Marketing Pro S/A',
      numeroNota: '000003',
      valor: 1800.00,
      numeroFatura: 'FAT-2024-003',
      condicoesPagamento: '45 dias',
      dataEmissao: '05/07/2024',
      cnpjTomador: '11.222.333/0001-44'
    },
    {
      id: 4,
      nomeTomador: 'Inovação Digital Ltda',
      numeroNota: '000004',
      valor: 3200.00,
      numeroFatura: 'FAT-2024-004',
      condicoesPagamento: '30 dias',
      dataEmissao: '08/07/2024',
      cnpjTomador: '55.666.777/0001-88'
    },
    {
      id: 5,
      nomeTomador: 'Consultoria Moderna ME',
      numeroNota: '000005',
      valor: 4200.00,
      numeroFatura: 'FAT-2024-005',
      condicoesPagamento: '60 dias',
      dataEmissao: '10/07/2024',
      cnpjTomador: '22.333.444/0001-55'
    }
  ];

  const handleFiltroChange = (campo: string, valor: string) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }));
  };

  const handlePesquisar = () => {
    setCarregando(true);
    
    // Simulação de pesquisa
    setTimeout(() => {
      let resultados = dadosFaturamento;
      
      // Aplicar filtros
      if (filtros.cnpj) {
        resultados = resultados.filter(item => 
          item.cnpjTomador.includes(filtros.cnpj)
        );
      }
      
      if (filtros.numeroNfse) {
        resultados = resultados.filter(item => 
          item.numeroNota.includes(filtros.numeroNfse)
        );
      }
      
      // Calcular total
      const total = resultados.reduce((acc, item) => acc + item.valor, 0);
      
      setDados(resultados);
      setTotalFaturamento(total);
      setCarregando(false);
    }, 1000);
  };

  const handleExportar = () => {
    // Simulação de exportação
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Nome do Tomador,Número da Nota,Valor,Número da Fatura,Condições de Pagamento,Data de Emissão,CNPJ\n"
      + dados.map(item => 
          `${item.nomeTomador},${item.numeroNota},${item.valor.toFixed(2)},${item.numeroFatura},${item.condicoesPagamento},${item.dataEmissao},${item.cnpjTomador}`
        ).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "relatorio_faturamento.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1 flex items-center justify-between">
              <h1 className="text-xl font-semibold">Relatório de Faturamento</h1>
              <Button 
                onClick={handleExportar}
                disabled={dados.length === 0}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Download className="mr-2" size={18} />
                Exportar Relatório
              </Button>
            </div>
          </header>
          
          <div className="p-6 bg-gray-50 min-h-[calc(100vh-4rem)]">
            {/* Total de Faturamento do Mês */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Faturamento Total do Mês</p>
                    <p className="text-3xl font-bold text-green-600 mt-1">
                      {formatarMoeda(totalFaturamento)}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Baseado nos dados filtrados
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <TrendingUp className="text-green-600" size={32} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filtros */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="mr-2" size={20} />
                  Filtros de Pesquisa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <Label htmlFor="dataInicio">Data Início</Label>
                    <Input
                      id="dataInicio"
                      type="date"
                      value={filtros.dataInicio}
                      onChange={(e) => handleFiltroChange('dataInicio', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="dataFim">Data Fim</Label>
                    <Input
                      id="dataFim"
                      type="date"
                      value={filtros.dataFim}
                      onChange={(e) => handleFiltroChange('dataFim', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input
                      id="cnpj"
                      placeholder="00.000.000/0000-00"
                      value={filtros.cnpj}
                      onChange={(e) => handleFiltroChange('cnpj', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="numeroNfse">Número da NFS-e</Label>
                    <Input
                      id="numeroNfse"
                      placeholder="000000"
                      value={filtros.numeroNfse}
                      onChange={(e) => handleFiltroChange('numeroNfse', e.target.value)}
                    />
                  </div>
                </div>
                <Button 
                  onClick={handlePesquisar}
                  disabled={carregando}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Search className="mr-2" size={18} />
                  {carregando ? 'Pesquisando...' : 'Pesquisar'}
                </Button>
              </CardContent>
            </Card>

            {/* Resultados */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2" size={20} />
                    Resultados ({dados.length} registros)
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {dados.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Nome do Tomador</th>
                          <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Nº Nota</th>
                          <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Valor</th>
                          <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Nº Fatura</th>
                          <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Condições Pagamento</th>
                          <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Data Emissão</th>
                          <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dados.map((item: any) => (
                          <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-2 text-sm text-gray-900">{item.nomeTomador}</td>
                            <td className="py-3 px-2 text-sm text-gray-600">{item.numeroNota}</td>
                            <td className="py-3 px-2 text-sm font-medium text-green-600">
                              {formatarMoeda(item.valor)}
                            </td>
                            <td className="py-3 px-2 text-sm text-gray-600">{item.numeroFatura}</td>
                            <td className="py-3 px-2 text-sm text-gray-600">{item.condicoesPagamento}</td>
                            <td className="py-3 px-2 text-sm text-gray-600">{item.dataEmissao}</td>
                            <td className="py-3 px-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" size="sm">
                                    <Eye className="mr-1" size={14} />
                                    Detalhes
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Detalhes da NFS-e</DialogTitle>
                                    <DialogDescription>
                                      Informações completas da nota fiscal
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid grid-cols-2 gap-4 py-4">
                                    <div className="space-y-3">
                                      <div>
                                        <Label className="text-sm font-medium text-gray-600">Nome do Tomador</Label>
                                        <p className="text-sm text-gray-900">{item.nomeTomador}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium text-gray-600">CNPJ</Label>
                                        <p className="text-sm text-gray-900">{item.cnpjTomador}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium text-gray-600">Número da Nota</Label>
                                        <p className="text-sm text-gray-900">{item.numeroNota}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium text-gray-600">Data de Emissão</Label>
                                        <p className="text-sm text-gray-900">{item.dataEmissao}</p>
                                      </div>
                                    </div>
                                    <div className="space-y-3">
                                      <div>
                                        <Label className="text-sm font-medium text-gray-600">Valor</Label>
                                        <p className="text-lg font-bold text-green-600">{formatarMoeda(item.valor)}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium text-gray-600">Número da Fatura</Label>
                                        <p className="text-sm text-gray-900">{item.numeroFatura}</p>
                                      </div>
                                      <div>
                                        <Label className="text-sm font-medium text-gray-600">Condições de Pagamento</Label>
                                        <p className="text-sm text-gray-900">{item.condicoesPagamento}</p>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-500 text-lg">Nenhum resultado encontrado</p>
                    <p className="text-gray-400 text-sm">Utilize os filtros acima para pesquisar dados de faturamento</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default LoginPage;
