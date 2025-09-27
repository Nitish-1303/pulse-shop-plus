import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Search, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">LUXE</h1>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
            Home
          </a>
          <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
            Products
          </a>
          <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
            Categories
          </a>
          <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </a>
          <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-4 w-4" />
            <Badge 
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0"
              variant="default"
            >
              3
            </Badge>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;