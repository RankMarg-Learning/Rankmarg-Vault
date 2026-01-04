import { Library, Search, Bookmark, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useApp } from '@/contexts/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';

export function MobileNav() {
  const { setIsSearchOpen } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Library, label: 'Vault', path: '/' },
    { icon: Search, label: 'Search', action: () => setIsSearchOpen(true) },
    { icon: Bookmark, label: 'Saved', path: '/saved' },
    { icon: Sparkles, label: 'Daily', path: '/daily' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = item.path && location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.label}
              onClick={() => {
                if (item.action) {
                  item.action();
                } else if (item.path) {
                  navigate(item.path);
                }
              }}
              className={cn(
                'flex flex-col items-center gap-1 p-2 min-w-[64px] transition-colors',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
