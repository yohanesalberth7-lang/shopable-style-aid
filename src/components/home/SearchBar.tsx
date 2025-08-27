import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <section className="px-6 py-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search items, looks, and styles..."
          className="pl-12 pr-4 py-3 rounded-2xl border-0 bg-secondary shadow-[var(--shadow-soft)] text-foreground placeholder:text-muted-foreground focus:ring-accent focus:ring-2 transition-smooth"
        />
      </div>
    </section>
  );
}