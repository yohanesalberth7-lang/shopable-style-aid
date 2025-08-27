import { Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const complementaryProducts = [
  {
    id: "1",
    name: "Silver Chain Necklace",
    price: 45,
    image: "/api/placeholder/160/200"
  },
  {
    id: "2",
    name: "Leather Ankle Boots",
    price: 179,
    image: "/api/placeholder/160/200"
  },
  {
    id: "3",
    name: "Structured Handbag",
    price: 199,
    image: "/api/placeholder/160/200"
  },
  {
    id: "4",
    name: "Gold Stud Earrings",
    price: 35,
    image: "/api/placeholder/160/200"
  }
];

export function FinishYourLook() {
  return (
    <section className="px-6 py-6 space-y-4">
      <div className="space-y-2">
        <h3 className="text-brand-medium">Finish Your Look</h3>
        <p className="text-elegant text-sm">Perfect accessories to complete your style</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {complementaryProducts.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-36 card-elegant overflow-hidden group"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
              
              {/* Quick Actions */}
              <div className="absolute top-2 right-2 space-y-1 opacity-0 group-hover:opacity-100 transition-smooth">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <Heart className="w-3 h-3 text-muted-foreground" />
                </Button>
              </div>
            </div>

            <div className="p-3 space-y-2">
              <h4 className="text-sm font-medium text-foreground line-clamp-2">
                {product.name}
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-accent">
                  RM{product.price}
                </span>
                <Button 
                  size="sm" 
                  className="h-6 w-6 p-0 rounded-full bg-primary text-primary-foreground hover:bg-primary-light"
                >
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}