import { Home, Sparkles, Grid3X3, ShoppingBag, Trophy } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigationItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/stylist", label: "Stylist", icon: Sparkles },
  { to: "/looks", label: "Looks", icon: Grid3X3 },
  { to: "/bag", label: "Bag", icon: ShoppingBag },
  { to: "/loyalty", label: "Loyalty", icon: Trophy },
];

export function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border">
      <div className="flex items-center justify-around h-20 px-2">
        {navigationItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center flex-1 py-2 px-1 transition-quick rounded-lg",
                isActive
                  ? "text-accent bg-accent-light"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )
            }
          >
            <Icon className="w-5 h-5 mb-1" strokeWidth={1.5} />
            <span className="text-xs font-medium tracking-wide">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}