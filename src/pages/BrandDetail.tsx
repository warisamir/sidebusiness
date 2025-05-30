
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Award, Phone } from 'lucide-react';

const BrandDetail = () => {
  const { brandSlug } = useParams();

  const brandData = {
    'ultratech': {
      name: 'UltraTech',
      description: 'India\'s largest cement company and a leading manufacturer of building materials',
      founded: '1983',
      categories: ['Cement', 'Tile Adhesives', 'Waterproofing'],
      products: [
        { name: 'OPC 43 Grade Cement', category: 'Cement', description: 'High-quality cement for general construction' },
        { name: 'OPC 53 Grade Cement', category: 'Cement', description: 'Premium cement for high-strength concrete' },
        { name: 'PPC Cement', category: 'Cement', description: 'Eco-friendly cement with superior workability' },
        { name: 'Tile Adhesive YT', category: 'Tile Adhesives', description: 'Premium tile adhesive for wall tiles' },
        { name: 'Tile Adhesive NT', category: 'Tile Adhesives', description: 'Standard tile adhesive for ceramic tiles' },
        { name: 'SBR Waterproofing', category: 'Waterproofing', description: 'Advanced waterproofing solution' }
      ],
      features: [
        'ISO 9001:2015 Certified',
        'Environment-friendly products',
        'Superior quality assurance',
        'Wide distribution network'
      ]
    },
    'grohe': {
      name: 'Grohe',
      description: 'German engineering excellence in premium water technology and bathroom fittings',
      founded: '1936',
      categories: ['Faucets', 'Sanitaryware', 'Shower Systems'],
      products: [
        { name: 'Kitchen Faucets', category: 'Faucets', description: 'Premium kitchen faucets with innovative technology' },
        { name: 'Bathroom Faucets', category: 'Faucets', description: 'Elegant bathroom faucets with superior design' },
        { name: 'Shower Systems', category: 'Shower Systems', description: 'Complete shower solutions with rainfall experience' },
        { name: 'Thermostatic Mixers', category: 'Faucets', description: 'Temperature control mixers for safety' }
      ],
      features: [
        'German Engineering',
        'Water-saving technology',
        'Lifetime warranty on selected products',
        'Premium design aesthetics'
      ]
    },
    'sintex': {
      name: 'Sintex',
      description: 'India\'s leading manufacturer of plastic water tanks and storage solutions',
      founded: '1931',
      categories: ['Water Tanks', 'Storage Solutions'],
      products: [
        { name: 'Overhead Water Tanks', category: 'Water Tanks', description: 'Durable overhead tanks for residential use' },
        { name: 'Underground Water Tanks', category: 'Water Tanks', description: 'High-capacity underground storage tanks' },
        { name: 'Loft Tanks', category: 'Water Tanks', description: 'Compact tanks for space-constrained areas' },
        { name: 'Industrial Tanks', category: 'Water Tanks', description: 'Heavy-duty tanks for industrial applications' }
      ],
      features: [
        'UV stabilized material',
        'Food-grade quality',
        '10-year warranty',
        'Wide range of capacities'
      ]
    }
  };

  const brand = brandData[brandSlug as keyof typeof brandData];

  if (!brand) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Brand Not Found</h1>
          <Link to="/products" className="text-orange-500 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>

        {/* Brand Header */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{brand.name}</h1>
              <p className="text-xl text-gray-600 mb-4 max-w-3xl">{brand.description}</p>
              <div className="flex items-center space-x-4">
                <Badge className="bg-orange-500">Founded {brand.founded}</Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">Premium Brand</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Product Categories</h2>
          <div className="flex flex-wrap gap-3">
            {brand.categories.map((category, index) => (
              <Badge key={index} variant="outline" className="text-lg px-4 py-2">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Available Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit">{product.category}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Why Choose {brand.name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brand.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Award className="h-6 w-6 text-orange-500" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-orange-500 text-white p-8 rounded-lg text-center">
          <Phone className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Interested in {brand.name} Products?</h2>
          <p className="text-xl mb-6 opacity-90">
            Contact us for pricing, availability, and expert recommendations
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
            Get Quote Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandDetail;
