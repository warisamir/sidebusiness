
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import storeLocationImg from '@assets/storelocation/storelocator.png';
import { Building, Wrench, Droplets, Paintbrush, Hammer, ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 'structural-materials',
      title: 'Structural Materials',
      description: 'Essential building materials for strong foundations and structures',
      icon: <Building className="h-8 w-8 text-orange-500" />,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      brands: ['UltraTech', 'TATA', 'APL Apollo'],
      productCount: 3,
      products: [
        { name: 'OPC 43 Grade Cement', price: '₹350/bag', slug: 'cement' },
        { name: 'TMT Rebars Fe 415', price: '₹58,000/MT', slug: 'tmt-rebars' },
        { name: 'MS Structural Steel', price: '₹55,000/MT', slug: 'ms-structures' }
      ]
    },
    {
      id: 'roofing-waterproofing',
      title: 'Roofing & Waterproofing',
      description: 'Complete roofing and waterproofing solutions for protection',
      icon: <Droplets className="h-8 w-8 text-orange-500" />,
      images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
        '/assets/roofiing/AC SHEET.webp',
        '/assets/roofiing/AC SHEETS.webp',
        './assets/roofiing/GC SHEETS COLOUR COATED.jpg',
        './assets/roofiing/gc-roofing-sheet-500x500.webp'
      ],
      brands: ['TATA', 'UltraTech'],
      productCount: 2,
      products: [
        { name: 'AC/GC Roofing Sheets', price: '₹450/sheet', slug: 'ac-sheets' },
        { name: 'SBR Waterproofing', price: '₹120/kg', slug: 'waterproofing' }
      ]
    },
    {
      id: 'plumbing-solutions',
      title: 'Plumbing Solutions',
      description: 'Comprehensive plumbing materials and premium fixtures',
      icon: <Wrench className="h-8 w-8 text-orange-500" />,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      brands: ['Supreme', 'Grohe'],
      productCount: 2,
      products: [
        { name: 'CPVC & UPVC Pipes', price: '₹85/meter', slug: 'pipes' },
        { name: 'Premium Faucets', price: '₹15,500', slug: 'faucets-sanitaryware' }
      ]
    },
    {
      id: 'water-solutions',
      title: 'Water Solutions',
      description: 'Complete water storage and treatment solutions',
      icon: <Hammer className="h-8 w-8 text-orange-500" />,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      brands: ['Sintex', 'Aqua Guard'],
      productCount: 2,
      products: [
        { name: 'Water Storage Tanks', price: '₹8,500', slug: 'water-tanks' },
        { name: 'Water Treatment Systems', price: '₹25,000', slug: 'water-treatment' }
      ]
    },
    {
      id: 'finishing-materials',
      title: 'Finishing Materials',
      description: 'Premium finishing and aesthetic materials for perfect completion',
      icon: <Paintbrush className="h-8 w-8 text-orange-500" />,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      brands: ['UltraTech', 'Birla Opus', 'Jaquar'],
      productCount: 3,
      products: [
        { name: 'Tile Adhesives', price: '₹450/bag', slug: 'tile-adhesives' },
        { name: 'Premium Wall Paint', price: '₹320/liter', slug: 'paint' },
        { name: 'Luxury Bathroom Fixtures', price: '₹85,000', slug: 'luxury-wellness' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Categories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of building materials organized by category.
            From structural materials to finishing touches, find everything you need for your construction projects.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  {category.icon}
                  <Badge variant="secondary">{category.productCount} Products</Badge>
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <p className="text-gray-600">{category.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Trusted Brands */}
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Trusted Brands:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.brands.map((brand, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Featured Products */}
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Featured Products:</h4>
                    <div className="space-y-2">
                      {category.products.slice(0, 2).map((product, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{product.name}</span>
                          <span className="font-semibold text-orange-500">{product.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Category Button */}
                  <Link to={`/category/${category.id}`} className="block">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600">
                      View Category
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
          <Building className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-6">Need Help Choosing the Right Category?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our expert team can guide you through our product categories and help you find
            the perfect materials for your specific construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button className="bg-orange-500 hover:bg-orange-600">
                View All Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
