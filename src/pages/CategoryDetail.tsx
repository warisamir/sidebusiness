
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building, ExternalLink, ShoppingCart } from 'lucide-react';

const CategoryDetail = () => {
  const { categorySlug } = useParams();

  const categoryData = {
    'cement': {
      title: 'Cement',
      description: 'High-quality cement for strong and durable construction',
      brands: [
        {
          name: 'UltraTech',
          products: [
            { name: 'OPC 43 Grade', slug: 'cement', price: '₹350/bag', image: [] },
            { name: 'OPC 53 Grade', slug: 'cement', price: '₹375/bag', image: [] },
            { name: 'PPC Cement', slug: 'cement', price: '₹340/bag', image: [] }
          ],
          description: 'Leading cement manufacturer in India with superior quality products'
        }
      ]
    },
    'tmt-rebars': {
      title: 'TMT Rebars',
      description: 'Thermo-Mechanically Treated rebars for enhanced strength and flexibility',
      brands: [
        {
          name: 'APL Apollo',
          products: [
            { name: 'Fe 415 Grade', slug: 'tmt-rebars', price: '₹58,000/MT', image: [] },
            { name: 'Fe 500 Grade', slug: 'tmt-rebars', price: '₹60,000/MT', image: [] },
            { name: 'Fe 550 Grade', slug: 'tmt-rebars', price: '₹62,000/MT', image: [] }
          ],
          description: 'Premium quality TMT rebars with excellent corrosion resistance'
        },
        {
          name: 'Kamdhenu',
          products: [
            { name: 'NXT Grade', slug: 'tmt-rebars', price: '₹57,500/MT', image: [] },
            { name: 'CRS Grade', slug: 'tmt-rebars', price: '₹59,000/MT', image: [] },
            { name: 'QST Grade', slug: 'tmt-rebars', price: '₹61,000/MT', image: [] }
          ],
          description: 'Innovative TMT rebars with superior bendability and strength'
        }
      ]
    },
    'faucets-sanitaryware': {
      title: 'Faucets & Sanitaryware',
      description: 'Premium bathroom and kitchen fixtures',
      brands: [
        {
          name: 'Grohe',
          products: [
            { name: 'Kitchen Faucets', slug: 'faucets-sanitaryware', price: '₹15,500', image: [] },
            { name: 'Bathroom Faucets', slug: 'faucets-sanitaryware', price: '₹12,000', image: [] },
            { name: 'Shower Systems', slug: 'faucets-sanitaryware', price: '₹25,000', image: [] }
          ],
          description: 'German engineering excellence in water technology'
        },
        {
          name: 'American Standard',
          products: [
            { name: 'Toilets', slug: 'faucets-sanitaryware', price: '₹18,000', image: [] },
            { name: 'Washbasins', slug: 'faucets-sanitaryware', price: '₹8,500', image: [] },
            { name: 'Bathtubs', slug: 'faucets-sanitaryware', price: '₹45,000', image: [] }
          ],
          description: 'Innovative bathroom solutions with superior design'
        }
      ]
    },
    'structural-materials': {
      title: 'Structural Materials',
      description: 'Essential building materials for strong foundations and structures',
      brands: [
        {
          name: 'UltraTech',
          products: [
            { name: 'OPC 43 Grade Cement', slug: 'cement', price: '₹350/bag', image: [] },
            { name: 'OPC 53 Grade Cement', slug: 'cement', price: '₹375/bag', image: [] }
          ],
          description: 'Leading cement manufacturer in India with superior quality products'
        },
        {
          name: 'APL Apollo',
          products: [
            { name: 'TMT Rebars Fe 415', slug: 'tmt-rebars', price: '₹58,000/MT', image: [] },
            { name: 'TMT Rebars Fe 500', slug: 'tmt-rebars', price: '₹60,000/MT', image: [] }
          ],
          description: 'Premium quality TMT rebars with excellent corrosion resistance'
        },
        {
          name: 'TATA',
          products: [
            { name: 'MS Structural Steel', slug: 'ms-structures', price: '₹55,000/MT', image: [] }
          ],
          description: 'High-quality structural steel for construction frameworks'
        }
      ]
    },
    'roofing-waterproofing': {
      title: 'Roofing & Waterproofing',
      description: 'Complete roofing and waterproofing solutions for protection',
      brands: [
        {
          name: 'TATA',
          products: [
            { name: 'AC/GC Roofing Sheets', slug: 'ac-sheets', price: '₹450/sheet', image: [] }
          ],
          description: 'Durable, weather-resistant roofing sheets'
        },
        {
          name: 'UltraTech',
          products: [
            { name: 'SBR Waterproofing', slug: 'waterproofing', price: '₹120/kg', image: [] }
          ],
          description: 'Advanced waterproofing solution for concrete structures'
        }
      ]
    },
    'plumbing-solutions': {
      title: 'Plumbing Solutions',
      description: 'Comprehensive plumbing materials and premium fixtures',
      brands: [
        {
          name: 'Supreme',
          products: [
            { name: 'CPVC & UPVC Pipes', slug: 'pipes', price: '₹85/meter', image: [] }
          ],
          description: 'High-quality pipes for plumbing applications'
        },
        {
          name: 'Grohe',
          products: [
            { name: 'Premium Faucets', slug: 'faucets-sanitaryware', price: '₹15,500', image: [] }
          ],
          description: 'German-engineered faucets with innovative technology'
        }
      ]
    },
    'water-solutions': {
      title: 'Water Solutions',
      description: 'Complete water storage and treatment solutions',
      brands: [
        {
          name: 'Sintex',
          products: [
            { name: 'Water Storage Tanks', slug: 'water-tanks', price: '₹8,500', image: [] }
          ],
          description: 'UV stabilized plastic water storage tanks'
        },
        {
          name: 'Aqua Guard',
          products: [
            { name: 'Water Treatment Systems', slug: 'water-treatment', price: '₹25,000', image: [] }
          ],
          description: 'Complete water treatment solutions including RO, UV, and UF'
        }
      ]
    },
    'finishing-materials': {
      title: 'Finishing Materials',
      description: 'Premium finishing and aesthetic materials for perfect completion',
      brands: [
        {
          name: 'UltraTech',
          products: [
            { name: 'Tile Adhesives', slug: 'tile-adhesives', price: '₹450/bag', image: [] }

          ],
          description: 'High-performance tile adhesives for various grades'
        },
        {
          name: 'Birla Opus',
          products: [
            { name: 'Premium Wall Paint', slug: 'paint', price: '₹320/liter', image: [] }
          ],
          description: 'High-quality interior and exterior wall paints'
        },
        {
          name: 'Jaquar',
          products: [
            { name: 'Luxury Bathroom Fixtures', slug: 'luxury-wellness', price: '₹85,000', image: [] }
          ],
          description: 'Premium luxury bathroom fixtures and spa equipment'
        }
      ]
    }
  };

  const category = categoryData[categorySlug as keyof typeof categoryData];

  // If category doesn't exist, redirect to categories page
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Navigation */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link to="/categories">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Categories
              </Link>
            </Button>
          </div>

          {/* Default Content */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Categories</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Browse our complete range of building materials organized by category. 
              From structural materials to finishing touches, we have everything you need.
            </p>
            <Link to="/categories">
              <Button className="bg-orange-500 hover:bg-orange-600">
                View All Categories
              </Button>
            </Link>
          </div>
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
            <Link to="/categories">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{category.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>

        {/* Brands Grid */}
        <div className="space-y-12">
          {category.brands.map((brand, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{brand.name}</h2>
                  <p className="text-gray-600">{brand.description}</p>
                </div>
                <Link to={`/brand/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button variant="outline">
                    View Brand Details
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {brand.products.map((product, productIndex) => (
                  <Card key={productIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <img
                        // src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <p className="text-2xl font-bold text-orange-500">{product.price}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Badge variant="secondary">{brand.name}</Badge>
                        <div className="flex space-x-2">
                          <Link to={`/product/${product.slug}`} className="flex-1">
                            <Button className="w-full bg-orange-500 hover:bg-orange-600">
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Available
                            </Button>
                          </Link>
                          <Link to="/contact">
                            <Button variant="outline" size="icon">
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white p-8 rounded-lg shadow-md">
          <Building className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-6">Need Expert Guidance?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team can help you choose the right {category.title.toLowerCase()} for your specific project requirements.
          </p>
          <Link to="/contact">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Contact Our Experts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
