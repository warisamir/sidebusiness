
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Home, MapPin } from 'lucide-react';

const Projects = () => {
  const residentialProjects = [
    {
      name: "Modern Villa in Bilaspur",
      description: "Luxurious 4-bedroom villa featuring premium materials from UltraTech cement to Grohe faucets.",
      location: "Bilaspur, Chhattisgarh",
      materials: ["UltraTech Cement", "TATA Steel", "Grohe Sanitaryware", "Supreme Water Tanks"]
    },
    {
      name: "Apartment Complex in Raipur",
      description: "120-unit residential complex built with high-quality materials ensuring durability and comfort.",
      location: "Raipur, Chhattisgarh",
      materials: ["APL Apollo TMT", "Kamdhenu Steel", "Jaquar Faucets", "Sintex Water Solutions"]
    },
    {
      name: "Heritage Home Restoration",
      description: "Complete restoration of a traditional home using modern materials while preserving classic architecture.",
      location: "Bilaspur, Chhattisgarh",
      materials: ["UltraTech Specialty Cement", "Traditional & Modern Tiles", "Hindware Sanitaryware"]
    }
  ];

  const commercialProjects = [
    {
      name: "High-Rise Office Building",
      description: "15-story commercial building with state-of-the-art infrastructure and premium finishes.",
      location: "Bilaspur Business District",
      materials: ["TATA Steel Structures", "UltraTech High-Performance Cement", "American Standard Fixtures"]
    },
    {
      name: "Shopping Mall Construction",
      description: "Multi-level shopping complex with modern amenities and sustainable building practices.",
      location: "Raipur Commercial Zone",
      materials: ["Apollo Steel Framework", "Everest AC Sheets", "Multiple Premium Brands"]
    },
    {
      name: "Industrial Warehouse Complex",
      description: "Large-scale warehouse facility designed for optimal storage and logistics operations.",
      location: "Industrial Area, Bilaspur",
      materials: ["Heavy-duty Steel Structures", "Industrial Grade Cement", "Specialized Roofing Solutions"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 hover:bg-orange-600 mb-6 text-sm px-4 py-2">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Work <span className="text-orange-500">Speaks for Itself</span>
            </h1>
            <p className="text-xl text-gray-300">
              We are proud to have contributed to several iconic projects. Take a look at some of the projects where Vishesh Build Mart materials made the difference.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Home className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Residential Projects</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating dream homes with quality materials and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {residentialProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-600">Materials Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">Commercial Projects</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the infrastructure that powers business and commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {commercialProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-orange-600">Materials Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.materials.map((material, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {material}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let Vishesh Build Mart supply the quality materials for your dream project. 
            Join the hundreds of satisfied customers who have trusted us with their construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-500 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Get Project Quote
            </a>
            <a href="/products" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-500 transition-colors font-semibold">
              Browse Materials
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
