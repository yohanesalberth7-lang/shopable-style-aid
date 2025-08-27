import { MobileLayout } from "@/components/layout/MobileLayout";
import { Grid3X3, Bookmark, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const lookCategories = [
  { name: "Trending", icon: TrendingUp, count: 24 },
  { name: "Saved", icon: Bookmark, count: 12 },
  { name: "Capsules", icon: Grid3X3, count: 8 }
];

const featuredLooks = [
  {
    id: 1,
    title: "Minimal Office Look",
    items: 4,
    price: 489,
    image: "/api/placeholder/300/400",
    tags: ["Professional", "Minimalist"]
  },
  {
    id: 2,
    title: "Weekend Casual",
    items: 3,
    price: 279,
    image: "/api/placeholder/300/400",
    tags: ["Casual", "Comfortable"]
  }
];

export default function Looks() {
  return (
    <MobileLayout>
      <div className="px-6 py-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold text-foreground">Curated Looks</h1>
          
          <div className="flex gap-3">
            {lookCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.name}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-lg font-medium text-foreground">Featured Looks</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {featuredLooks.map((look) => (
              <div key={look.id} className="card-elegant overflow-hidden">
                <div className="aspect-[4/5] bg-secondary">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground">{look.title}</h3>
                    <p className="text-sm text-muted-foreground">{look.items} items</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {look.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-accent">
                      RM{look.price}
                    </span>
                    <Button size="sm" className="bg-primary text-primary-foreground">
                      Shop Look
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}