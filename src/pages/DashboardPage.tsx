
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from '@/components/Dashboard';
import RelatórioFaturamento from '@/components/RelatórioFaturamento';
import GestaoDPS from '@/components/GestaoDPS';

const DashboardPage = () => {
  const location = useLocation();
  console.log("DashboardPage - Current location:", location.pathname);
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold">ORION - NFS-e</h1>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/relatorios/faturamento" element={<RelatórioFaturamento />} />
            <Route path="/gestao-dps/gerar" element={<GestaoDPS />} />
            <Route path="gestao-dps/gerar" element={<GestaoDPS />} />
            <Route path="gestao-dps" element={<GestaoDPS />} />
          </Routes>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;
