import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Headphones, Laptop, Watch, Camera, Gamepad2 } from "lucide-react";

const categories = [
  {
    id: "phones",
    name: "Smartphones",
    icon: Smartphone,
    count: 25,
  },
  {
    id: "audio",
    name: "Audio",
    icon: Headphones,
    count: 18,
  },
  {
    id: "computers",
    name: "Computers",
    icon: Laptop,
    count: 12,
  },
  {
    id: "wearables",
    name: "Wearables",
    icon: Watch,
    count: 8,
  },
  {
    id: "cameras",
    name: "Cameras",
    icon: Camera,
    count: 15,
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: Gamepad2,
    count: 22,
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection organized by categories to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group cursor-pointer hover:shadow-medium transition-all duration-300 border-0 shadow-soft"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} items</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;