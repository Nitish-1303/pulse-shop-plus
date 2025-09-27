import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  isNew, 
  isSale 
}: ProductCardProps) => {
  const discountPercent = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-accent text-accent-foreground">
              New
            </Badge>
          )}
          {isSale && (
            <Badge className="bg-price-sale text-destructive-foreground">
              -{discountPercent}%
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="secondary" size="icon" className="h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Quick Add to Cart */}
        <div className="absolute bottom-3 left-3 right-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button className="w-full" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-sm md:text-base mb-2 line-clamp-2">{name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span 
                key={i} 
                className={`text-xs ${i < Math.floor(rating) ? 'text-accent' : 'text-muted-foreground'}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-price">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;