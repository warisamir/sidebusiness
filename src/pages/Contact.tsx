
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Building } from 'lucide-react';
import StoreLocation from '@/assets/location/storelocation.png';
import storeLocation from '@/assets/location/storelocation.png';
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our experts for all your building material needs. 
            We're here to help you make the right choices for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9755853857</p>
                    <p className='text-gray-600'>+91 9981190855</p>
                    <p className="text-gray-600">+91 9826127586</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">Visheshajmani2@gmail.com</p>
                    <p className="text-gray-600">cavishalajmani@visheshbuildmart.com</p>
                    <p className='text-grey-600'>cavishalajmani@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-gray-600">
                      Jagmal Chowk, nearby Yamaha Showroom,<br/> 
                      Dayalband Main Road,<br/> 
                      Bilaspur, Chhattisgarh 495001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday 8:00 am- 2:00 pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Building className="h-8 w-8 text-orange-500" />
                    <div>
                      <h3 className="font-semibold text-lg">For Bulk Orders</h3>
                      <p className="text-gray-600">Contact our sales team for special pricing and delivery options</p>
                      <Button className="mt-2 bg-orange-500 hover:bg-orange-600">
                        Call Sales Team
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="Enter your email" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="What is this regarding?" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements, questions, or how we can help you..."
                  rows={6}
                />
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
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
                    src={storeLocation}
                    alt="Company Location"
                    className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
                  />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
