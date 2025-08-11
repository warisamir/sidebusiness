
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
const StoreLocator = () => {
  const locations = [
    {
      name: "Main Store",
      address: "Jagmal Chowk, nearby Yamaha Showroom, Dayalband Main Road, Bilaspur, Chhattisgarh 495001",
      phone: ['+91 9755853857', '9981190855', '9826127586'],
      hours: "Monday - Saturday: 8:00 AM - 8:00 PM",
      extradays: "Sunday: 8:00 AM - 2:00 PM ",
      type: "Main Store & Office",
      description: "Our flagship store with the complete range of building materials and expert consultation."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 hover:bg-orange-600 mb-6 text-sm px-4 py-2">
              Visit Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Vishesh Build Mart <span className="text-orange-500">Near You</span>
            </h1>
            <p className="text-xl text-gray-300">
              Looking for quality building materials? Visit any of our locations to explore our extensive range of products and get expert advice from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our stores for personalized service and to see our quality materials firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols gap-8 max-w-6xl mx-auto">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold">{location.name}</h3>
                      <Badge className="bg-orange-100 text-orange-700">{location.type}</Badge>
                    </div>
                    <p className="text-gray-600">{location.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-gray-700">{location.address}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <div className="text-gray-700 space-y-1">
                          {location.phone.map((num: string, idx: number) => (
                            <span key={idx}>{num}{idx < location.phone.length - 1 && ', '} </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Business Hours</p>
                          <p className="text-gray-700">{location.hours}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Extra Hours</p>
                          <p className="text-gray-700">{location.extradays}</p>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href={`tel:${location.phone[0]}`}
                        className="flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </a>
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
            <div className="mt-16">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Find Us on Map</h3>

                <div className="bg-gray-200 rounded-lg h-96 overflow-hidden">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      "Jagmal Chowk, nearby Yamaha Showroom, Dayalband Main Road, Bilaspur, Chhattisgarh 495001"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/assets/location/storelocation.png"
                      alt="Company Location"
                      className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
                    />
                  </a>
                </div>
                </CardContent>
              </Card>
            </div>

          {/* Contact Info */}
          <div className="mt-16">
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help Finding Us?</h3>
                <p className="text-gray-700 mb-6">
                  Our team is here to help guide you to the right location for your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+91 9755853857" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                    Call for Directions
                  </a>
                  <a
                    href="mailto:cavishalajmani@visheshbuildmart.com,cavishalajmani@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    Email Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoreLocator;
