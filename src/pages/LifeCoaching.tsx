
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import CallToAction from "@/components/ui/CallToAction";
import SectionTabs from "@/components/ui/SectionTabs";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { Check, Clock, Calendar, Users, User } from "lucide-react";

const LifeCoaching = () => {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Personalized Coaching for Real Results</h3>
            <p className="text-gray-300 mb-4">
              Our life coaching program is designed to help you achieve balance and fulfillment in all areas of your life. Through personalized one-on-one sessions, we'll help you identify your goals, overcome obstacles, and create actionable plans for success.
            </p>
            <p className="text-gray-300">
              Whether you're seeking career advancement, relationship improvement, personal growth, or work-life balance, our coaches provide the guidance, accountability, and support you need to thrive.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Coaching Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-rich-black p-6 rounded-lg border border-gold/10">
                <h4 className="text-xl font-medium mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                    <Check size={16} className="text-gold" />
                  </span>
                  Assessment
                </h4>
                <p className="text-gray-400">Comprehensive evaluation of your current situation, strengths, and areas for improvement.</p>
              </div>
              
              <div className="bg-rich-black p-6 rounded-lg border border-gold/10">
                <h4 className="text-xl font-medium mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                    <Check size={16} className="text-gold" />
                  </span>
                  Goal Setting
                </h4>
                <p className="text-gray-400">Clear, achievable goals that align with your values and long-term vision.</p>
              </div>
              
              <div className="bg-rich-black p-6 rounded-lg border border-gold/10">
                <h4 className="text-xl font-medium mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                    <Check size={16} className="text-gold" />
                  </span>
                  Strategy Development
                </h4>
                <p className="text-gray-400">Custom action plans with practical steps to reach your desired outcomes.</p>
              </div>
              
              <div className="bg-rich-black p-6 rounded-lg border border-gold/10">
                <h4 className="text-xl font-medium mb-3 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mr-3">
                    <Check size={16} className="text-gold" />
                  </span>
                  Ongoing Support
                </h4>
                <p className="text-gray-400">Regular check-ins, accountability measures, and adjustments as needed.</p>
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
            quote="My life coach helped me restructure my priorities and create boundaries that have dramatically improved my work-life balance."
            author="Rebecca Taylor"
            role="Executive Director"
          />
          
          <TestimonialCard 
            quote="After feeling stuck for years, coaching gave me the clarity and confidence to make a career change that aligned with my true passions."
            author="James Wilson"
            role="Former Accountant, Now Life Coach"
          />
          
          <TestimonialCard 
            quote="The tools I learned through coaching helped me improve my communication skills and transform my relationships both professionally and personally."
            author="Elena Rodriguez"
            role="HR Manager"
          />
          
          <TestimonialCard 
            quote="Working with a life coach gave me the accountability I needed to finally achieve goals I'd been putting off for years."
            author="David Kim"
            role="Small Business Owner"
          />
        </div>
      ),
    },
    {
      id: "pricing",
      label: "Pricing",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-rich-black border border-gold/20 rounded-lg overflow-hidden">
            <div className="bg-rich-gray p-6 text-center">
              <h3 className="text-xl font-bold">Basic Package</h3>
              <div className="my-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-400">/session</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start">
                <Clock size={20} className="text-gold mr-3 mt-1 shrink-0" />
                <p>60-minute one-on-one coaching session</p>
              </div>
              <div className="flex items-start">
                <User size={20} className="text-gold mr-3 mt-1 shrink-0" />
                <p>Personalized action steps</p>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-gold mr-3 mt-1 shrink-0" />
                <p>Email support between sessions</p>
              </div>
              <CallToAction text="Book Now" href="/contact" variant="outline" className="w-full mt-6" />
            </div>
          </div>
          
          <div className="bg-rich-black border-2 border-gold rounded-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-gold text-rich-black text-xs font-bold uppercase px-3 py-1">
              Popular
            </div>
            <div className="bg-rich-gray p-6 text-center">
              <h3 className="text-xl font-bold">Premium Package</h3>
              <div className="my-4">
                <span className="text-4xl font-bold">$449</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start">
                <Calendar size={20} className="text-gold mr-3 mt-1 shrink-0" />
                <p>4 coaching sessions per month</p>
              </div>
              <div className="flex items-start">
                <User size={20} className="text-gold mr-3 mt-1 shrink-0" />
                <p>Comprehensive action plan</p>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-gold mr-3 mt-1 shrink-0" />
                <p>Priority email & text support</p>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-gold mr-3 mt-1 shrink-0" />
                <p>Monthly progress review</p>
              </div>
              <CallToAction text="Book Now" href="/contact" className="w-full mt-6" />
            </div>
          </div>
          
          <div className="bg-rich-black border border-gold/20 rounded-lg overflow-hidden">
            <div className="bg-rich-gray p-6 text-center">
              <h3 className="text-xl font-bold">Elite Package</h3>
              <div className="my-4">
                <span className="text-4xl font-bold">$1299</span>
                <span className="text-gray-400">/quarter</span>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start">
                <Calendar size={20} className="text-gold mr-3 mt-1 shrink-0" />
                <p>12 coaching sessions (1 per week)</p>
              </div>
              <div className="flex items-start">
                <Users size={20} className="text-gold mr-3 mt-1 shrink-0" />
                <p>2 group mastermind sessions</p>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-gold mr-3 mt-1 shrink-0" />
                <p>24/7 VIP access to coach</p>
              </div>
              <div className="flex items-start">
                <Check size={20} className="text-gold mr-3 mt-1 shrink-0" />
                <p>Quarterly intensive planning day</p>
              </div>
              <CallToAction text="Book Now" href="/contact" variant="outline" className="w-full mt-6" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-rich-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/80 to-rich-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <PageHeader
            title="Life Coaching"
            subtitle="Achieve balance in all areas of life with our one-on-one coaching sessions."
          />
          <div className="flex justify-center mt-8">
            <CallToAction text="Schedule a Session" href="/contact" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <SectionTabs tabs={tabs} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-rich-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Our coaches are ready to help you overcome challenges and achieve your goals. Take the first step today.
          </p>
          <CallToAction text="Schedule Your Free Consultation" href="/contact" />
        </div>
      </section>
    </Layout>
  );
};

export default LifeCoaching;
