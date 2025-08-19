
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail, MessageCircle, DownloadIcon, AlarmPlus, MSquare } from 'lucide-react';
import Cement from '@/assets/Cement/Cement.png';
import download from '@/assets/Cement/OPC.png';
import PPC from '@/assets/Cement/PPC.png';
import PSC from '@/assets/Cement/PSC.png';
import Cover from '@/assets/Cement/coverimage.png';
//second
import Apiapollo from '@/assets/tmt/Apl Apollo.webp';
import Kamdhenu from '@/assets/tmt/Kamdhenu.jpg';
import MST from '@/assets/tmt/MSP TMT.webp';
import shristi from '@/assets/tmt/shristi-1.jpg';
import rebar from '@/assets/tmt/rebardcover.webp';
//msstructure 
import barbed from '@/assets/msstructure/Barbed Wire.avif';
import c2 from '@/assets/msstructure/c2.jpg';
import fencing from '@/assets/msstructure/Fencing wire application image.jpg';
import mschanel from '@/assets/msstructure/MS channel.jpg';
import MSFLat from '@/assets/msstructure/MS FLATS.webp';
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
//waterprofing
import waterprofing from '@/assets/waterprofing/Coverpage.webp';
import water from '@/assets/waterprofing/water.jpg';
//faucet
import faucet from '@/assets/faucet/faucet.jpg';
import front from '@/assets/faucet/front.jpg';
import tap from '@/assets/faucet/tap.jpg';
import downld from '@/assets/faucet/download.png';
//watertank
import Amrutam from '@/assets/waterTank/Amrutam Underground Water Storage Tanks.jpg';
import Copper from '@/assets/waterTank/CopperSheild Water Tanks.png';
import Ecosil from '@/assets/waterTank/Ecosil Overhead Water Tank.jpg';
import Siltank from '@/assets/waterTank/Siltank Overhead Water Tanks & Loft Tanks.jpg';
import Weather from '@/assets/waterTank/WeatherShield Premium Overhead Water Storage Tanks.jpg';
import Cool from '@/assets/vectuswatertank/Cool.webp';
import Granite from '@/assets/vectuswatertank/Granito.webp';
import mini from '@/assets/vectuswatertank/mini.webp';
//waterTreatmentSolution 
import watertreatment from '@/assets/waterTreatment/image.png';
import watertr from '@/assets/waterTreatment/images.jpg';
import Mhome from "@/assets/waterTreatment/3Mhome.png";
import havell from '@/assets/waterTreatment/havell.png';
//tiles-adhesive
import walladhesive from '@/assets/tiles-adhesive/astral.avif';
import wallputy from '@/assets/tiles-adhesive/download.jpg';
import tiles from '@/assets/tiles-adhesive/tiles-adhesvie.jpg';
//paints
import acrylic from '@/assets/paint&putty/acrylic.jpg';
import Assian from '@/assets/paint&putty/assian.webp';
import paint from '@/assets/paint&putty/paint.jpg';
import walllputty from '@/assets/paint&putty/images.jpg';
//luxury 
import luxuryone from '@/assets/luxury/download.jpg';
import luzuzry from '@/assets/luxury/luzury.jpg';
import wellness from '@/assets/luxury/wellness.jpg';
import { Description } from '@radix-ui/react-toast';
import grohe from '@/assets/luxury/grohe.png';
import American from '@/assets/luxury/American.png';
import { features } from 'process';
import Mirror3 from '@/assets/mirror/mirror3.png';
import Mirror from '@/assets/mirror/mirror.png';
import Mirror2 from '@/assets/mirror/mirror2.png';
import Mirror4 from '@/assets/mirror/mirror4.png';
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
      ],
      productType: [
        {
          image: [Cement],
          name: "OPC 43 & 53 grade",
          description: `Ultratech OPC 43 & 53 Grade – Ordinary Portland Cement (OPC)`
        },
        {
          image: [download],
          name: "Oordinary Portland Cement",
          description: `OPC is known for its fast setting properties, making it suitable for time-sensitive projects. However, it may not be the most eco-friendly or budget-efficient option in the long run`
        },
        {
          image: [PPC], name: "Portland Pozzolana Cement",
          description: `PPC is a great choice for structures built in tough environmental conditions, offering enhanced durability and resistance against moisture and chemicals.`
        },
        {
          image: [PSC], name: "Portland Slag Cement",
          description: `PSC is highly recommended for construction projects near coastal areas or marine environments, thanks to its superior resistance to saltwater corrosion and harsh weather.`
        }
      ]
    },

    // TMT Rebars Products
    'tmt-rebars': {
      name: 'TMT Rebars ',
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
          name: "ApiApollo",
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
          name: "Kamdhenu",
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
          image: [MST], name: "MST",
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
          image: [shristi], name: "TMT",
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
      description: `TATA & APL Apollo | Available at Vishesh Build Mart
        At Vishesh Build Mart, we offer a premium range of MS Structural Pipes, Angles, Channels,
        Flats, Fencing Jali, and Barbed Wire from industry leaders TATA Steel and APL Apollo. 
        These structural materials are known for their superior strength, durability, and precision, 
        making them ideal for a wide range of industrial, residential, and fabrication needs.
        We offer MS structural materials in multiple shapes to suit your project requirements:
        Round Pipes
        Square Pipes
        Rectangular Pipes
        Angles (L Sections)
        C Channels (U Sections)
        MS Flats
        Fencing Jali (MS Welded Wire Mesh)
        Barbed Wire`,
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
      productType: [{
        image: [barbed, mscCover, mschanel],
        name: "Api Apollo",
        description: `APL Apollo is renowned for its innovative range of structural steel tubes, angles, channels, flats, fencing solutions, and barbed wire. With high strength-to-weight ratio, excellent surface finish, and easy weldability, APL Apollo products are widely used in modern architecture and infrastructure.

        Key Applications & Features:
        - Pre-engineered buildings (PEBs)
        - Residential and commercial framing
        - Infrastructure projects
        - Fabrication, partitions, fencing, and boundary security
        - Gates, supports, base structures, and metal furniture (MS Flats)

        Available Sizes:
        - Round Pipes: 1/2" to 8" diameter
        - Square Pipes: 20x20 mm to 200x200 mm
        - Rectangular Pipes: 40x20 mm to 250x150 mm
        - Angles: 25x25x3 mm to 110x110x10 mm
        - Channels: 75x40 mm to 200x75 mm
        - MS Flats: Width – 20 mm to 200 mm, Thickness – 3 mm to 12 mm
        - Fencing Jali: 1 mm to 6 mm wire thickness, various mesh options available (square/rectangular)
        - Barbed Wire: 12 gauge, 14 gauge (ISI Marked)
        - Wall thickness: 1.2 mm to 8 mm
        `
      },
        {
          image: [MSFLat, MSquare],
          name: 'TATA MS',
          description: `TATA Structural products are manufactured using advanced technology to ensure high load-bearing capacity, corrosion resistance, and dimensional accuracy. Trusted by architects and engineers alike, TATA MS structures are perfect for industrial and commercial applications.

        Common Applications:
        - Industrial sheds and warehouses
        - Frame structures and trusses
        - Fencing, railing, gates, and grills
        - Roofing, fabrication, and base structures
        - Agricultural boundary protection (Barbed Wire)
        - Base plates, window grills, and fabrication (MS Flats)

        Available Sizes:
        - Round Pipes: 1/2" to 6" diameter
        - Square Pipes: 25x25 mm to 150x150 mm
        - Rectangular Pipes: 40x20 mm to 150x100 mm
        - Angles: 25x25x3 mm to 100x100x10 mm
        - Channels: 75x40 mm to 150x75 mm
        - MS Flats: Width – 20 mm to 150 mm, Thickness – 3 mm to 12 mm
        - Fencing Jali: 1 mm to 5 mm wire thickness, 25x25 mm to 100x100 mm mesh sizes
        - Barbed Wire: 12 gauge, 14 gauge (Standard & Heavy Duty)
        - Wall thickness: 1.2 mm to 6 mm
        `
      }
      ]
    },
    // AC Sheets
    'ac-sheets': {
      name: 'AC & GC Roofing Sheets – Reliable Roofing for Every Structure',
      brand: 'TATA & Everest',
      category: 'Roofing',
      coverImage: cover,
      image: [Acsheet, Acsheets, GCsheet, gcroofing],
      description: `At Vishesh Build Mart, we offer a trusted collection of AC (Asbestos Cement) and GC 
      (Galvanised Corrugated) roofing sheets from the top industry brands TATA and Everest.
       These roofing solutions are ideal for providing sturdy, weather-resistant coverage for homes,
        factories, farmhouses, and industrial buildings.`,
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
      productType: [
        {
          name: "Everest AC Sheets, TATA AC Sheets",
          image: [Acsheet],
          description: `AC sheets are made from a mix of cement and reinforcing fibres, 
        known for their excellent insulation properties and resistance to extreme temperatures.
      Applications:
      - Rural and agricultural shelters
      - Industrial warehouses
      - Animal sheds
      - Factory roofing

      Key Features:
      - Cost-effective and long-lasting
      - Weather and fire resistant
      - Sound and heat insulation
      - Low maintenance

      Available Sizes:
      - 6 ft
      - 8 ft
      - 10 ft
      - 12 ft

      Thickness Options:
      - 6 mm
      - 8 mm
      `
        },
        {
          name: "TATA Shaktee, Everest GC Sheets",
          image: [GCsheet],
          description: `GC sheets are made of galvanized steel with a protective zinc coating, 
        offering excellent corrosion resistance and structural strength.
        Applications:
        - Residential sheds
        - Garages and workshops
        - Commercial rooftops
        - Cladding for warehouses and factories
        Key Features:
        - Anti-corrosive and rust-resistant
        - Lightweight and durable
        - Easy to install
        - High tensile strength
        Available Sizes:
        - 6 ft to 12 ft
        Thickness Options:
        - 0.25 mm to 0.63 mm
        `
        }
      ]
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
      description: `At Vishesh Build Mart, we bring you the trusted quality of Supreme Industries 
      – India’s leading brand in piping systems. Known for its innovation, 
      durability, and performance, Supreme has been setting industry benchmarks for over 75 years. Whether its plumbing, drainage, or agricultural piping needs 
      – Supreme products ensure long- lasting reliability, safety, and ease of installation.`,
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
      productType: [
        {
          name: "🚰 Plumbing Pipelines & Fittings",
          image: [Agricultre],
          description: `
        Reliable Flow, Long-Lasting Durability – Supreme by Your Side
        Explore our comprehensive range of Supreme plumbing products designed to meet modern water supply requirements with safety, strength, and efficiency.

        🔹 UPVC Pipes & Fittings
        - Ideal for potable cold water systems
        - Lightweight, chemical-resistant, and easy to install

        🔹 CPVC Pipes & Fittings
        - Perfect for hot & cold water applications
        - High thermal resistance and long-lasting durability

        🔹 Solvents & Lubricants
        - Supreme-approved joining solutions for leak-proof installations
        - Includes pipe adhesives, rubber lubricants, and more
            `
        },
        {
          name: "💧 Drainage Pipelines & Fittings",
          image: [Nudrain],
          description: `
        Smooth Discharge. Strong Foundation.
        Ensure uninterrupted drainage flow with Supreme’s durable range for residential, commercial, and infrastructure projects.

        🔹 SWR Pipes & Fittings
        - Designed for soil, waste & rainwater drainage
        - Anti-odor, leak-proof and UV stabilized

        🔹 Agriculture Pipes
        - Heavy-duty pipes for irrigation, field supply & rural water management
        - High pressure and weather-resistant

        🔹 Readymade Chambers
        - Modular chambers for inspection and underground utility access
        - Easy to install, load-bearing and long service life

        🔹 Nu-Drain Pipes
        - Advanced non-pressure underground drainage system
        - Suitable for municipal and residential sewage networks
            `
        }
      ]

    },

    // Faucets & Sanitaryware
    'faucets-sanitaryware': {
      name: 'Faucets & Sanitaryware – Elegant, Efficient & Enduring',
      brand: 'Grohe, American Standard, Jaquar, Colstone, Hindware, Aries',
      category: 'Faucets & Sanitaryware',
      coverImage: faucet,
      image: [faucet, tap, front, downld],
      description: `At Vishesh Build Mart, we offer a wide selection of premium faucets and sanitaryware that blend aesthetics with performance. From luxurious bathrooms to functional commercial spaces, our curated range from top brands ensures style, durability, and hygiene — all in one place.
        We deal in industry- leading brands like Grohe, American Standard, Jaquar, Colstone, Hindware, and Aries, bringing you only the best in quality and design.
         Product Range Includes:
          - Basin & sink mixers
          - Showers & shower panels
          - Health faucets
          - Wall-hung & floor-mounted toilets
          - Washbasins & vanities
          - Cisterns, flush plates & urinals
          - Bath accessories and fittings`,
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
      productType: [
        {
          name: "🔹Grohe",
          image: [downld],
          description:
            `German Engineering. Global Elegance.
          - Iconic European design
          - Eco-friendly water-saving technology
          - Precision control and flawless chrome finishes
          - Smart showers, sensor faucets, basin mixers, and more
          👉 Click to see full Grohe product range:
          https://www.mygrohe.com/catalogue/grohe`
        },
        {
          name: "🔹 American Standard",
          image: [tap],
          description: `
            Timeless Comfort with Modern Innovation
        - Advanced hygiene technology & ergonomic design
        - Durable, water - efficient products
        - Sleek toilets, washbasins, faucets & wellness solutions
        - Trusted in homes and hotels worldwide
        👉 Click to see full American Standard product range:
        https://www.mygrohe.com/catalogue/american-standard`
        },
        {
          name: "🔹Jaquar",
          image: [front],
          description: `Where Style Meets Reliability
        - Comprehensive bathroom solutions
        - Sleek faucets, showers, flush systems, and accessories
        - Long-lasting chrome finish with leak-proof guarantee
        - Wide variety for all budget segments
        👉 Click to see full Jaquar product range:
        https://www.jaquar.com/en/mobile`
        },
        {
          name: "🔹Colstone",
          image: [tap],
          description: `Premium Quality. Contemporary Craftsmanship.
        - Modern sanitaryware for stylish spaces
        - Known for elegant designs and solid build
        - Great choice for premium interiors and budget-friendly remodels
        👉 Click to see full Colstone product range:
        https://colstonconcepts.com/bathrooms/`
        },
        {
          name: "",
          image: [downld],
          description: `Affordable Innovation for Every Home
          - Popular Indian brand with wide range
          - Sanitaryware, faucets, cisterns, and bathroom accessories
          - Stain-resistant, easy-clean surfaces
          - Great value without compromising on aesthetics`
      }
      ]
    },

    // Water Tanks
    'water-tanks': {
      name: 'Plastic Water Storage Tanks',
      brand: 'Sintex',
      category: 'Water Storage',
      coverImage: [Cool],
      image: [Cool, mini, Granite, Amrutam, Copper, Ecosil, Siltank, Weather],
      description: `At Vishesh Build Mart, we offer a wide range of premium water storage tanks from the most reliable names in the industry 
      – SS Tank, Sintex, Supreme, and Vectus. Whether it’s for residential, commercial, or industrial use, 
      - our collection ensures safe, hygienic, and long-lasting water storage solutions.`,
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
      productType: [
        {
          name: "🔹 Supreme Water Tanks",
          image: [Cool],
          description: `
          Strong and sturdy tanks designed for high performance
          100% virgin plastic construction for maximum durability
          Available in both overhead and underground options
          Superior resistance to weather and wear
          Variants Available:
          - Underground Water Storage Tanks
          - Siltank Overhead Water Tanks & Loft Tanks
          - WeatherShield Premium Overhead Water Storage Tanks
          - Ecosil Overhead Water Tanks
          - CopperShield Water Tanks 
          - Copper layer helps maintain water purity and resists <bacteria>`
        }, {
          name: "🔹Vectus Water Tanks",
          image: [Siltank],
          description: `
          Stylish, durable, and innovative tank designs
          Multi-layer protection for UV resistance and temperature control
          Ideal for both domestic and industrial applications
          Available in a variety of models like 3-layer, 4-layer, and anti-bacterial tanks
          Variants Available:
          - Puff (4 Layer Water Tank)
          - Ten-X (10 Layer Water Tank)
          - T-90 (6 Layer Water Tank)
          - Cool (5 Layer Water Tank)
          - Safe (4 Layer Water Tank)
          - Granito (6 Layer Water Tank)
          - Mini (3 Layer Water Tank)
          - Smart (3 Layer Water Tank)
          - Silk (3 Layer Water Tank)`
        },
        {
          name: "🔹Sintex Water Tanks",
          image: [Silbond],
          description: `
            India’s most trusted name in water storage
            High-quality, food-grade plastic
            UV-stabilized, durable, and leak-proof designs
            Available in a wide range of sizes and capacities
            Variants Available:
            - Sintex Trupuf
            - Sintex Pure Plus
            - Sintex Tatva
            - Sintex Pure Antimicrobial
            - Sintex Titus
            - Sintex Hero
            - Sintex Classic Double Wall (DW)
            - Sintex ISI Double Layer Water Tanks
            - Sintex Ace Antimicrobial
            - Sintex Loft Tanks
            - Sintex Neo
            - Sintex Reno
            - Sintex Underground Water Tanks (Sump)`
      }
      ]
    },

    // Water Treatment
    'water-Solution': {
      name: 'Water Solution Systems',
      brand: 'Aqua Guard',
      category: 'Water Treatment',
      coverImage: watertreatment,
      image: [watertreatment, watertr, Mhome],
      description: `Smart Systems for Pure, Pressurized & Efficient Water Flow
        At Vishesh Build Mart, we understand that clean, soft, and well-managed water is essential for every home and business. That’s why we offer a comprehensive range of Water Solutions that enhance water quality, improve pressure, and ensure energy-efficient water heating.
        We deal in top-tier brands like 3M, Havells, and other reliable manufacturers to bring you cutting-edge water treatment and flow control systems under one roof.`,
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
      productType: [
        {
          image: [Mhome],
          nmae: "Water Softeners-3M Home Water Filtration",
          description: `
        Protect Your Home from Hard Water Damage
        Say goodbye to hard water stains, dry skin, and damaged appliances. Our 3M water softener and filtration systems ensure soft, clean water flows through every tap in your home.
         Key Benefits:
          - Reduces scale buildup in pipes and appliances
          - Improves soap and detergent efficiency
          - Enhances hair and skin health
          - Compact design with easy maintenance`
        },
        {
          name: " Heat Pumps- Havells",
          image: [havell],
          description: `Eco-Friendly Hot Water, Anytime
          Havells heat pumps provide energy-efficient water heating solutions ideal for homes, hotels, and commercial spaces.
          Key Features:
          - Saves up to 70% energy compared to electric geysers
          - Works in all weather conditions
          - Smart digital controls with temperature presets
          - Ideal for large families, luxury bathrooms, and hospitality setups`
        },
        {
          name: " Heat Pumps- Havells",
          image: [havell],
          description: `Eco-Friendly Hot Water, Anytime
          Havells heat pumps provide energy-efficient water heating solutions ideal for homes, hotels, and commercial spaces.
          Key Features:
          - Saves up to 70% energy compared to electric geysers
          - Works in all weather conditions
          - Smart digital controls with temperature presets
          - Ideal for large families, luxury bathrooms, and hospitality setups`
        },
        {
          name: "Pressure Pump",
          image: [watertr],
          description: `
        Consistent Water Pressure Across Every Floor
        Ensure powerful water flow across your entire property — even during peak usage hours — with our range of high-performance pressure pumps.
        Key Features:
        Ideal for multi-storey buildings & villas
        Automatic and silent operation
        Protects appliances like geysers and showers from pressure fluctuations
        Available in multiple capacities and configurations
        Trusted Water Solutions For:
        - Homes & Apartments
        - Villas & Farmhouses
        - Hotels & Guesthouses
        - Commercial Buildings & Healthcare Units`
      }
      ]
    },


    // Tile Adhesives
    'tile-adhesives': {
      name: 'Premium Tile Adhesives',
      brand: 'UltraTech',
      category: 'Tile Adhesives',
      image: [walladhesive, tiles, wallputy],
      coverImage: walladhesive,
      description: `High-performance tile adhesives for wall and floor tile installation.
   Available in various grades for different applications.`,
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
      productType: [
        {
          name: "Tiles",
          image: [tiles],
          description: `High-performance tile adhesives for wall and floor tile installation.
   Available in various grades for different applications.`
        }
      ]
    },

    // Paint
    'paint': {
      name: 'Premium Wall Paint',
      brand: 'Birla Opus',
      category: 'Paint',
      coverImage: wallputy,
      image: [Assian, wallputy, paint, acrylic],
      description: `At Vishesh Build Mart, we help you lay the perfect foundation for your dream walls 
      with high-performance paints and putty solutions from the trusted Birla brand. Whether 
      you’re building a new space or renovating an old one, our range ensures smooth finishes,
      rich colors, and long-lasting protection for every surface.`,
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
      productType: [
        {
          name: "Paint",
          image: [paint],
          description: `
        Superior Finish. Long-Lasting Brilliance.
        Birla Opus is a new-age paint solution designed to offer rich textures, vibrant color payoff, and superior wall protection for both interiors and exteriors.
        Key Features:
        - Excellent coverage and smooth application
        - Durable and weather-resistant finish
        - Low VOC for a safer indoor environment
        - Wide range of shades and finishes available`
        },
        {
          name: "Putty",
          image: [acrylic],
          description: `
        Strong Base. Flawless Finish.
        Birla White Wall Putty is India’s most trusted solution for preparing smooth, crack-free, and paint-ready walls. It enhances paint performance and provides a durable surface that lasts for years.
        Key Features:
        - Smoothens wall surface and covers imperfections
        - Strong bonding with plastered walls
        - Prevents flaking and dampness
        - Suitable for both interior and exterior applications`
        },
      ]
    },

    'luxury-wellness': {
      name: 'Luxury Bathroom Fixtures',
      brand: 'Jaquar',
      category: 'Luxury & Wellness',
      coverImage: [luzuzry],
      image: [luzuzry, luxuryone, wellness],
      description: `Indulge in Everyday Elegance - Bathtubs | Whirlpools | Steam Systems | Spa Equipment
                    At Vishesh Build Mart, we bring you a carefully curated collection of luxury bathroom 
                    and wellness solutions designed to turn your space into a personal sanctuary. Whether 
                    you're building a dream bathroom or upgrading to a modern spa experience, our offerings
                     combine comfort, innovation, and aesthetics.We proudly deal in premium brands like Grohe, 
                     American Standard, Jaquar, and Colstone, known globally for their superior craftsmanship and wellness technology.`,
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
      productType: [
        {
          name: "Grohe",
          image: [grohe],
          description: `Grohe European Wellness Engineered for Comfort.
        - Freestanding and built-in bathtubs
        - Smart digital showers and steam systems
        - Soothing whirlpool tubs with air & water jets
        - Eco-friendly spa features with minimalist design`
        },
        {
          name: "American Standard Relaxation ",
          image: [American],
          description: `American Standard Relaxation Meets Innovation.
          - Ergonomic bathtubs with contoured support
          - Whirlpool and massage systems for hydrotherapy
          - Sleek spa solutions designed for wellness and hygiene
          - Perfect fusion of performance and comfort`
        },
        {
          name: "Colstone",
          image: [American],
          description: `Colstone Affordable Luxury.Functional Design.
          - Compact spa systems and stylish bathtubs
          - Budget- friendly wellness solutions with a premium look
          - Durable construction with modern finishes
          - Ideal for homes, salons, and boutique hotels`
        }
      ]
    },
    'Mirror': {
      name: "Mirrors",
      brand: "Designer LED Mirrors and Customized Mirror Solutions from Glazonoid",
      category: "Mirror",
      coverImage: [Mirror],
      image: [Mirror, Mirror2, Mirror3, Mirror4, Mirror, Mirror2],
      description: `Glazonoid is a leading name in high-end, intelligent mirror solutions. 
      Their mirrors are not just reflective surfaces – they’re smart décor elements that offer lighting, 
      functionality, and personalization. The range includes LED vanity mirrors, smart mirrors with integrated features, 
      customized designer mirrors, and high-performance makeup & salon mirrors, all designed to elevate interiors 
      with style and innovation.`,
      specifications: [
        "LED Vanity Mirrors – backlit, front-lit & edge-lit options",
        "Touch sensor, dimmable lights, and color temperature control",
        "Smart Mirrors – digital clock, weather updates, Bluetooth speakers",
        "Custom Shapes – Round, Oval, Rectangular, Abstract",
        "Frame Options – Wooden, Metallic, Frameless",
        "High-lumen lighting for makeup & salon use",
        "Anti-fog and high-clarity glass"
      ],
      features: [
        "Sleek, space-saving, and modern designs",
        "Custom size and lighting options available",
        "Perfect for bathrooms, dressing areas, salons, and interiors",
        "Durable build with premium mirror clarity",
        "After-sales support and installation guidance"
      ],
      productType: [
        {
          name: "LED Vanity Mirrors",
          image: [Mirror],
          description: `Available in backlit, front-lit, and edge-lit designs with touch sensor controls, 
          dimmable lights, and adjustable color temperature.`
        },
        {
          name: "Smart Mirrors",
          image: [Mirror2],
          description: `Integrated with digital clock, weather updates, and Bluetooth speakers. 
        Perfect for smart bathrooms, luxury homes, and hotel washrooms.`
        },
        {
          name: "Customized Designer Mirrors",
          image: [Mirror3],
          description: `Customizable in shapes like Round, Oval, Rectangular, Abstract with frame options 
        in wood, metal, or frameless styles. Tailored to your space and theme.`
        },
        {
          name: "Makeup & Salon Mirrors",
          image: [Mirror4],
          description: `High-lumen lighting for perfect visibility, with anti-fog and high-clarity 
          features ideal for pr`
        }]
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
          {Array.isArray(product?.productType) && product.productType.length > 0 ? (
            product.productType.map((subProduct, index) => (
              <Card key={index} className="flex items-start space-x-4 p-4">
                {/* Image on the left */}
                {subProduct?.image?.[0] && (
                  <img
                    src={subProduct.image[0]}
                    alt={`Sub Product ${index + 1}`}
                    className="w-40 h-40 object-cover rounded-lg shadow-md border"
                  />
                )}

                <div className="flex flex-col">
                  {/* Heading */}
                  {subProduct?.name && (
                    <h3 className="text-lg font-semibold mb-2">{subProduct.name}</h3>
                  )}

                  {/* Description */}
                  {subProduct?.description?.split("\n").map((line, i) => {
                    const trimmed = line.trim();
                    if (!trimmed) return null; // skip empty lines
                    if (trimmed.startsWith("-")) {
                      // Bullet points
                      return (
                        <ul
                          key={i}
                          className="list-disc list-inside text-sm text-gray-700"
                        >
                          <li>{trimmed.replace("-", "").trim()}</li>
                        </ul>
                      );
                    }
                    // Detect and render clickable links
                    if (trimmed.startsWith("👉") || trimmed.startsWith("http")) {
                      const urlMatch = trimmed.match(
                        /(https?:\/\/[^\s]+)/
                      );
                      if (urlMatch) {
                        return (
                          <a
                            key={i}
                            href={urlMatch[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline text-sm mb-1"
                          >
                            {trimmed}
                          </a>
                        );
                      }
                    }
                    // Normal paragraph
                    return (
                      <p key={i} className="text-sm text-gray-700 mb-1">
                        {trimmed}
                      </p>
                    );
                  })}
                </div>
              </Card>
            ))
          ) : (
            <p className="text-gray-500">No sub-products available.</p>
          )}
        </div>


      </div>


    </div>

  );

};

export default ProductDetail;
