
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/ui/PageHeader";
import CallToAction from "@/components/ui/CallToAction";
import SectionTabs from "@/components/ui/SectionTabs";
import { CheckCircle } from "lucide-react";

const Therapy = () => {
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Mental Health & Emotional Wellbeing</h3>
            <p className="text-gray-300 mb-4">
              Our therapy services provide a safe and confidential space to address mental health concerns and cultivate emotional well-being. Our team of licensed therapists specializes in a range of evidence-based approaches to help you overcome challenges and thrive.
            </p>
            <p className="text-gray-300">
              Whether you're dealing with anxiety, depression, relationship issues, trauma, or simply seeking personal growth, our therapists will work with you to develop practical coping strategies and foster resilience.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Therapeutic Approaches</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-rich-gray p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-gold">Cognitive Behavioral Therapy</h4>
                <p className="text-gray-400">Identifying and changing negative thought patterns to improve emotional regulation and develop personal coping strategies.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-gold">Mindfulness-Based Therapy</h4>
                <p className="text-gray-400">Incorporating mindfulness practices to reduce stress, enhance focus, and promote emotional balance.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-gold">Trauma-Informed Therapy</h4>
                <p className="text-gray-400">Specialized approaches to help individuals process and recover from traumatic experiences.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-gold">Solution-Focused Brief Therapy</h4>
                <p className="text-gray-400">Goal-oriented therapy that focuses on finding solutions in the present and exploring hope for the future.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-gold">Narrative Therapy</h4>
                <p className="text-gray-400">Helping individuals identify their values and the skills associated with them to effectively address current challenges.</p>
              </div>
              
              <div className="bg-rich-gray p-6 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-gold">Couples & Family Therapy</h4>
                <p className="text-gray-400">Improving communication and resolving conflicts within relationships and family systems.</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "therapists",
      label: "Our Therapists",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-rich-gray rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dr. Emily Chen</h3>
              <p className="text-gold mb-3">Clinical Psychologist</p>
              <p className="text-gray-400 mb-4">Specializes in anxiety, depression, and trauma recovery with over 15 years of experience.</p>
              <CallToAction text="Book Appointment" href="/contact" variant="outline" className="w-full" />
            </div>
          </div>
          
          <div className="bg-rich-gray rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Dr. Marcus Johnson</h3>
              <p className="text-gold mb-3">Marriage & Family Therapist</p>
              <p className="text-gray-400 mb-4">Expert in relationship counseling, family dynamics, and communication improvement.</p>
              <CallToAction text="Book Appointment" href="/contact" variant="outline" className="w-full" />
            </div>
          </div>
          
          <div className="bg-rich-gray rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Sarah Williams, LCSW</h3>
              <p className="text-gold mb-3">Licensed Clinical Social Worker</p>
              <p className="text-gray-400 mb-4">Focuses on stress management, life transitions, and mindfulness-based approaches.</p>
              <CallToAction text="Book Appointment" href="/contact" variant="outline" className="w-full" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "faq",
      label: "FAQ",
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">How do I know if therapy is right for me?</h3>
            <p className="text-gray-300">
              Therapy can benefit anyone looking to enhance their mental well-being, gain self-awareness, or navigate life challenges. If you're experiencing persistent negative feelings, relationship difficulties, or struggling to cope with life events, therapy may be particularly helpful. We offer free 15-minute consultations to help determine if our services are a good fit for your needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">How long does therapy typically last?</h3>
            <p className="text-gray-300">
              The duration of therapy varies based on individual needs and goals. Some clients benefit from short-term therapy (8-12 sessions) focused on specific issues, while others prefer longer-term support. During your initial consultation, your therapist will discuss expectations and develop a personalized treatment plan.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Are your therapy sessions confidential?</h3>
            <p className="text-gray-300">
              Yes, confidentiality is a cornerstone of our practice. All information shared during sessions is protected by law and professional ethics. There are limited exceptions where therapists are legally required to break confidentiality, such as if there's an immediate risk of harm to yourself or others, or in cases of abuse of children or vulnerable adults. Your therapist will explain these limitations in detail during your first session.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Do you accept insurance?</h3>
            <p className="text-gray-300">
              We work with several major insurance providers and can provide superbills for out-of-network reimbursement. Please contact our office for specific information about your insurance coverage or to discuss our sliding scale options.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-rich-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/80 to-rich-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <PageHeader
            title="Therapy Sessions"
            subtitle="Address mental health concerns and cultivate emotional well-being."
          />
          <div className="flex justify-center mt-8">
            <CallToAction text="Find a Therapist" href="/contact" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-rich-black">
        <div className="container mx-auto px-4">
          <SectionTabs tabs={tabs} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-rich-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Therapy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Improved Self-Awareness</h3>
              <p className="text-gray-400">Gain deeper insights into your thoughts, emotions, behaviors, and develop a stronger sense of identity.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Effective Coping Skills</h3>
              <p className="text-gray-400">Learn practical strategies to manage stress, anxiety, depression, and other challenging emotions.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Healthier Relationships</h3>
              <p className="text-gray-400">Improve communication skills, set boundaries, and build more fulfilling connections with others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-rich-black/80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Begin Your Healing Journey Today</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Connect with our team of compassionate therapists and take the first step toward better mental health and emotional well-being.
          </p>
          <CallToAction text="Schedule a Free Consultation" href="/contact" />
        </div>
      </section>
    </Layout>
  );
};

export default Therapy;
