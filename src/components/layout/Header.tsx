import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
      <div className="flex-1" />
      
      <div className="flex-1 flex justify-center">
        <h1 className="text-brand-large font-bold tracking-tight">
          ShopAble
        </h1>
      </div>
      
      <div className="flex-1 flex justify-end">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/api/placeholder/32/32" alt="Profile" />
            <AvatarFallback className="bg-accent text-accent-foreground">
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </header>
  );
}