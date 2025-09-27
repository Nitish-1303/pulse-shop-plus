import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LUXE</h3>
            <p className="text-primary-foreground/80 mb-6">
              Your premium destination for the latest in technology and innovation. 
              Experience quality that exceeds expectations.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-accent">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Products</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Categories</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Track Order</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to receive updates on new arrivals and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <hr className="my-8 border-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 LUXE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;