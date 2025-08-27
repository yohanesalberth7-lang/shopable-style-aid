import { ProductCard } from "./ProductCard";

const trendingProducts = [
  {
    id: "1",
    name: "Oversized Blazer",
    price: 189,
    image: "/api/placeholder/300/400",
    colors: ["#2D3748", "#E2E8F0", "#CBD5E0"],
    sizes: ["XS", "S", "M", "L"],
    isNew: true
  },
  {
    id: "2",
    name: "Ribbed Knit Top",
    price: 79,
    image: "/api/placeholder/300/400",
    colors: ["#F7FAFC", "#EDF2F7", "#1A202C"],
    sizes: ["S", "M", "L"],
    isBestSeller: true
  },
  {
    id: "3",
    name: "Wide Leg Trousers",
    price: 129,
    image: "/api/placeholder/300/400",
    colors: ["#1A202C", "#2D3748", "#CBD5E0"],
    sizes: ["26", "28", "30", "32"]
  },
  {
    id: "4",
    name: "Crossbody Mini Bag",
    price: 159,
    image: "/api/placeholder/300/400",
    colors: ["#8B4513", "#D2B48C", "#000000"],
    isNew: true
  }
];

export function TrendingPicks() {
  return (
    <section className="px-6 py-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-brand-medium">Trending Picks</h3>
        <button className="text-accent text-sm font-medium hover:text-accent/80 transition-quick">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {trendingProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}