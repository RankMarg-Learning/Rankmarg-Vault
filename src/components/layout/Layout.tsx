import { useState, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { SearchDialog } from "@/components/search/SearchDialog";
import { useCapacitor } from "@/hooks/useCapacitor";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isCapacitor = useCapacitor();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 md:ml-[280px] lg:ml-72 flex flex-col">
          <div className="flex-1 container px-3 sm:px-4 py-4 sm:py-6 pb-20 sm:pb-24 md:pb-6 max-w-7xl mx-auto">
            {children}
          </div>
          {!isCapacitor && <Footer />}
        </main>
      </div>

      <MobileNav />
      <SearchDialog />
    </div>
  );
}
