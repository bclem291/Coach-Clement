import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, GraduationCap, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#051426] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-[#4DA6FF] p-1.5 rounded-lg">
                <GraduationCap className="h-5 w-5 text-[#0A2342]" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">COACH CLEMENT</span>
            </Link>
            <p className="text-sm max-w-sm mb-6 text-gray-400 leading-relaxed">
              Learn Digital Skills. Build Income. Transform Your Future. 
              Empowering Nigerians with practical digital skills for financial independence.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/2347033325827" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white px-3 py-1.5 rounded-full transition-colors text-sm font-medium">
                <MessageCircle className="h-4 w-4" /> 
                Chat with Coach Clement
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579142738536" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#4DA6FF] transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#4DA6FF] transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-[#4DA6FF] transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#4DA6FF] transition-colors">Home</Link></li>
              <li><Link to="/training" className="hover:text-[#4DA6FF] transition-colors">Training Programs</Link></li>
              <li><Link to="/vision" className="hover:text-[#4DA6FF] transition-colors">Our Vision</Link></li>
              <li><Link to="/contact" className="hover:text-[#4DA6FF] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#4DA6FF] mt-0.5" />
                <span>+234 703 332 5827</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#4DA6FF] mt-0.5" />
                <span>bclem291@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Coach Clement. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Digital Success.</p>
        </div>
      </div>
    </footer>
  );
}
