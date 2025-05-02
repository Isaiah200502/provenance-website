
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import CallToAction from "@/components/ui/CallToAction";
import SectionTabs from "@/components/ui/SectionTabs";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { BarChart, PieChart, MessageSquare, Briefcase, Cpu, FileText } from "lucide-react";

const DigitalSkills = () => {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Digital Skills for the Modern Workforce</h3>
            <p className="text-gray-300 mb-4">
              Our digital skills training programs are designed to equip you with in-demand technical skills that can transform your career prospects. Learn from industry experts in a supportive environment tailored to your learning style and career goals.
            </p>
            <p className="text-gray-300">
              We offer training in data analysis, digital marketing, artificial intelligence, content writing, ghostwriting, and more. Our approach combines technical instruction with career coaching to help you not just learn new skills, but apply them effectively in the workplace.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Training Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-rich-gray p-6 rounded-lg text-center">
                <h4 className="text-xl font-medium mb-3">Personalized Learning</h4>
                <p className="text-gray-400">Customized training paths based on your current skills, learning style, and career goals.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg text-center">
                <h4 className="text-xl font-medium mb-3">Hands-On Projects</h4>
                <p className="text-gray-400">Real-world projects that build your portfolio and demonstrate your abilities to employers.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg text-center">
                <h4 className="text-xl font-medium mb-3">Career Support</h4>
                <p className="text-gray-400">Resume building, interview preparation, and job search strategies to help you land opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "courses",
      label: "Courses",
      content: (
        <div className="space-y-12">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-md bg-gold/10 flex items-center justify-center mr-4">
                <BarChart className="text-gold" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Data Analysis</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Learn to extract insights from data using tools like Excel, SQL, Python, and visualization software. Our data analysis courses range from beginner to advanced levels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">Excel & SQL Fundamentals</h4>
                <p className="text-sm text-gray-400">8 weeks • Beginner Friendly</p>
              </div>
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">Python for Data Analysis</h4>
                <p className="text-sm text-gray-400">10 weeks • Intermediate</p>
              </div>
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">Advanced Analytics & Visualization</h4>
                <p className="text-sm text-gray-400">12 weeks • Advanced</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-md bg-gold/10 flex items-center justify-center mr-4">
                <PieChart className="text-gold" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Digital Marketing</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Master the strategies and tools for effective online marketing, including social media, SEO, content marketing, and paid advertising.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">Digital Marketing Foundations</h4>
                <p className="text-sm text-gray-400">6 weeks • Beginner Friendly</p>
              </div>
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">Social Media Strategy & Analytics</h4>
                <p className="text-sm text-gray-400">8 weeks • Intermediate</p>
              </div>
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">SEO & Content Marketing Mastery</h4>
                <p className="text-sm text-gray-400">10 weeks • Intermediate/Advanced</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-md bg-gold/10 flex items-center justify-center mr-4">
                <Cpu className="text-gold" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Artificial Intelligence</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Understand the fundamentals of AI and learn to leverage machine learning tools and AI applications for business and creative purposes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">AI Fundamentals for Business</h4>
                <p className="text-sm text-gray-400">6 weeks • No coding required</p>
              </div>
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">Practical Machine Learning</h4>
                <p className="text-sm text-gray-400">12 weeks • Programming background required</p>
              </div>
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">AI Tools for Productivity & Creativity</h4>
                <p className="text-sm text-gray-400">8 weeks • Beginner Friendly</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-md bg-gold/10 flex items-center justify-center mr-4">
                <FileText className="text-gold" size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Content Writing & Ghostwriting</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Develop your writing skills for various formats and audiences, from blog posts and articles to books and speeches.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">Professional Content Writing</h4>
                <p className="text-sm text-gray-400">8 weeks • All levels</p>
              </div>
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">SEO Writing & Web Content</h4>
                <p className="text-sm text-gray-400">6 weeks • Beginner to Intermediate</p>
              </div>
              <div className="bg-rich-black p-4 rounded border border-gold/10">
                <h4 className="font-semibold mb-2">Ghostwriting Books & Thought Leadership</h4>
                <p className="text-sm text-gray-400">10 weeks • Intermediate to Advanced</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <CallToAction 
              text="Get Matched with a Course" 
              href="/contact"
              className="mx-auto"
            />
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
            quote="The data analysis course completely transformed my career. Within three months of completion, I landed a job as a junior data analyst with a 40% salary increase."
            author="Alex Morgan"
            role="Data Analyst"
          />
          
          <TestimonialCard 
            quote="As a small business owner, the digital marketing training gave me the skills to manage my own online presence. I've reduced my marketing costs while increasing my reach."
            author="Sophia Chen"
            role="Boutique Owner"
          />
          
          <TestimonialCard 
            quote="The AI fundamentals course demystified machine learning for me. Now I can confidently implement AI solutions in my role as a project manager."
            author="Rajiv Patel"
            role="IT Project Manager"
          />
          
          <TestimonialCard 
            quote="Within weeks of completing the content writing course, I secured my first freelance client. Six months later, I'm booked solid with writing projects."
            author="Emma Washington"
            role="Freelance Writer"
          />
        </div>
      ),
    },
    {
      id: "matching",
      label: "Skill Matching",
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Find Your Perfect Training Match</h3>
            <p className="text-gray-300 mb-4">
              Our skill matching process helps you identify which digital skills align best with your natural abilities, interests, and career goals. Through personalized assessment and consultation, we'll recommend the most suitable training programs for your unique profile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-rich-black p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-gold" size={28} />
              </div>
              <h4 className="text-xl font-medium mb-3">1. Initial Consultation</h4>
              <p className="text-gray-400">Discuss your background, interests, and career aspirations with our skills advisor.</p>
            </div>
            
            <div className="bg-rich-black p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-gold" size={28} />
              </div>
              <h4 className="text-xl font-medium mb-3">2. Skills Assessment</h4>
              <p className="text-gray-400">Complete our comprehensive assessment to identify your strengths and learning style.</p>
            </div>
            
            <div className="bg-rich-black p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-gold" size={28} />
              </div>
              <h4 className="text-xl font-medium mb-3">3. Personalized Recommendations</h4>
              <p className="text-gray-400">Receive tailored course recommendations and a customized learning path.</p>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <CallToAction
              text="Start Your Skills Assessment"
              href="/contact"
              className="mx-auto"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-rich-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/80 to-rich-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <PageHeader
            title="Digital Skills Training"
            subtitle="Learn in-demand skills like Data Analysis, Digital Marketing, Artificial Intelligence, Content Writing, Ghostwriting. Get referred to training that matches your unique skills and interests."
          />
          <div className="flex justify-center mt-8">
            <CallToAction text="Get Matched with a Course" href="/contact" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <SectionTabs tabs={tabs} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-rich-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Training</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex">
              <div className="mr-4 text-gold">
                <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry-Relevant Curriculum</h3>
                <p className="text-gray-400">Our courses are developed in partnership with industry experts to ensure you learn skills that employers actually need.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-gold">
                <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Learning Options</h3>
                <p className="text-gray-400">Choose between live virtual classes, self-paced modules, or hybrid approaches to fit your schedule and learning style.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-gold">
                <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Coaching</h3>
                <p className="text-gray-400">Receive one-on-one guidance from experienced mentors who provide feedback on your work and help you overcome challenges.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-gold">
                <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Career-Focused Outcomes</h3>
                <p className="text-gray-400">Our programs include portfolio development and career services to help you leverage your new skills for professional advancement.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-gold">
                <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-gray-400">Join a community of like-minded learners for networking, collaboration, and ongoing support even after course completion.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 text-gold">
                <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center">
                  6
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Guaranteed Results</h3>
                <p className="text-gray-400">If you don't see improvement in your skills and confidence after completing our program, we offer a money-back guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black/80"></div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Advance Your Digital Skills?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Take the first step toward a more tech-savvy future. Let us match you with the perfect training program.
            </p>
            <CallToAction 
              text="Get Your Personalized Skill Match" 
              href="/contact"
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalSkills;
