
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Architect Rahul Sharma",
      role: "Architect",
      content: "Vishesh Build Mart has been my trusted supplier for over a decade. Their products and services are unparalleled!",
      rating: 5
    },
    {
      name: "Contractor Suresh Patel",
      role: "Contractor",
      content: "Amazing range of materials and excellent customer support. Highly recommended!",
      rating: 5
    },
    {
      name: "Priya Verma",
      role: "Homeowner",
      content: "The quality of building materials is always top-notch. I'm impressed every time!",
      rating: 5
    },
    {
      name: "Vikash Kumar",
      role: "Civil Engineer",
      content: "Their expertise in building materials is evident in every interaction. Professional and reliable service.",
      rating: 5
    },
    {
      name: "Anita Singh",
      role: "Interior Designer",
      content: "From tiles to sanitaryware, everything I need is available under one roof. Great quality and competitive prices.",
      rating: 5
    },
    {
      name: "Rajesh Gupta",
      role: "Builder",
      content: "30+ years of trust speaks volumes. Vishesh Build Mart never disappoints with their material quality and timely delivery.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? 'fill-orange-500 text-orange-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 hover:bg-orange-600 mb-6 text-sm px-4 py-2">
              Customer Reviews
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              What Our <span className="text-orange-500">Customers Say</span>
            </h1>
            <p className="text-xl text-gray-300">
              Here's what our clients, contractors, and partners have to say about Vishesh Build Mart
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="h-8 w-8 text-orange-500" />
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-20">
            <Card className="bg-orange-500 text-white">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-4xl font-bold mb-2">100,000+</h3>
                    <p className="text-orange-100">Satisfied Customers</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold mb-2">30+</h3>
                    <p className="text-orange-100">Years of Excellence</p>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold mb-2">500+</h3>
                    <p className="text-orange-100">Projects Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Join Our Happy Customers</h3>
                <p className="text-gray-700 mb-6">
                  Experience the quality and service that has made us a trusted name for over three decades.
                </p>
                <a href="/quote" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Get Your Quote Today
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
