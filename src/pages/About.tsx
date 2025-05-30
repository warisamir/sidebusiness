
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Target, Users, Building } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Building className="h-8 w-8 text-orange-500" />,
      title: "ISO 9001:2015 Certified",
      description: "Quality Management System certification ensuring highest standards."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "100,000+ Satisfied Customers",
      description: "Served across residential, commercial, and industrial projects."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "30+ Years Excellence",
      description: "Consistently recognized as a trusted name in building materials."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Landmark Projects",
      description: "Contributed to iconic construction projects in Bilaspur and beyond."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 hover:bg-orange-600 mb-6 text-sm px-4 py-2">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-orange-500">Vishesh Build Mart</span>
            </h1>
            <p className="text-xl text-gray-300">
              Three decades of trust, quality, and innovation in building materials
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                At Vishesh Build Mart, we bring together expertise, quality, and reliability to serve as your 
                trusted partner for all building material needs. Established in 1990 by <strong>Mr. Pawan Ajmani</strong>, 
                our journey began with just two products – cement and steel. Over the years, we have grown into a 
                full-fledged building materials powerhouse.
              </p>
              
              <p className="text-xl leading-relaxed mb-8">
                Now under the leadership of his sons, <strong>Mr. Vishesh Ajmani</strong> and <strong>CA Vishal Ajmani</strong>, 
                Vishesh Build Mart continues to uphold its founding principles of integrity and quality, while embracing 
                innovation to meet the evolving demands of modern construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide top-quality building materials, ensuring every project – big or small – 
                  is built on a foundation of excellence. We strive to be the cornerstone of every 
                  construction dream, delivering reliability and quality that stands the test of time.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-orange-500 mr-3" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To remain the first choice for builders, architects, and homeowners, setting the 
                  standard for quality and service in the industry. We envision a future where every 
                  construction project benefits from our expertise and premium materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Certifications & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and excellence is backed by industry-recognized 
              certifications and significant milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-orange-600">Additional Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-2">Industry Partnerships</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Certified partnerships with UltraTech, TATA, Grohe</li>
                      <li>• Member of Building Materials Association</li>
                      <li>• Authorized dealer for premium brands</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Assurance</h4>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Rigorous quality control processes</li>
                      <li>• Regular supplier audits and certifications</li>
                      <li>• Customer satisfaction guarantee</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Three generations of dedication to quality and customer satisfaction
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Mr. Pawan Ajmani</h3>
                <p className="text-orange-200 mb-3">Founder (1990)</p>
                <p className="text-sm">Visionary founder who started with cement and steel, building the foundation of trust and quality.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Mr. Vishesh Ajmani</h3>
                <p className="text-orange-200 mb-3">Current Leadership</p>
                <p className="text-sm">Leading innovation and expansion while maintaining the family tradition of excellence.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">CA Vishal Ajmani</h3>
                <p className="text-orange-200 mb-3">Current Leadership</p>
                <p className="text-sm">Bringing financial expertise and strategic vision to drive sustainable growth.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
