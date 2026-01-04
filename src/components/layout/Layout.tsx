import { useState, ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { SearchDialog } from '@/components/search/SearchDialog';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 md:ml-72 flex flex-col">
          <div className="flex-1 container px-4 py-6 pb-24 md:pb-6">
            {children}
          </div>
          <Footer />
        </main>
      </div>
      
      <MobileNav />
      <SearchDialog />
    </div>
  );
}
