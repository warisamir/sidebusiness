
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Award, Building, Star, MapPin } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import cementLogo from "../../public/assets/Cement/CoverImagf.png";
import tata from '../../public/assets/logos/tata.jpg';
import aplapollo from '../../public/assets/logos/Aplapollo.jpg';
import kamdhenu from '../../public/assets/logos/kamdhenu.jpg';
import grohe from '../../public/assets/logos/download.png';
import AmericanStandard from '../../public/assets/logos/American standard.png';
import jaguar from '../../public/assets/logos/jaguar.webp';
import supreme from '../../public/assets/logos/supreme.png';
import sintex from '../../public/assets/logos/sintex.jpg';
import birla from '../../public/assets/logos/birla.jpg';
const Home = () => {
  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "30+ Years of Excellence",
      description: "Trusted brand with over three decades of experience in the building materials industry."
    },
    {
      icon: <Star className="h-8 w-8 text-orange-500" />,
      title: "Premium Quality",
      description: "Top-notch building materials from leading brands, ensuring quality in every project."
    },
    {
      icon: <Building className="h-8 w-8 text-orange-500" />,
      title: "Comprehensive Range",
      description: "Complete range of building materials for all your construction needs under one roof."
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-500" />,
      title: "Customer Satisfaction",
      description: "Strong commitment to quality and customer satisfaction with personalized service."
    }
  ];

  const featuredBrands = [
    { name: "UltraTech", slug: "ultratech" },
    { name: "TATA", slug: "tata" },
    { name: "APL Apollo", slug: "apl-apollo" },
    { name: "Kamdhenu", slug: "kamdhenu" },
    { name: "Grohe", slug: "grohe" },
    { name: "American Standard", slug: "american-standard" },
    { name: "Jaquar", slug: "jaquar" },
    { name: "Supreme", slug: "supreme" },
    { name: "Sintex", slug: "sintex" },
    { name: "Birla Opus", slug: "birla-opus" }
  ];
  const brandLogos = [
    { name: "UltraTech",img: cementLogo, slug: "ultratech" },
    { name: "TATA", img:tata, slug: "tata" },
    { name: "APL Apollo", img: aplapollo, slug: "apl-apollo" },
    { name: "Kamdhenu", img: kamdhenu, slug: "kamdhenu" },
    { name: "Grohe", img: grohe, slug: "grohe" },
    { name: "American Standard", img: AmericanStandard, slug: "american-standard" },
    { name: "Jaquar", img: jaguar, slug: "jaquar" },
    { name: "Supreme", img: supreme, slug: "supreme" },
    { name: "Sintex", img: sintex, slug: "sintex" },
    { name: "Birla Opus", img: birla, slug: "birla-opus" }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 hover:bg-orange-600 mb-6 text-sm px-4 py-2">
              Since 1990 • Trusted by Thousands
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-orange-500">Vishesh Build Mart</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Your one-stop solution for premium building materials
            </p>
            <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto">
              Founded by Mr. Pawan Ajmani, we've grown from humble beginnings with cement and steel
              to offering an extensive range of high-quality building materials. With decades of trust,
              experience, and innovation, Vishesh Build Mart is now helmed by his dynamic sons,
              Mr. Vishesh Ajmani and CA Vishal Ajmani.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                <Link to="/store-locator">Find Store</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes Vishesh Build Mart the preferred choice for builders,
              architects, and homeowners across the region.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/*featureed logo*/}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            Brands We Deal In
          </h2>

          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll gap-16">
              {/* Repeat the logos twice for smooth infinite loop */}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-16">
                  {brandLogos.map((brand, idx) => (
                    <a
                      key={`${brand.name}-${i}-${idx}`}
                      href={`/brands/${brand.slug}`}
                      className="flex flex-col items-center min-w-[120px]"
                    >
                      <img
                        src={brand.img}
                        alt={brand.name}
                        className="h-16 w-auto object-contain"
                      />
                      <span className="mt-2 text-sm text-gray-700">{brand.name}</span>
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      animation: scroll 20s linear infinite;
    }
  `}</style>
      </section>



      {/* Featured Brands */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted Brand Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with industry-leading brands to bring you the finest building materials.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {featuredBrands.map((brand, index) => (
              <Link key={index} to={`/brand/${brand.slug}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer hover:border-orange-500">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-gray-800 hover:text-orange-500 transition-colors">
                      {brand.name}
                    </h4>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our comprehensive product range and start building your dream today!
            Get expert guidance and premium materials for your construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link to="/store-locator">Find Store</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
              <Link to="/quote">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
