
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail, MessageCircle } from 'lucide-react';

const ProductDetail = () => {
  const { productSlug } = useParams();

  const productData = {
    // Cement Products
    'cement': {
      name: 'OPC 43 Grade Cement',
      brand: 'UltraTech',
      category: 'Cement',
      price: '₹350 per bag (50kg)',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'High-quality Ordinary Portland Cement (OPC) 43 Grade is ideal for general construction work. This cement provides excellent strength and durability for residential and commercial buildings.',
      specifications: [
        'Grade: 43',
        'Weight: 50kg per bag',
        'Compressive Strength: 43 MPa',
        'Setting Time: 30 minutes initial, 600 minutes final',
        'Fineness: 225 m²/kg minimum'
      ],
      features: [
        'Superior quality and consistency',
        'Excellent workability',
        'High durability',
        'Suitable for all weather conditions',
        'Environment friendly'
      ]
    },

    // TMT Rebars Products
    'tmt-rebars': {
      name: 'TMT Rebars Fe 415 Grade',
      brand: 'APL Apollo',
      category: 'TMT Rebars',
      price: '₹58,000 per MT',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      description: 'Thermo-Mechanically Treated (TMT) rebars with Fe 415 grade steel. These rebars offer superior strength, ductility, and corrosion resistance for all types of construction.',
      specifications: [
        'Grade: Fe 415',
        'Yield Strength: 415 N/mm²',
        'Elongation: 14.5% minimum',
        'Sizes: 8mm to 32mm',
        'Length: 12 meters standard'
      ],
      features: [
        'High strength and ductility',
        'Excellent corrosion resistance',
        'Superior bendability',
        'Earthquake resistant',
        'Fire resistant properties'
      ]
    },

    // MS Structures
    'ms-structures': {
      name: 'MS Structural Angles & Pipes',
      brand: 'TATA',
      category: 'MS Structures',
      price: '₹55,000 per MT',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      description: 'High-quality Mild Steel structural angles and pipes for construction frameworks, supports, and structural applications.',
      specifications: [
        'Material: Mild Steel',
        'Standard: IS 2062',
        'Sizes: Various angles and pipe diameters',
        'Length: 6-12 meters',
        'Finish: Hot rolled'
      ],
      features: [
        'High tensile strength',
        'Excellent weldability',
        'Corrosion resistant coating available',
        'Precision engineered',
        'Cost-effective solution'
      ]
    },

    // AC Sheets
    'ac-sheets': {
      name: 'AC Sheets / GC Sheets',
      brand: 'TATA',
      category: 'Roofing',
      price: '₹450 per sheet',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'Asbestos Cement and Galvanized Corrugated sheets for roofing applications. Durable, weather-resistant, and cost-effective roofing solution.',
      specifications: [
        'Material: AC/GC Steel',
        'Thickness: 0.5mm to 1.2mm',
        'Length: 6ft to 12ft',
        'Width: 3ft standard',
        'Profile: Corrugated'
      ],
      features: [
        'Weather resistant',
        'Long lasting durability',
        'Easy installation',
        'Cost effective',
        'Fire resistant'
      ]
    },

    // Waterproofing
    'waterproofing': {
      name: 'SBR Waterproofing Solution',
      brand: 'UltraTech',
      category: 'Waterproofing',
      price: '₹120 per kg',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'Advanced Styrene Butadiene Rubber (SBR) based waterproofing solution for concrete structures, terraces, and basements.',
      specifications: [
        'Type: SBR Based',
        'Coverage: 1.5-2 kg per sq.m',
        'Drying Time: 4-6 hours',
        'Service Life: 10+ years',
        'Application: Brush/Roller'
      ],
      features: [
        'Excellent adhesion',
        'UV resistant',
        'Crack bridging properties',
        'Non-toxic and eco-friendly',
        'Easy application'
      ]
    },

    // Pipes
    'pipes': {
      name: 'CPVC & UPVC Pipes',
      brand: 'Supreme',
      category: 'Plumbing',
      price: '₹85 per meter',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      description: 'High-quality CPVC and UPVC pipes for hot and cold water supply, drainage, and plumbing applications.',
      specifications: [
        'Material: CPVC/UPVC',
        'Pressure Rating: 10-25 kg/cm²',
        'Temperature: Up to 70°C (CPVC)',
        'Sizes: 15mm to 200mm',
        'Length: 3 meters standard'
      ],
      features: [
        'Corrosion resistant',
        'Non-toxic and safe',
        'Easy installation',
        'Long service life',
        'Cost effective'
      ]
    },

    // Faucets & Sanitaryware
    'faucets-sanitaryware': {
      name: 'Premium Kitchen & Bath Faucets',
      brand: 'Grohe',
      category: 'Faucets',
      price: '₹15,500',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      description: 'Premium German-engineered kitchen and bathroom faucets with innovative technology and elegant design. Features water-saving technology and lifetime warranty.',
      specifications: [
        'Material: Chrome-plated brass',
        'Installation: Single/Double hole',
        'Spout Height: 240mm',
        'Flow Rate: 5.7 L/min',
        'Warranty: 5 years'
      ],
      features: [
        'German engineering excellence',
        'Water-saving technology',
        'Durable chrome finish',
        'Easy installation',
        'Lifetime warranty on selected parts'
      ]
    },

    // Water Tanks
    'water-tanks': {
      name: 'Plastic Water Storage Tanks',
      brand: 'Sintex',
      category: 'Water Storage',
      price: '₹8,500',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'High-quality plastic water storage tanks for residential and commercial use. UV stabilized and food-grade quality material.',
      specifications: [
        'Capacity: 500L to 10,000L',
        'Material: Food-grade plastic',
        'Color: Blue/Black/White',
        'Shape: Cylindrical/Rectangular',
        'Installation: Overhead/Underground'
      ],
      features: [
        'UV stabilized material',
        'Food-grade quality',
        '10-year warranty',
        'Leak-proof design',
        'Easy maintenance'
      ]
    },

    // Water Treatment
    'water-treatment': {
      name: 'Water Treatment Systems',
      brand: 'Aqua Guard',
      category: 'Water Treatment',
      price: '₹25,000',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'Complete water treatment solutions including heat pumps, water softeners, and septic tank systems for clean and safe water.',
      specifications: [
        'Capacity: 100-1000 LPH',
        'Technology: RO+UV+UF',
        'Power: 24V DC/230V AC',
        'Installation: Wall/Counter',
        'Maintenance: Annual'
      ],
      features: [
        'Multi-stage purification',
        'Energy efficient',
        'Auto-flush system',
        'Digital display',
        'Low maintenance'
      ]
    },

    // Tile Adhesives
    'tile-adhesives': {
      name: 'Premium Tile Adhesives',
      brand: 'UltraTech',
      category: 'Tile Adhesives',
      price: '₹450 per bag (20kg)',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'High-performance tile adhesives for wall and floor tile installation. Available in various grades for different applications.',
      specifications: [
        'Grade: YT/NT/VT/CT',
        'Coverage: 3-4 sq.m per bag',
        'Open Time: 15-20 minutes',
        'Setting Time: 2-3 hours',
        'Full Cure: 24 hours'
      ],
      features: [
        'Superior bonding strength',
        'Water resistant',
        'Easy application',
        'Suitable for all tile types',
        'Weather resistant'
      ]
    },

    // Paint
    'paint': {
      name: 'Premium Wall Paint',
      brand: 'Birla Opus',
      category: 'Paint',
      price: '₹320 per liter',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      description: 'High-quality interior and exterior wall paints with excellent coverage, durability, and finish. Available in multiple colors and textures.',
      specifications: [
        'Type: Acrylic/Enamel',
        'Coverage: 120-140 sq.ft per liter',
        'Drying Time: 2-4 hours',
        'Recoat Time: 4-6 hours',
        'Finish: Matt/Gloss/Semi-gloss'
      ],
      features: [
        'Excellent coverage',
        'Fade resistant colors',
        'Easy application',
        'Washable finish',
        'Environment friendly'
      ]
    },

    // Luxury & Wellness
    'luxury-wellness': {
      name: 'Luxury Bathroom Fixtures',
      brand: 'Jaquar',
      category: 'Luxury & Wellness',
      price: '₹85,000',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      description: 'Premium luxury bathroom fixtures including bathtubs, whirlpool systems, steam systems, and spa equipment for ultimate relaxation.',
      specifications: [
        'Material: Acrylic/Fiberglass',
        'Capacity: 200-400 liters',
        'Features: Massage jets, LED lights',
        'Installation: Freestanding/Built-in',
        'Warranty: 5 years'
      ],
      features: [
        'Hydrotherapy massage',
        'LED chromotherapy',
        'Digital controls',
        'Premium materials',
        'Energy efficient'
      ]
    }
  };

  const product = productData[productSlug as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Product Not Found</h1>
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

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4">{product.brand}</Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-orange-500 mb-6">{product.price}</p>
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-orange-500 hover:bg-orange-600" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Call for Quote
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Inquiry
              </Button>
              <Link to="/contact" className="block">
                <Button variant="secondary" className="w-full" size="lg">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Inquiry
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Specifications and Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Specifications */}
          <Card>
            <CardHeader>
              <CardTitle>Product Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
