import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNavigation } from "./BottomNavigation";

interface MobileLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
}

export function MobileLayout({ children, showHeader = true }: MobileLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-surface">
      {showHeader && <Header />}
      
      <main className={`pb-20 ${showHeader ? '' : 'pt-safe-top'}`}>
        {children}
      </main>
      
      <BottomNavigation />
    </div>
  );
}