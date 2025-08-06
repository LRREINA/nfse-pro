import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CalendarIcon, Search, Plus } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface DPSData {
  id: string;
  numero: string;
  data: string;
  prestador: string;
  cnpjCpf: string;
  valor: number;
  status: string;
}

const GestaoDPS = () => {
  const [showForm, setShowForm] = useState(false);
  const [dataInicio, setDataInicio] = useState<Date>();
  const [dataFim, setDataFim] = useState<Date>();
  const [numeroDPS, setNumeroDPS] = useState('');
  const [cnpjCpf, setCnpjCpf] = useState('');

  // Dados de exemplo
  const dpsData: DPSData[] = [
    {
      id: '1',
      numero: 'DPS-001',
      data: '15/01/2024',
      prestador: 'João Silva Serviços',
      cnpjCpf: '123.456.789-01',
      valor: 1500.00,
      status: 'Ativo'
    },
    {
      id: '2',
      numero: 'DPS-002',
      data: '20/01/2024',
      prestador: 'TechSolutions LTDA',
      cnpjCpf: '12.345.678/0001-90',
      valor: 3500.00,
      status: 'Ativo'
    }
  ];

  const filteredData = dpsData.filter(item => {
    const matchNumero = !numeroDPS || item.numero.toLowerCase().includes(numeroDPS.toLowerCase());
    const matchCnpj = !cnpjCpf || item.cnpjCpf.includes(cnpjCpf);
    return matchNumero && matchCnpj;
  });

  if (showForm) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Criar Nova DPS</h2>
          <Button variant="outline" onClick={() => setShowForm(false)}>
            Voltar
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Formulário de DPS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Dados do Prestador */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Dados do Prestador</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome-razao">Nome ou Razão Social</Label>
                  <Input id="nome-razao" placeholder="Digite o nome ou razão social" />
                </div>
                <div>
                  <Label htmlFor="cnpj-cpf-prestador">CNPJ ou CPF</Label>
                  <Input id="cnpj-cpf-prestador" placeholder="000.000.000-00" />
                </div>
                <div>
                  <Label htmlFor="inscricao-municipal">Inscrição Municipal</Label>
                  <Input id="inscricao-municipal" placeholder="Digite a inscrição municipal" />
                </div>
                <div>
                  <Label htmlFor="endereco-prestador">Endereço Completo</Label>
                  <Input id="endereco-prestador" placeholder="Rua, número, bairro, cidade" />
                </div>
                <div>
                  <Label htmlFor="email-prestador">E-mail</Label>
                  <Input id="email-prestador" type="email" placeholder="email@exemplo.com" />
                </div>
                <div>
                  <Label htmlFor="telefone-prestador">Telefone</Label>
                  <Input id="telefone-prestador" placeholder="(00) 00000-0000" />
                </div>
              </div>
            </div>

            {/* Dados do Serviço */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Dados do Serviço</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="data-competencia">Data de Competência</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !dataInicio && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dataInicio ? format(dataInicio, "dd/MM/yyyy") : "Selecione a data"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={dataInicio}
                        onSelect={setDataInicio}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label htmlFor="numero-serie">Número e Série da DPS</Label>
                  <Input id="numero-serie" placeholder="DPS-000" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="descricao-servico">Descrição do Serviço</Label>
                  <Input id="descricao-servico" placeholder="Descreva o serviço prestado" />
                </div>
                <div>
                  <Label htmlFor="valor-servico">Valor do Serviço</Label>
                  <Input id="valor-servico" type="number" step="0.01" placeholder="0,00" />
                </div>
              </div>
            </div>

            {/* Dados do Tomador */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Dados do Tomador</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome-tomador">Nome ou Razão Social</Label>
                  <Input id="nome-tomador" placeholder="Digite o nome ou razão social" />
                </div>
                <div>
                  <Label htmlFor="cnpj-cpf-tomador">CNPJ ou CPF</Label>
                  <Input id="cnpj-cpf-tomador" placeholder="000.000.000-00" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="endereco-tomador">Endereço Completo</Label>
                  <Input id="endereco-tomador" placeholder="Rua, número, bairro, cidade" />
                </div>
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Informações Adicionais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="simples-nacional">Opção pelo Simples Nacional</Label>
                  <select id="simples-nacional" className="w-full p-2 border rounded-md">
                    <option value="">Selecione</option>
                    <option value="sim">Sim</option>
                    <option value="nao">Não</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="dados-tributarios">Dados Tributários</Label>
                  <Input id="dados-tributarios" placeholder="Informações tributárias adicionais" />
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                Salvar DPS
              </Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gestão de DPS</h2>
        <Button onClick={() => setShowForm(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Criar DPS
        </Button>
      </div>

      {/* Filtros */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Filtros de Pesquisa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="data-inicio">Data Início</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dataInicio && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dataInicio ? format(dataInicio, "dd/MM/yyyy") : "Início"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dataInicio}
                    onSelect={setDataInicio}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <Label htmlFor="data-fim">Data Fim</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dataFim && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dataFim ? format(dataFim, "dd/MM/yyyy") : "Fim"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dataFim}
                    onSelect={setDataFim}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div>
              <Label htmlFor="numero-dps">Número da DPS</Label>
              <Input 
                id="numero-dps"
                placeholder="DPS-000"
                value={numeroDPS}
                onChange={(e) => setNumeroDPS(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="cnpj-cpf">CNPJ/CPF</Label>
              <Input 
                id="cnpj-cpf"
                placeholder="000.000.000-00"
                value={cnpjCpf}
                onChange={(e) => setCnpjCpf(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabela de Resultados */}
      <Card>
        <CardHeader>
          <CardTitle>DPS Emitidas</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Prestador</TableHead>
                <TableHead>CNPJ/CPF</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.numero}</TableCell>
                  <TableCell>{item.data}</TableCell>
                  <TableCell>{item.prestador}</TableCell>
                  <TableCell>{item.cnpjCpf}</TableCell>
                  <TableCell>R$ {item.valor.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Ver Detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default GestaoDPS;