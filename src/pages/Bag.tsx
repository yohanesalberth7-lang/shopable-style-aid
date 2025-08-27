import { MobileLayout } from "@/components/layout/MobileLayout";
import { ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const cartItems = [
  {
    id: 1,
    name: "Oversized Blazer",
    color: "Black",
    size: "M",
    price: 189,
    quantity: 1,
    image: "/api/placeholder/100/120"
  },
  {
    id: 2,
    name: "Ribbed Knit Top",
    color: "White",
    size: "S",
    price: 79,
    quantity: 2,
    image: "/api/placeholder/100/120"
  }
];

const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
const shipping = 15;
const total = subtotal + shipping;

export default function Bag() {
  return (
    <MobileLayout>
      <div className="px-6 py-8 space-y-8">
        <div className="flex items-center gap-3">
          <ShoppingBag className="w-6 h-6 text-accent" />
          <h1 className="text-2xl font-semibold text-foreground">Your Bag</h1>
          <span className="text-sm text-muted-foreground">({cartItems.length} items)</span>
        </div>

        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="card-elegant p-4">
              <div className="flex gap-4">
                <div className="w-20 h-24 bg-secondary rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="space-y-1">
                    <h3 className="font-medium text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.color} • Size {item.size}
                    </p>
                    <p className="text-lg font-semibold text-accent">RM{item.price}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="icon" className="w-8 h-8">
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="font-medium">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="w-8 h-8">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <Button variant="ghost" size="icon" className="text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card-elegant p-6 space-y-4">
          <h3 className="font-semibold text-foreground">Order Summary</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">RM{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">RM{shipping}</span>
            </div>
            <div className="border-t border-border pt-2">
              <div className="flex justify-between font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-accent">RM{total}</span>
              </div>
            </div>
          </div>
          
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-light">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}