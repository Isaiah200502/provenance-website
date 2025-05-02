
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll be in touch shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <PageHeader
            title="Contact Us"
            subtitle="Reach out to our team for inquiries, consultations, or to schedule a session."
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Fill out the form below and one of our team members will contact you promptly. We're here to answer your questions and help you take the next step in your journey.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gold/20 rounded bg-rich-gray text-white focus:border-gold focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gold/20 rounded bg-rich-gray text-white focus:border-gold focus:outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border border-gold/20 rounded bg-rich-gray text-white focus:border-gold focus:outline-none"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gold/20 rounded bg-rich-gray text-white focus:border-gold focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="life-coaching">Life Coaching</option>
                    <option value="therapy">Therapy Sessions</option>
                    <option value="web-development">Web Development</option>
                    <option value="digital-skills">Digital Skills Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gold/20 rounded bg-rich-gray text-white focus:border-gold focus:outline-none"
                    placeholder="Tell us about your needs or questions..."
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-button w-full md:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="w-12 h-12 rounded-md bg-gold/10 flex items-center justify-center mr-4">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Address</h3>
                    <address className="not-italic text-gray-300">
                      123 Coaching Street<br />
                      New York, NY 10001<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-md bg-gold/10 flex items-center justify-center mr-4">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <p className="text-gray-300">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-md bg-gold/10 flex items-center justify-center mr-4">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <p className="text-gray-300">info@provenancecoaching.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 rounded-md bg-gold/10 flex items-center justify-center mr-4">
                    <Clock className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-300">Saturday: 10am - 2pm</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-rich-gray rounded-lg border border-gold/10">
                <h3 className="text-lg font-semibold mb-3">Book a Free Consultation</h3>
                <p className="text-gray-300 mb-4">
                  Not sure which service is right for you? Schedule a free 15-minute consultation to discuss your needs and goals.
                </p>
                <Button className="gold-button">
                  Schedule Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-rich-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="w-full h-96 bg-rich-black rounded-lg"></div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
