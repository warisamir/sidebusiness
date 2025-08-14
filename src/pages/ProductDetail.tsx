
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail, MessageCircle, DownloadIcon, AlarmPlus } from 'lucide-react';
import Cement from '/assets/Cement/Cement.png';
import download from '/assets/Cement/OPC.png';
import PPC from '/assets/Cement/PPC.png';
import PSC from '/assets/Cement/PSC.png';
import Cover from '/assets/Cement/coverimage.png';
//second
import Apiapollo from '/assets/tmt/Apl Apollo.webp';
import Kamdhenu from '/assets/tmt/Kamdhenu.jpg';
import MST from '/assets/tmt/MSP TMT.webp';
import shristi from '/assets/tmt/shristi-1.jpg';
import rebar from '/assets/tmt/rebardcover.webp';
//msstructure 
import barbed from '/assets/msstructure/Barbed Wire.avif';
import c2 from '/assets/msstructure/c2.jpg';
import fencing from '/assets/msstructure/Fencing wire application image.jpg';
import feningwire from '/assets/msstructure/Fencing wire application image.jpg';
import mschanel from '/assets/msstructure/MS channel.jpg';
import MSFLat from '/assets/msstructure/MS FLATS.webp';
import Msround from '/assets/msstructure/MS Round Pipe.webp';
import msquare from '/assets/msstructure/MS Square Pipe.png';
import mainangle from '/assets/msstructure/MS-Main-Angle.jpg';
import msrect from '/assets/msstructure/MS-Main-Angle.jpg';
import msstruct from '/assets/msstructure/msstrucutre.webp';
import mscCover from '/assets/msstructure/cover.jpg';
//fouth
import Acsheet from '/assets/sheet/AC SHEET.webp';
import Acsheets from '/assets/sheet/AC SHEETS.webp';
import GCsheet from '/assets/sheet/GC SHEETS COLOUR COATED.jpg';
import gcroofing from '/assets/sheet/gc-roofing-sheet-500x500.webp';
import cover from '/assets/sheet/cover.jpg';
//fifth
import CVPC from '/assets/pipes/CPVC.png';
import Agricultre from '/assets/pipes/Agriculture Pressure Pipes & Fittings.jpg';
import Nudrain from '/assets/pipes/NU-Drain Readymade Inspection Chambers.jpg';
import Nudrinaready from '/assets/pipes/Nu-Drain Pipes.png';
import Plastic from '/assets/pipes/Plastic Septic Tank.jpg';
import silaid from '/assets/pipes/Silaid Rubber Lubricants.png';
import Silbond from '/assets/pipes/Silbond Solvent.png';
import SWR from '/assets/pipes/SWR Pipe & Drainage Systems.png';
import UPVC from '/assets/pipes/UPVC.png';
//waterprofing
import waterprofing from '/assets/waterprofing/Coverpage.webp';
import water from '/assets/waterprofing/water.jpg';
//faucet
import faucet from '/assets/faucet/faucet.jpg';
import front from '/assets/faucet/front.jpg';
import tap from '/assets/faucet/tap.jpg';
import downld from '/assets/faucet/download.png';
//watertank
import Amrutam from '/assets/waterTank/Amrutam Underground Water Storage Tanks.jpg';
import Copper from '/assets/waterTank/CopperSheild Water Tanks.png';
import Ecosil from '/assets/waterTank/Ecosil Overhead Water Tank.jpg';
import Siltank from '/assets/waterTank/Siltank Overhead Water Tanks & Loft Tanks.jpg';
import Weather from '/assets/waterTank/WeatherShield Premium Overhead Water Storage Tanks.jpg';
import Cool from '/assets/vectuswatertank/Cool.webp';
import Granite from '/assets/vectuswatertank/Granito.webp';
import mini from '/assets/vectuswatertank/mini.webp';
//waterTreatmentSolution 
import watertreatment from '/assets/waterTreatment/image.png';
import watertr from '/assets/waterTreatment/images.jpg';
//tiels-adhesive
import walladhesive from '/assets/tiles-adhesive/astral-trubuild-ta-220-plus-tiles-adhesive-20-kh-2224154387-2vddlvfy.avif';
import wallputy from '/assets/tiles-adhesive/download.jpg';
import tiles from '/assets/tiles-adhesive/tiles-adhesvie.jpg';
//paints
import acrylic from '/assets/paint&putty/acrylic.jpg';
import Assian from '/assets/paint&putty/assian.webp';
import paint from '/assets/paint&putty/paint.jpg';
import walllputty from '/assets/paint&putty/images.jpg';
//luxury 
import luxuryone from '/assets/luxury/download.jpg';
import luzuzry from '/assets/luxury/luzury.jpg';
import wellness from '/assets/luxury/wellness.jpg';

const ProductDetail = () => {
  const { productSlug } = useParams();

  const productData = {
    // Cement Products
    'cement': {
      name: 'Ultratech Cement',
      brand: 'UltraTech',
      category: 'Cement',
      coverImage: Cover,
      image: [Cement, download, PPC, PSC, Cement, download], //'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
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
      coverImage: rebar,
      image: [Apiapollo, Kamdhenu, MST, shristi],
      description: `We offer top-quality TMT bars from trusted brands that deliver unmatched strength, flexibility, and performance for all your construction needs. Explore our available brands, sizes, and product visuals below:`,
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
      ],
      productType: [
        {
          image: [Apiapollo],
          description: `Known for excellent tensile strength and corrosion resistance, 
    APL Apollo TMT bars are ideal for both residential and commercial structures.
    Available Sizes:
    8 mm
    10 mm
    12 mm
    16 mm
    20 mm
    25 mm`
        },
        {
          image: [Kamdhenu],
          description: `Kamdhenu TMT bars offer superior bendability, high ductility, and excellent earthquake resistance.
    Available Sizes:
    8 mm
    10 mm
    12 mm
    16 mm
    20 mm
    25 mm`
        },
        {
          image: [MST],
          description: `MST TMT bars are designed for maximum tensile strength and long-lasting durability, perfect for heavy construction projects.
    Available Sizes:
    8 mm
    10 mm
    12 mm
    16 mm
    20 mm
    25 mm`
        },
        {
          image: [shristi],
          description: `Shristi TMT bars provide excellent corrosion resistance and reliable structural performance in all climates.
    Available Sizes:
    8 mm
    10 mm
    12 mm
    16 mm
    20 mm
    25 mm`
        }
      ]
    },
    // MS Structures
    'ms-structures': {
      name: 'MS Structural Angles & Pipes',
      brand: 'TATA & APL Apollo',
      category: 'MS Structures',
      coverImage: fencing,
      image: [barbed, fencing, c2, fencing, msrect, msstruct, mainangle, MSFLat, Msround, mschanel, msquare],
      description: `MS Structural Sections – Strength in Every Shape<br/>
      <strong>TATA & APL Apollo | Available at Vishesh Build Mart</strong><br/>
      At Vishesh Build Mart, we offer a premium range of MS Structural Pipes, Angles, Channels, Flats, Fencing Jali, and Barbed Wire from industry leaders TATA Steel and APL Apollo. These structural materials are known for their superior strength, durability, and precision, making them ideal for a wide range of industrial, residential, and fabrication needs.<br/><br/>

      🔹 <strong>Available Shapes & Categories</strong><br/>
      Round Pipes<br/>
      Square Pipes<br/>
      Rectangular Pipes<br/>
      Angles (L Sections)<br/>
      C Channels (U Sections)<br/>
      MS Flats<br/>
      Fencing Jali (MS Welded Wire Mesh)<br/>
      Barbed Wire<br/><br/>

      🔹 <strong>TATA MS Structural Sections</strong><br/>
      Description: TATA Structural products are manufactured using advanced technology to ensure high load-bearing capacity, corrosion resistance, and dimensional accuracy. Trusted by architects and engineers alike, TATA MS structures are perfect for industrial and commercial applications.<br/>
      Common Applications:<br/>
      • Industrial sheds and warehouses<br/>
      • Frame structures and trusses<br/>
      • Fencing, railing, gates, and grills<br/>
      • Roofing, fabrication, and base structures<br/>
      • Agricultural boundary protection (Barbed Wire)<br/>
      • Base plates, window grills, and fabrication (MS Flats)<br/>
      Available Sizes:<br/>
      • Round Pipes: 1/2" to 6" diameter<br/>
      • Square Pipes: 25x25 mm to 150x150 mm<br/>
      • Rectangular Pipes: 40x20 mm to 150x100 mm<br/>
      • Angles: 25x25x3 mm to 100x100x10 mm<br/>
      • Channels: 75x40 mm to 150x75 mm<br/>
      • MS Flats: Width – 20 mm to 150 mm, Thickness – 3 mm to 12 mm<br/>
      • Fencing Jali: 1 mm to 5 mm wire thickness, 25x25 mm to 100x100 mm mesh sizes<br/>
      • Barbed Wire: 12 gauge, 14 gauge (Standard & Heavy Duty)<br/>
      • Wall thickness: 1.2 mm to 6 mm<br/><br/>

      🔹 <strong>APL Apollo MS Structural Sections</strong><br/>
      Description: APL Apollo is renowned for its innovative range of structural steel tubes, angles, channels, flats, fencing solutions, and barbed wire. With high strength-to-weight ratio, excellent surface finish, and easy weldability, APL Apollo products are widely used in modern architecture and infrastructure.<br/>
      Common Applications:<br/>
      • Pre-engineered buildings (PEBs)<br/>
      • Residential and commercial framing<br/>
      • Infrastructure projects<br/>
      • Fabrication, partitions, fencing, and boundary security<br/>
      • Gates, supports, base structures, and metal furniture (MS Flats)<br/>
      Available Sizes:<br/>
      • Round Pipes: 1/2" to 8" diameter<br/>
      • Square Pipes: 20x20 mm to 200x200 mm<br/>
      • Rectangular Pipes: 40x20 mm to 250x150 mm<br/>
      • Angles: 25x25x3 mm to 110x110x10 mm<br/>
      • Channels: 75x40 mm to 200x75 mm<br/>
      • MS Flats: Width – 20 mm to 200 mm, Thickness – 3 mm to 12 mm<br/>
      • Fencing Jali: 1 mm to 6 mm wire thickness, various mesh options available<br/>
      • Barbed Wire: 12 gauge, 14 gauge (ISI Marked)<br/>
      • Wall thickness: 1.2 mm to 8 mm<br/><br/>

      ✅ <strong>Why Buy MS Structures from Vishesh Build Mart?</strong><br/>
      • Certified products from TATA Steel and APL Apollo<br/>
      • Wide variety of pipes, angles, channels, flats, fencing jali, and barbed wire in multiple sizes<br/>
      • Suitable for industrial, residential, agricultural, and commercial uses<br/>
      • Custom lengths, cutting, and bulk supply available<br/>
      • Reliable pricing and timely delivery
      `,
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
      ],
      productType: {
        image: [],
        description: []
      }
    },
    // AC Sheets
    'ac-sheets': {
      name: 'AC & GC Roofing Sheets – Reliable Roofing for Every Structure',
      brand: 'TATA & Everest',
      category: 'Roofing',
      coverImage: cover,
      image: [Acsheet, Acsheets, GCsheet, gcroofing],
      description: `At Vishesh Build Mart, we offer a trusted collection of AC (Asbestos Cement) and GC (Galvanised Corrugated) roofing sheets from top industry brands TATA and Everest. Ideal for homes, factories, farmhouses, and industrial buildings, these roofing solutions provide sturdy, weather-resistant coverage.`,

      specifications: [
        'Available Brands: TATA, Everest',
        'AC Roofing Sheet Sizes: 6 ft, 8 ft, 10 ft, 12 ft',
        'AC Sheet Thickness: 6 mm, 8 mm',
        'GC Roofing Sheet Sizes: 6 ft to 12 ft',
        'GC Sheet Thickness: 0.25 mm to 0.63 mm'
      ],

      features: [
        'Weather and fire resistant',
        'Corrosion and rust-resistant (GC Sheets)',
        'Sound and heat insulation (AC Sheets)',
        'Lightweight yet durable',
        'Cost-effective with long lifespan',
        'Easy installation and low maintenance'
      ],
      productType: {
        image: [],
        description: []
      }
    },
    // Waterproofing
    'waterproofing': {
      name: 'SBR Waterproofing Solution',
      brand: 'UltraTech',
      category: 'Waterproofing',
      coverImage: waterprofing,
      image: [waterprofing, water],
      description: 'Advanced Styrene Butadiene Rubber (SBR) based waterproofing solution for concrete structures, terraces, and basements. Specially formulated for long-lasting protection, this product ensures superior sealing performance against water seepage, enhancing the durability and structural integrity of buildings. Ideal for residential, commercial, and industrial projects, it helps reduce long-term maintenance costs while adding value to your property.',
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
      ],
      productType: {
        image: [],
        description: []
      }
    },

    // Pipes
    'pipes': {
      name: 'CPVC & UPVC Pipes',
      brand: 'Supreme',
      category: 'Plumbing',
      coverImage: Agricultre,
      image: [CVPC, Nudrain, Nudrinaready, Plastic, Silbond, silaid, SWR, UPVC, Agricultre],
      description: 'Supreme Plumbing & Drainage Solutions – Now Available at Vishesh Build Mart.<br> At Vishesh Build Mart, we bring you the trusted quality of Supreme Industries – India’s leading brand in piping systems.<br> Known for its innovation, durability, and performance, Supreme has been setting industry benchmarks for over 75 years.<br> Whether it\'s plumbing, drainage, or agricultural piping needs – Supreme products ensure long-lasting reliability, safety, and ease of installation.<br> 🚰 Plumbing Pipelines & Fittings – Reliable Flow, Long-Lasting Durability – Supreme by Your Side.<br> Explore our comprehensive range of Supreme plumbing products designed to meet modern water supply requirements with safety, strength, and efficiency.<br> 🔹 UPVC Pipes & Fittings – Ideal for potable cold water systems. Lightweight, chemical-resistant, and easy to install.<br> 🔹 CPVC Pipes & Fittings – Perfect for hot & cold water applications. High thermal resistance and long-lasting durability.<br> 🔹 Solvents & Lubricants – Supreme-approved joining solutions for leak-proof installations. Includes pipe adhesives, rubber lubricants, and more.<br> 💧 Drainage Pipelines & Fittings – Smooth Discharge. Strong Foundation. Ensure uninterrupted drainage flow with Supreme’s durable range for residential, commercial, and infrastructure projects.<br> 🔹 SWR Pipes & Fittings – Designed for soil, waste & rainwater drainage. Anti-odor, leak-proof and UV stabilized.<br> 🔹 Agriculture Pipes – Heavy-duty pipes for irrigation, field supply & rural water management. High pressure and weather-resistant.<br> 🔹 Readymade Chambers – Modular chambers for inspection and underground utility access. Easy to install, load-bearing and long service life.<br> 🔹 Nu-Drain Pipes – Advanced non-pressure underground drainage system. Suitable for municipal and residential sewage networks.<br>',
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
      ],
      productType: {
        image: [],
        description: []
      }
    },

    // Faucets & Sanitaryware
    'faucets-sanitaryware': {
      name: 'Faucets & Sanitaryware – Elegant, Efficient & Enduring',
      brand: 'Grohe, American Standard, Jaquar, Colstone, Hindware, Aries',
      category: 'Faucets & Sanitaryware',
      coverImage: faucet,
      image: [faucet, tap, front, downld],
      description: 'Premium faucets and sanitaryware combining style, durability, and hygiene. Curated from top brands for luxurious bathrooms, functional spaces, and budget-friendly remodels.',
      specifications: [
        'Basin & sink mixers',
        'Showers & shower panels',
        'Health faucets',
        'Wall-hung & floor-mounted toilets',
        'Washbasins & vanities',
        'Cisterns, flush plates & urinals',
        'Bath accessories and fittings'
      ],
      features: [
        'Elegant designs with premium finishes',
        'Water-saving & eco-friendly technology',
        'Durable and easy-clean surfaces',
        'Wide range for all budget segments',
        'Trusted global and Indian brands',
        'Precision control and leak-proof performance'
      ],
      productType: {
        image: [],
        description: []
      }
    },

    // Water Tanks
    'water-tanks': {
      name: 'Plastic Water Storage Tanks',
      brand: 'Sintex',
      category: 'Water Storage',
      coverImage: [Cool],
      image: [Cool, mini, Granite, Amrutam, Copper, Ecosil, Siltank, Weather],
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
      ],
      productType: {
        image: [],
        description: []
      }
    },

    // Water Treatment
    'water-treatment': {
      name: 'Water Treatment Systems',
      brand: 'Aqua Guard',
      category: 'Water Treatment',
      coverImage: watertreatment,
      image: [watertreatment, watertr],
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
      ],
      productType: {
        image: [],
        description: []
      }
    },

    // Tile Adhesives
    'tile-adhesives': {
      name: 'Premium Tile Adhesives',
      brand: 'UltraTech',
      category: 'Tile Adhesives',
      image: [walladhesive, tiles, wallputy],
      coverImage: walladhesive,
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
      ],
      productType: {
        image: [],
        description: []
      }
    },

    // Paint
    'paint': {
      name: 'Premium Wall Paint',
      brand: 'Birla Opus',
      category: 'Paint',
      coverImage: wallputy,
      image: [acrylic, Assian, paint, wallputy],
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
      ],
      productType: {
        image: [],
        description: []
      }
    },

    // Luxury & Wellness
    'luxury-wellness': {
      name: 'Luxury Bathroom Fixtures',
      brand: 'Jaquar',
      category: 'Luxury & Wellness',
      coverImage: [luzuzry],
      image: [luzuzry, luxuryone, wellness],
      description: 'Curated luxury bathroom & wellness range from Grohe, American Standard, Jaquar & Colstone — including bathtubs, whirlpools, steam cabins, spa beds, and smart digital showers. Designed for comfort, innovation, and elegant aesthetics.',
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
      ],
      productType: {
        image: [],
        description: []
      }
    }
  };
  const product = productData[productSlug as keyof typeof productData];
  const loopImages = [...product.image, ...product.image];

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
          <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center h-96">
            <img
              src={product.coverImage}
              alt={product.name}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4">{product.brand}</Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-orange-500 mb-6">
                {product.price}
              </p>
              <p
                className="text-lg text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></p>
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

        {/* Image Carousel Card */}
        <Card className="overflow-x-auto no-scrollbar whitespace-nowrap p-4 mb-12">
          <div className="overflow-hidden no-scrollbar w-full bg-gray-100">
            <div className="scroll-loop">
              {loopImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt=""
                  className="h-48 w-auto mx-4 flex-shrink-0 rounded-lg"
                />
              ))}
            </div>
          </div>
        </Card> 

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

        
        <Card>
          <CardHeader>
            <CardTitle>Sub-Product:</CardTitle>
          </CardHeader>
          </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {product?.productType?.map((subProduct, index) => (
    <Card key={index} className="flex items-center space-x-4 p-4">
      {/* Image on the left */}
      <img
        src={subProduct.image[0]}
        alt={`Sub Product ${index + 1}`}
        className="w-40 h-40 object-cover rounded-lg shadow-md border"
      />

      {/* Text on the right, vertically centered */}
      <span className="text-sm text-gray-700 self-center">
        {subProduct.description}
      </span>
    </Card>
  ))}
</div>

      </div>
    </div>
  );

};

export default ProductDetail;
