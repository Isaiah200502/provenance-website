
import Layout from "@/components/layout/Layout";
import CallToAction from "@/components/ui/CallToAction";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { ArrowRight, Brain, Code, GraduationCap, HandHeart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-black to-rich-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/80 to-rich-black"></div>
        
        <div className="container mx-auto px-4 z-10 text-center pt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gold-gradient animate-fade-in">
            Reclaim Your Potential
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in">
            Reclaiming foundational truths, restoring identities, and empowering individuals, organizations, and communities to achieve unparalleled excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <CallToAction text="Book a Session" href="/contact" className="text-lg px-8 py-4" />
            <CallToAction 
              text="Learn More" 
              href="#services" 
              variant="outline" 
              className="text-lg px-8 py-4"
              icon={<ArrowRight size={18} />} 
            />
          </div>
          
          <Button
            variant="ghost"
            onClick={scrollToServices}
            className="text-gray-400 hover:text-white animate-fade-in absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="animate-bounce" size={24} />
          </Button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-rich-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "Empowering individuals to reclaim their agency, reframe their realities, and emerge as formidable change agents."
            </p>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-rich-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to help you grow personally and professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              title="Life Coaching"
              description="Achieve balance in all areas of life with our one-on-one coaching sessions."
              icon={<HandHeart size={24} />}
              link="/life-coaching"
              linkText="Schedule a Session"
            />
            
            <ServiceCard 
              title="Therapy Sessions"
              description="Address mental health concerns and cultivate emotional well-being."
              icon={<Brain size={24} />}
              link="/therapy"
              linkText="Find a Therapist"
            />
            
            <ServiceCard 
              title="Web Development"
              description="Get a professional website and learn web development skills."
              icon={<Code size={24} />}
              link="/web-development"
              linkText="Start Learning"
            />
            
            <ServiceCard 
              title="Digital Skills Training"
              description="Learn in-demand skills like Data Analysis, Digital Marketing, AI, and more."
              icon={<GraduationCap size={24} />}
              link="/digital-skills"
              linkText="Get Matched"
            />
          </div>

          <div className="text-center mt-12">
            <CallToAction 
              text="Contact Us" 
              href="/contact"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-rich-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Hear from those who have transformed their lives through our coaching and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Provenance Coaching helped me regain my confidence and clarity. I now have a clear path forward in both my career and personal life."
              author="Sarah Johnson"
              role="Marketing Executive"
            />
            
            <TestimonialCard 
              quote="The therapy sessions were transformative. I learned practical tools to manage my anxiety and build resilience."
              author="Michael Chang"
              role="Software Engineer"
            />
            
            <TestimonialCard 
              quote="Learning web development through their program gave me the skills to change careers. The personalized approach made all the difference."
              author="Priya Patel"
              role="Web Developer"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/80"></div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Take the first step on your journey to excellence. Schedule a consultation today.
            </p>
            <CallToAction 
              text="Book Your Free Consultation" 
              href="/contact"
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
