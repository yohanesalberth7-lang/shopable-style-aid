import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const styleCapsules = [
  {
    id: 1,
    title: "Interview Outfit",
    budget: "< RM500",
    image: "/api/placeholder/200/120",
    gradient: "from-accent/20 to-accent/5"
  },
  {
    id: 2,
    title: "City-Weekend Capsule",
    budget: "< RM300",
    image: "/api/placeholder/200/120",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    id: 3,
    title: "Date Night Look",
    budget: "< RM400",
    image: "/api/placeholder/200/120",
    gradient: "from-success/20 to-success/5"
  }
];

export function WelcomeSection() {
  return (
    <section className="px-6 py-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">
          Hi Anna 👋
        </h2>
        <p className="text-elegant">Ready for today's style?</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-brand-medium">Style Capsules</h3>
          <Button variant="ghost" size="sm" className="text-accent hover:text-accent">
            View All
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {styleCapsules.map((capsule) => (
            <div
              key={capsule.id}
              className="flex-shrink-0 w-64 card-elegant overflow-hidden cursor-pointer hover:shadow-[var(--shadow-medium)] transition-smooth"
            >
              <div className={`h-24 bg-gradient-to-br ${capsule.gradient} relative overflow-hidden`}>
                <img
                  src={capsule.image}
                  alt={capsule.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="p-4 space-y-2">
                <h4 className="font-semibold text-foreground">{capsule.title}</h4>
                <p className="text-sm text-muted-foreground">{capsule.budget}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}