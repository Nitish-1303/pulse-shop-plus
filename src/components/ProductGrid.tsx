import ProductCard from "@/components/ProductCard";
import productHeadphones from "@/assets/product-headphones.jpg";
import productSmartwatch from "@/assets/product-smartwatch.jpg";
import productLaptop from "@/assets/product-laptop.jpg";

const products = [
  {
    id: "1",
    name: "Wireless Premium Headphones",
    price: 299,
    originalPrice: 399,
    image: productHeadphones,
    rating: 4.8,
    reviews: 124,
    isNew: false,
    isSale: true,
  },
  {
    id: "2", 
    name: "Smart Watch Pro Series",
    price: 449,
    image: productSmartwatch,
    rating: 4.9,
    reviews: 89,
    isNew: true,
    isSale: false,
  },
  {
    id: "3",
    name: "Premium Laptop Computer",
    price: 1299,
    originalPrice: 1499,
    image: productLaptop,
    rating: 4.7,
    reviews: 203,
    isNew: false,
    isSale: true,
  },
  {
    id: "4",
    name: "Wireless Premium Headphones",
    price: 299,
    originalPrice: 399,
    image: productHeadphones,
    rating: 4.8,
    reviews: 124,
    isNew: false,
    isSale: true,
  },
  {
    id: "5", 
    name: "Smart Watch Pro Series",
    price: 449,
    image: productSmartwatch,
    rating: 4.9,
    reviews: 89,
    isNew: true,
    isSale: false,
  },
  {
    id: "6",
    name: "Premium Laptop Computer",
    price: 1299,
    originalPrice: 1499,
    image: productLaptop,
    rating: 4.7,
    reviews: 203,
    isNew: false,
    isSale: true,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium electronics and accessories, 
            designed to enhance your digital lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-border rounded-md hover:bg-secondary transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;