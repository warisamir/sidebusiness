
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Wrench, Droplets, Paintbrush, Hammer, ShoppingCart, LucideX } from 'lucide-react';
import Cover from '@/assets/Products/Ultratec Cement.png';
//second
import rebar from '@/assets/tmt/Apl Apollo.webp';
//msccover
import mscCover from '@/assets/Products/MSCoverImage.png';
//acsheet 
import cover from '@/assets/Products/AC & GC Roofing sheets.jpg';
//pipes
import Agricultre from '@/assets/Products/Plumbing Pipeline & Fittings.png';
//waterproofing
import waterprofing from '@/assets/waterprofing/Coverpage.webp';
//download
import downld from '@/assets/Products/Faucet & Sanitarywares.jpg';
// watertank 
import Cool from '@/assets/Products/Water Tanks.jpg';
//waterteeatment
import waterTreatment from '@/assets/Products/Water Solutions.png';
//tiles 
import walladhesive from '@/assets/tiles-adhesive/astral.avif';
//paint&putty
import acrylic from '@/assets/Products/Paints.jpg';
//luxuxry 
import luzuzry from '@/assets/Products/Luxury & Wellness.jpg';
//mirror
import Mirror from '@/assets/mirror/mirror3.png';

const Products = () => {
  const allProducts = [
    {
      name: "Ultratech Cement",
      brand: "UltraTech",
      category: "Structural Materials",
      slug: "cement",
      image: Cover,
      description: "High-quality Ordinary Portland Cement for general construction work with excellent strength and durability."
    },
    {
      name: "TMT Rebars",
      brand: "APL Apollo",
      category: "Structural Materials", 
      slug: "tmt-rebars",
      image: rebar,
      description: "Thermo-Mechanically Treated rebars with superior strength, ductility, and corrosion resistance."
    },
    {
      name: "MS Structural Steel",
      brand: "TATA",
      category: "Structural Materials",
      slug: "ms-structures",
      image: mscCover,
      description: "High-quality Mild Steel structural angles and pipes for construction frameworks and supports."
    },
    {
      name: "AC & GC Roofing Sheets",
      brand: "TATA",
      category: "Roofing & Waterproofing",
      slug: "ac-sheets", 
      image: cover,
      description: "Durable, weather-resistant roofing sheets for residential and commercial applications."
    },
    {
      name: "SBR Waterproofing",
      brand: "UltraTech",
      category: "Roofing & Waterproofing",
      slug: "waterproofing",
      image: waterprofing, 
      description: "Advanced waterproofing solution for concrete structures, terraces, and basements."
    },
    {
      name: "Plumbing pipeline & fittings",
      brand: "Supreme",
      category: "Plumbing Solutions",
      slug: "pipes",
      image: Agricultre,
      description: "High-quality pipes for hot and cold water supply, drainage, and plumbing applications."
    },
    {
      name: "Premium Faucets",
      brand: "Grohe", 
      category: "Plumbing Solutions",
      slug: "faucets-sanitaryware",
      image: downld,
      description: "German-engineered kitchen and bathroom faucets with innovative technology and elegant design."
    },
    {
      name: "Water Tanks",
      brand: "Sintex",
      category: "Water Solutions", 
      slug: "water-tanks",
      image: Cool,
      description: "UV stabilized plastic water storage tanks for residential and commercial use."
    },
    {
      name: "Water Solution",
      brand: "Aqua Guard",
      category: "Water Solution",
      slug: "water-Solution",
      image: waterTreatment,
      description: "Soft, clean & pressurized water with 3M filters, Havells heat pumps, and high-performance pressure pumps. Ideal for homes, hotels & commercial spaces."
    },
    {
      name: "Tile Adhesives",
      brand: "UltraTech",
      category: "Finishing Materials",
      slug: "tile-adhesives",
      image: walladhesive, 
      description: "High-performance tile adhesives for wall and floor tile installation in various grades."
    },
    {
      name: "Premium Wall Paint",
      brand: "Birla Opus",
      category: "Finishing Materials",
      slug: "paint",
      image: acrylic,
      description: "Birla Opus paints & Birla White putty for smooth, vibrant, and long-lasting walls. Excellent coverage, weather resistance, low VOC, strong bonding, and flake-free finish."
    },
    {
      name: "Luxury Bathroom Fixtures", 
      brand: "Jaquar",
      category: "Finishing Materials",
      slug: 'luxury-wellness',
      image: luzuzry,
      description: "Premium luxury bathroom fixtures including bathtubs, whirlpool systems, and spa equipment."
    },
    {
      name: "Mirrors",
      brand: "Designer LED Mirrors and Customized Mirror Solutions from Glazonoid",
      category: "Mirror",
      slug: 'Mirror',
      image: Mirror,
      description: "Designed to enhance modern homes, luxury bathrooms, vanity areas, salons, and commercial interiors, Glazonoid mirrors blend aesthetics with smart features."
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
                <p className="text-xl font-bold text-orange-500">{ }</p>
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
