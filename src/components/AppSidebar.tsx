import { 
  BarChart3, 
  Home, 
  PlusCircle, 
  Settings, 
  ChevronRight 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useState } from "react";

export function AppSidebar() {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['Relatórios']);
  
  console.log("AppSidebar - Current location:", location.pathname);
  console.log("AppSidebar - Expanded menus:", expandedMenus);

  const toggleMenu = (title: string) => {
    setExpandedMenus(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const menuItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Nova NFS-e", 
      url: "/nova-nfse",
      icon: PlusCircle,
    },
    {
      title: "Relatórios",
      icon: BarChart3,
      items: [
        {
          title: "Faturamento por Serv",
          url: "/dashboard/relatorios/faturamento",
        },
        {
          title: "Clientes Rentáveis", 
          url: "/dashboard/relatorios/clientes-rentaveis",
        },
        {
          title: "Projeções",
          url: "/dashboard/relatorios/projecoes", 
        },
        {
          title: "Obrigações Fiscais",
          url: "/dashboard/relatorios/obrigacoes-fiscais",
        },
      ],
    },
    {
      title: "Configurações",
      url: "/configuracoes", 
      icon: Settings,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>ORION - NFS-e</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                if (item.items) {
                  const isExpanded = expandedMenus.includes(item.title);
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        onClick={() => toggleMenu(item.title)}
                        tooltip={item.title}
                        className="w-full"
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight 
                          className={`ml-auto transition-transform duration-200 ${
                            isExpanded ? 'rotate-90' : ''
                          }`} 
                        />
                      </SidebarMenuButton>
                      {isExpanded && (
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link 
                                  to={subItem.url}
                                  className={
                                    location.pathname === subItem.url
                                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                                      : ""
                                  }
                                >
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  );
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={item.title}
                      className={
                        location.pathname === item.url
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : ""
                      }
                    >
                      <Link to={item.url}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}