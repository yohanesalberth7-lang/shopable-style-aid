import { Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  colors?: string[];
  sizes?: string[];
  tags?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export function ProductCard({ 
  id, 
  name, 
  price, 
  image, 
  colors = [], 
  sizes = [], 
  tags = [], 
  isNew, 
  isBestSeller 
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="card-product group overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {isNew && (
            <Badge variant="secondary" className="bg-accent text-accent-foreground text-xs">
              New
            </Badge>
          )}
          {isBestSeller && (
            <Badge variant="secondary" className="bg-success text-success-foreground text-xs">
              Best Seller
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart 
            className={`w-4 h-4 transition-quick ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
            }`} 
          />
        </Button>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="font-medium text-foreground line-clamp-2">{name}</h3>
          <p className="text-lg font-semibold text-accent">RM{price}</p>
        </div>

        {/* Color Swatches */}
        {colors.length > 0 && (
          <div className="flex gap-2">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`w-6 h-6 rounded-full border-2 transition-quick ${
                  selectedColor === color ? 'border-accent' : 'border-border'
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        )}

        {/* Size Info & Add Button */}
        <div className="flex items-center justify-between">
          {sizes.length > 0 && (
            <div className="flex gap-1">
              <span className="text-xs text-muted-foreground">Sizes:</span>
              <span className="text-xs text-foreground">{sizes.join(', ')}</span>
            </div>
          )}
          
          <Button 
            size="sm" 
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary-light transition-smooth"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}