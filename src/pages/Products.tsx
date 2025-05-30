
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Wrench, Droplets, Paintbrush, Hammer, ShoppingCart } from 'lucide-react';

const Products = () => {
  const allProducts = [
    {
      name: "OPC 43 Grade Cement",
      brand: "UltraTech",
      category: "Structural Materials",
      price: "₹350/bag",
      slug: "cement",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "High-quality Ordinary Portland Cement for general construction work with excellent strength and durability."
    },
    {
      name: "TMT Rebars Fe 415",
      brand: "APL Apollo",
      category: "Structural Materials", 
      price: "₹58,000/MT",
      slug: "tmt-rebars",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      description: "Thermo-Mechanically Treated rebars with superior strength, ductility, and corrosion resistance."
    },
    {
      name: "MS Structural Steel",
      brand: "TATA",
      category: "Structural Materials",
      price: "₹55,000/MT", 
      slug: "ms-structures",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      description: "High-quality Mild Steel structural angles and pipes for construction frameworks and supports."
    },
    {
      name: "AC/GC Roofing Sheets",
      brand: "TATA",
      category: "Roofing & Waterproofing",
      price: "₹450/sheet",
      slug: "ac-sheets", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "Durable, weather-resistant roofing sheets for residential and commercial applications."
    },
    {
      name: "SBR Waterproofing",
      brand: "UltraTech",
      category: "Roofing & Waterproofing",
      price: "₹120/kg",
      slug: "waterproofing",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", 
      description: "Advanced waterproofing solution for concrete structures, terraces, and basements."
    },
    {
      name: "CPVC & UPVC Pipes",
      brand: "Supreme",
      category: "Plumbing Solutions",
      price: "₹85/meter",
      slug: "pipes",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      description: "High-quality pipes for hot and cold water supply, drainage, and plumbing applications."
    },
    {
      name: "Premium Faucets",
      brand: "Grohe", 
      category: "Plumbing Solutions",
      price: "₹15,500",
      slug: "faucets-sanitaryware",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      description: "German-engineered kitchen and bathroom faucets with innovative technology and elegant design."
    },
    {
      name: "Water Storage Tanks",
      brand: "Sintex",
      category: "Water Solutions", 
      price: "₹8,500",
      slug: "water-tanks",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "UV stabilized plastic water storage tanks for residential and commercial use."
    },
    {
      name: "Water Treatment Systems",
      brand: "Aqua Guard",
      category: "Water Solutions",
      price: "₹25,000", 
      slug: "water-treatment",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "Complete water treatment solutions including RO, UV, and UF purification systems."
    },
    {
      name: "Tile Adhesives",
      brand: "UltraTech",
      category: "Finishing Materials",
      price: "₹450/bag",
      slug: "tile-adhesives",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", 
      description: "High-performance tile adhesives for wall and floor tile installation in various grades."
    },
    {
      name: "Premium Wall Paint",
      brand: "Birla Opus",
      category: "Finishing Materials",
      price: "₹320/liter",
      slug: "paint",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "High-quality interior and exterior wall paints with excellent coverage and durability."
    },
    {
      name: "Luxury Bathroom Fixtures", 
      brand: "Jaquar",
      category: "Finishing Materials",
      price: "₹85,000",
      slug: "luxury-wellness",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      description: "Premium luxury bathroom fixtures including bathtubs, whirlpool systems, and spa equipment."
    }
  ];

  const productCategories = [
    {
      icon: <Building className="h-8 w-8 text-orange-500" />,
      title: "Structural Materials",
      description: "Essential building materials for strong foundations"
    },
    {
      icon: <Droplets className="h-8 w-8 text-orange-500" />,
      title: "Roofing & Waterproofing", 
      description: "Complete roofing and waterproofing solutions"
    },
    {
      icon: <Wrench className="h-8 w-8 text-orange-500" />,
      title: "Plumbing Solutions",
      description: "Comprehensive plumbing materials and fixtures"
    },
    {
      icon: <Hammer className="h-8 w-8 text-orange-500" />,
      title: "Water Solutions",
      description: "Complete water storage and treatment solutions" 
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-orange-500" />,
      title: "Finishing Materials",
      description: "Premium finishing and aesthetic materials"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of building materials. From structural materials to finishing touches, we have everything you need for your construction projects.
          </p>
        </div>

        {/* All Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {allProducts.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <Badge className="w-fit mb-2" variant="secondary">{product.brand}</Badge>
                <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-xl font-bold text-orange-500">{product.price}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                <Link to={`/product/${product.slug}`} className="block">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Available
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories Overview */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Product Categories</h2>
          <p className="text-lg text-gray-600">Browse by category to find exactly what you need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow text-center p-6">
              <div className="flex justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our experts are here to guide you in selecting the right materials for your project.
          </p>
          <Link 
            to="/contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors"
          >
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
