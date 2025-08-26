
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const generalFAQs = [
    {
      question: "Do you deliver products outside Bilaspur?",
      answer: "Yes, we offer delivery services to nearby locations. Contact us for details on delivery areas and charges."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, and online bank transfers for your convenience."
    },
    {
      question: "What are your business hours?",
      answer: "We are open Monday to Saturday from 9:00 AM to 7:00 PM. We're closed on Sundays and public holidays."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we provide attractive discounts for bulk purchases. Contact our sales team for customized pricing."
    }
  ];

  const productFAQs = [
    {
      question: "Can you assist with selecting the right materials?",
      answer: "Absolutely! Our experts are here to guide you in choosing the best materials for your project based on your requirements and budget."
    },
    {
      question: "Do your products come with warranties?",
      answer: "Yes, warranties are provided for specific products. The details are available in our brochure or upon request."
    },
    {
      question: "How do I know if a product is in stock?",
      answer: "You can call us directly or visit our store. We maintain real-time inventory for most of our products."
    },
    {
      question: "Do you provide installation services?",
      answer: "While we don't provide direct installation, we can recommend trusted contractors and professionals for your project."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 hover:bg-orange-600 mb-6 text-sm px-4 py-2">
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Got Questions? <div className="text-orange-500">We've Got Answers!</div>
            </h1>
            <p className="text-xl text-gray-300">
              Here are answers to some of the most common queries about Vishesh Build Mart
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* General FAQ */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <HelpCircle className="h-8 w-8 text-orange-500 mr-3" />
                  <h2 className="text-3xl font-bold">General Questions</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {generalFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`general-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Product FAQ */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-8 w-8 text-orange-500 mr-3" />
                  <h2 className="text-3xl font-bold">Product Questions</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                  {productFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`product-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <div className="mt-16 text-center">
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-gray-700 mb-6">
                    Can't find what you're looking for? Our team is here to help you with any questions or concerns.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+91XXXXXXXXX" className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                      Call Us Now
                    </a>
                    <a href="mailto:info@visheshbuildmart.com" className="inline-flex items-center justify-center px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
                      Email Us
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
