
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-rich-gray py-12 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold gold-gradient mb-4">Provenance Coaching</h3>
            <p className="text-gray-400 mb-4">Empowering individuals to reclaim their agency, reframe their realities, and emerge as formidable change agents.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/life-coaching" className="text-gray-400 hover:text-gold transition-colors">Life Coaching</Link></li>
              <li><Link to="/therapy" className="text-gray-400 hover:text-gold transition-colors">Therapy Sessions</Link></li>
              <li><Link to="/web-development" className="text-gray-400 hover:text-gold transition-colors">Web Development</Link></li>
              <li><Link to="/digital-skills" className="text-gray-400 hover:text-gold transition-colors">Digital Skills Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-gold transition-colors">Our Team</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-gold transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Coaching Street</p>
              <p className="mb-2">New York, NY 10001</p>
              <p className="mb-2">Email: info@provenancecoaching.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} Provenance Coaching. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
