import { Calendar, Bell, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const alerts = [
  {
    id: 1,
    type: "drop",
    icon: Calendar,
    title: "Sneaker Week",
    description: "3 days left",
    color: "bg-accent text-accent-foreground",
    bgGradient: "from-accent/10 to-accent/5"
  },
  {
    id: 2,
    type: "restock",
    icon: Bell,
    title: "Mini Crossbody (Khaki)",
    description: "Back in stock - Watchlist",
    color: "bg-success text-success-foreground",
    bgGradient: "from-success/10 to-success/5"
  }
];

export function QuickAlerts() {
  return (
    <section className="px-6 py-4 space-y-4">
      <div className="space-y-3">
        {alerts.map((alert) => {
          const IconComponent = alert.icon;
          return (
            <div
              key={alert.id}
              className={`card-elegant bg-gradient-to-r ${alert.bgGradient} border-l-4 border-l-accent cursor-pointer hover:shadow-[var(--shadow-medium)] transition-smooth`}
            >
              <div className="flex items-center gap-4 p-4">
                <div className={`p-2 rounded-full ${alert.color}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <h4 className="font-medium text-foreground">{alert.title}</h4>
                  <p className="text-sm text-muted-foreground">{alert.description}</p>
                </div>
                <TrendingUp className="w-4 h-4 text-accent" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}