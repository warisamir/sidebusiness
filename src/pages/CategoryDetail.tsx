
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Building, ExternalLink, ShoppingCart } from 'lucide-react';
import Cement from '@/assets/Cement/Cement.png';
import download from '@/assets/Cement/OPC.png';
import PPC from '@/assets/Cement/PPC.png';
import PSC from '@/assets/Cement/PSC.png';
import Cover from '@/assets/Cement/coverimage.png';
import AplApollologo from '@/assets/logos/APL APOLLO.png';
import Apiapollo from '@/assets/tmt/Apl Apollo.webp';
import Kamdhenu from '@/assets/tmt/Kamdhenu.jpg';
import MST from '@/assets/tmt/MSP TMT.webp';
import shristi from '@/assets/tmt/shristi-1.jpg';
import rebar from '@/assets/tmt/rebardcover.webp';
//msstructure 
import barbed from '@/assets/msstructure/Barbed Wire.avif';
import c2 from '@/assets/msstructure/c2.jpg';
import fencing from '@/assets/msstructure/MSCoverImage.png';
import mschanel from '@/assets/msstructure/MS channel.jpg';
import MSFLat from '@/assets/msstructure/MS FLATS.webp';
import TATAmslogo from '@/assets/logos/MSP.png'
import Msround from '@/assets/msstructure/MS Round Pipe.webp';
import msquare from '@/assets/msstructure/MS Square Pipe.png';
import mainangle from '@/assets/msstructure/MS-Main-Angle.jpg';
import msrect from '@/assets/msstructure/MS-Main-Angle.jpg';
import msstruct from '@/assets/msstructure/msstrucutre.webp';
import mscCover from '@/assets/msstructure/cover.jpg';
//fouth
import Acsheet from '@/assets/sheet/AC SHEET.webp';
import Acsheets from '@/assets/sheet/AC SHEETS.webp';
import GCsheet from '@/assets/sheet/GC SHEETS COLOUR COATED.jpg';
import gcroofing from '@/assets/sheet/gc-roofing-sheet-500x500.webp';
import cover from '@/assets/sheet/cover.jpg';
//fifth
import CVPC from '@/assets/pipes/CPVC.png';
import Agricultre from '@/assets/pipes/Agriculture Pressure Pipes & Fittings.jpg';
import Nudrain from '@/assets/pipes/NU-Drain Readymade Inspection Chambers.jpg';
import Nudrinaready from '@/assets/pipes/Nu-Drain Pipes.png';
import Plastic from '@/assets/pipes/Plastic Septic Tank.jpg';
import silaid from '@/assets/pipes/Silaid Rubber Lubricants.png';
import Silbond from '@/assets/pipes/Silbond Solvent.png';
import SWR from '@/assets/pipes/SWR Pipe & Drainage Systems.png';
import UPVC from '@/assets/pipes/UPVC.png';
import coverFitting from '@/assets/pipes/Cover supreme.jpg';
//waterprofing
import waterprofing from '@/assets/waterprofing/Coverpage.webp';
import water from '@/assets/waterprofing/water.jpg';
//faucet
import faucet from '@/assets/faucet/faucet.jpg';
import front from '@/assets/faucet/front.jpg';
import tap from '@/assets/faucet/tap.jpg';
import downld from '@/assets/faucet/download.png';
import coverfaucet from '@/assets/faucet/coverimage.png';
//watertank
import Amrutam from '@/assets/waterTank/Amrutam Underground Water Storage Tanks.jpg';
import Copper from '@/assets/waterTank/CopperSheild Water Tanks.png';
import Ecosil from '@/assets/waterTank/Ecosil Overhead Water Tank.jpg';
import Siltank from '@/assets/waterTank/Siltank Overhead Water Tanks & Loft Tanks.jpg';
import Weather from '@/assets/waterTank/WeatherShield Premium Overhead Water Storage Tanks.jpg';
import Cool from '@/assets/vectuswatertank/Cool.webp';
import Granite from '@/assets/vectuswatertank/Granito.webp';
import mini from '@/assets/vectuswatertank/mini.webp';
import sntexwatertank from '@/assets/waterTank/sintexwatertank.jpeg';
//waterTreatmentSolution 
import watertreatment from '@/assets/waterTreatment/image.png';
import waterCover from '@/assets/waterTreatment/hqcover.jpg';
import watertr from '@/assets/waterTreatment/Pressurepump.png';
import Mhome from "@/assets/waterTreatment/3Mhome.png";
import havell from '@/assets/waterTreatment/havelltreament.png';
//tiles-adhesive
import walladhesive from '@/assets/tiles-adhesive/astral.avif';
import wallputy from '@/assets/tiles-adhesive/download.jpg';
import tiles from '@/assets/tiles-adhesive/tiles-adhesvie.jpg';
//paints
import acrylic from '@/assets/paint&putty/opusimage.jpeg';
import Assian from '@/assets/paint&putty/opusforegorund.jpeg';
import paint from '@/assets/paint&putty/opusbackground.jpeg';
import wallputty from '@/assets/paint&putty/birla-opus-paints-1000x1000.webp';
import opusprime from '@/assets/paint&putty/opuspriime.jpeg';
//luxury 
import luxuryone from '@/assets/Luxury & Wellness Area/0952354499532539abfae8959cb5a7d7.jpg';
import luzuryandwellness from '@/assets/Luxury & Wellness Area/14675ccf2edb307a84b52ac92105b900.jpg';
import luxuryofLife from '@/assets/Luxury & Wellness Area/23b778e14a4eb9b93a76513dd7b5d91c.jpg';
import luxuary from '@/assets/Luxury & Wellness Area/2550d9b3e106fd8ce75ba231bda5afe5.jpg';
import jaquazzi from '@/assets/Luxury & Wellness Area/2597498c0f63006f88078977cc5e3db9.jpg';
import bathtub from '@/assets/Luxury & Wellness Area/30482a85b3bf4b2459c9e36b96857394.jpg';
import wellness from '@/assets/Luxury & Wellness Area/3fde8f68d5e9e3f63aff1ae2cda3be87.jpg';
import sauna from '@/assets/Luxury & Wellness Area/480ff8795adb6e5e5fe563c064d731c8.jpg';
import saunabath from "@/assets/Luxury & Wellness Area/4d790705ae54e5caecf5d2cd793995b4.jpg";
import club from "@/assets/Luxury & Wellness Area/60887117e88860b9cc3f5701fd7c563a.jpg";
import clubhouse from "@/assets/Luxury & Wellness Area/d2070b4ef91adf2c4f643b388ca4d966.jpg";
import house from "@/assets/Luxury & Wellness Area/ee10479e4f74d7d4311dd76630cc4943.jpg";
import { Description } from '@radix-ui/react-toast';
import American from '@/assets/logos/American-Standard.png';
import { features } from 'process';
import Mirror3 from '@/assets/mirror/mirror3.png';
import Mirror from '@/assets/mirror/mirror.png';
import Mirror2 from '@/assets/mirror/mirror2.png';
import Mirror4 from '@/assets/mirror/mirror4.png';
//logos
import vectus from "@/assets/log/1.jpg";
import ultratech from "@/assets/log/2.jpg";
import tataSteel from "@/assets/log/3.jpg";
import Supreme from "@/assets/log/4.jpg";
import TMT from "@/assets/log/5.jpg";
import Sintex from "@/assets/log/6.jpg";
import jaguar from "@/assets/log/7.jpg";
import hindware from "@/assets/log/8.jpg";
import everest from "@/assets/log/9.jpg";
import grohe from "@/assets/log/10.jpg";
import Colstone from "@/assets/log/11.jpg";
import Birla from "@/assets/log/12.jpg";
import Aris from "@/assets/log/13.jpg";
import BrilaOpus from "@/assets/log/14.jpg";
import AmericanStandard from '@/assets/log/15.jpg';
import aplapollo from '@/assets/log/16.jpg';

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
            { name: 'OPC 43 Grade', slug: 'cement', price: '₹350/bag', image: [Cement] },
            { name: 'OPC 53 Grade', slug: 'cement', price: '₹375/bag', image: [PSC] },
            { name: 'PPC Cement', slug: 'cement', price: '₹340/bag', image: [PPC] }
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
                        src={product.image}
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



//edvdgdgdsvdcsfe
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
