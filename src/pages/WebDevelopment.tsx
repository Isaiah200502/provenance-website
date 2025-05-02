
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import CallToAction from "@/components/ui/CallToAction";
import SectionTabs from "@/components/ui/SectionTabs";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Monitor, Code, Database, Smartphone, PenTool, LineChart } from "lucide-react";

const WebDevelopment = () => {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Professional Web Development Services</h3>
            <p className="text-gray-300 mb-4">
              Get a professional website and learn essential web development skills with our comprehensive services. Whether you need a business website, e-commerce platform, portfolio site, or want to develop your own web development abilities, our team can help you succeed.
            </p>
            <p className="text-gray-300">
              We combine technical expertise with a coaching approach, helping you understand the development process and empowering you to manage your digital presence independently.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Web Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-rich-gray p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Monitor className="text-gold" size={28} />
                </div>
                <h4 className="text-xl font-medium mb-3">Website Development</h4>
                <p className="text-gray-400">Custom-built websites that reflect your brand and meet your specific business needs.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Code className="text-gold" size={28} />
                </div>
                <h4 className="text-xl font-medium mb-3">Web App Development</h4>
                <p className="text-gray-400">Interactive web applications with advanced functionality for your business operations.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Database className="text-gold" size={28} />
                </div>
                <h4 className="text-xl font-medium mb-3">E-commerce Solutions</h4>
                <p className="text-gray-400">Online stores with secure payment processing and inventory management systems.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="text-gold" size={28} />
                </div>
                <h4 className="text-xl font-medium mb-3">Responsive Design</h4>
                <p className="text-gray-400">Mobile-friendly websites that provide an optimal experience across all devices.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <PenTool className="text-gold" size={28} />
                </div>
                <h4 className="text-xl font-medium mb-3">UI/UX Design</h4>
                <p className="text-gray-400">User-centered design that enhances usability and visual appeal.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <LineChart className="text-gold" size={28} />
                </div>
                <h4 className="text-xl font-medium mb-3">SEO Optimization</h4>
                <p className="text-gray-400">Search engine optimization to improve visibility and drive organic traffic.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "learning",
      label: "Learning Programs",
      content: (
        <div className="space-y-8">
          <p className="text-gray-300 mb-6">
            Our web development learning programs combine technical instruction with personal coaching to help you build valuable skills at your own pace. Whether you're a complete beginner or looking to enhance existing skills, we have a program for you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-rich-gray rounded-lg overflow-hidden">
              <div className="p-6 bg-rich-black">
                <h3 className="text-xl font-bold mb-1">Foundations</h3>
                <p className="text-gold">For Beginners</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>HTML, CSS fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Basic JavaScript concepts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Responsive design principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Building your first website</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>8 week program with mentoring</span>
                  </li>
                </ul>
                <CallToAction text="Start Learning" href="/contact" variant="outline" className="w-full" />
              </div>
            </div>
            
            <div className="bg-rich-gray rounded-lg overflow-hidden">
              <div className="p-6 bg-rich-black">
                <h3 className="text-xl font-bold mb-1">Intermediate</h3>
                <p className="text-gold">For Those With Basics</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Advanced JavaScript & ES6</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Front-end frameworks (React)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>API integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Git & collaboration workflows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>12 week program with projects</span>
                  </li>
                </ul>
                <CallToAction text="Start Learning" href="/contact" variant="outline" className="w-full" />
              </div>
            </div>
            
            <div className="bg-rich-gray rounded-lg overflow-hidden">
              <div className="p-6 bg-rich-black">
                <h3 className="text-xl font-bold mb-1">Advanced</h3>
                <p className="text-gold">For Experienced Developers</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Full-stack development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Node.js & server-side JavaScript</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Database design & management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>Authentication & security</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>16 week intensive with mentoring</span>
                  </li>
                </ul>
                <CallToAction text="Start Learning" href="/contact" variant="outline" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "portfolio",
      label: "Portfolio",
      content: (
        <div>
          <p className="text-gray-300 mb-6">
            Explore some of our recent web development projects. Each site is custom-designed to meet the specific goals and brand identity of our clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg bg-rich-gray aspect-video">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Wellness Center Website</h3>
                <p className="text-sm text-gray-400">Modern site with booking system</p>
              </div>
              <div className="absolute inset-0 bg-rich-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CallToAction text="View Project" href="#" variant="outline" />
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-rich-gray aspect-video">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">E-commerce Platform</h3>
                <p className="text-sm text-gray-400">Full-featured online store</p>
              </div>
              <div className="absolute inset-0 bg-rich-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CallToAction text="View Project" href="#" variant="outline" />
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-rich-gray aspect-video">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Professional Portfolio</h3>
                <p className="text-sm text-gray-400">Artist showcase website</p>
              </div>
              <div className="absolute inset-0 bg-rich-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CallToAction text="View Project" href="#" variant="outline" />
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-rich-gray aspect-video">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Nonprofit Organization</h3>
                <p className="text-sm text-gray-400">Donation platform and resources</p>
              </div>
              <div className="absolute inset-0 bg-rich-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CallToAction text="View Project" href="#" variant="outline" />
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-rich-gray aspect-video">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Restaurant Website</h3>
                <p className="text-sm text-gray-400">With online ordering system</p>
              </div>
              <div className="absolute inset-0 bg-rich-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CallToAction text="View Project" href="#" variant="outline" />
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-rich-gray aspect-video">
              <div className="h-48 bg-gray-800"></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Educational Platform</h3>
                <p className="text-sm text-gray-400">LMS with course management</p>
              </div>
              <div className="absolute inset-0 bg-rich-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CallToAction text="View Project" href="#" variant="outline" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "testimonials",
      label: "Testimonials",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard 
            quote="Not only did they build me a beautiful website, but they taught me how to update it myself. This knowledge has been invaluable for my small business."
            author="Jennifer Lee"
            role="Boutique Owner"
          />
          
          <TestimonialCard 
            quote="The web development course completely changed my career trajectory. Within 6 months, I was able to start freelancing and building sites for clients."
            author="Carlos Rodriguez"
            role="Freelance Developer"
          />
          
          <TestimonialCard 
            quote="Our e-commerce platform increased sales by 45% in the first quarter after launch. The design is beautiful and our customers love the shopping experience."
            author="Michelle Thompson"
            role="CEO, Fashion Brand"
          />
          
          <TestimonialCard 
            quote="I had tried learning coding through other platforms but always got stuck. The personalized coaching approach made all the difference in my learning journey."
            author="Thomas Wilson"
            role="Former Marketing Manager, Now Developer"
          />
        </div>
      ),
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-rich-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/80 to-rich-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <PageHeader
            title="Web Development"
            subtitle="Get a professional website and learn web development skills."
          />
          <div className="flex justify-center mt-8 gap-4 flex-wrap">
            <CallToAction text="Get a Website" href="/contact" />
            <CallToAction text="Start Learning" href="#learning" variant="outline" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="learning" className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <SectionTabs tabs={tabs} />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-rich-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-rich-black font-bold text-xl mb-4 mx-auto">
                1
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Discovery</h3>
                <p className="text-gray-400">Understanding your goals, audience, and requirements.</p>
              </div>
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gold/30"></div>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-rich-black font-bold text-xl mb-4 mx-auto">
                2
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-gray-400">Creating wireframes and visual designs that align with your brand.</p>
              </div>
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gold/30"></div>
            </div>
            
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-rich-black font-bold text-xl mb-4 mx-auto">
                3
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-gray-400">Building your site with clean, efficient, and scalable code.</p>
              </div>
              <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gold/30"></div>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-rich-black font-bold text-xl mb-4 mx-auto">
                4
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
                <p className="text-gray-400">Deploying your site and providing ongoing maintenance and updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you need a professional website or want to learn valuable web development skills, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CallToAction text="Get a Quote" href="/contact" />
            <CallToAction text="Learn More About Courses" href="/contact" variant="outline" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebDevelopment;
