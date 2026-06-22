import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { useStore } from '../store';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { coachPhoto } = useStore();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Training', path: '/training' },
    { name: 'Vision', path: '/vision' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-[#0A2342] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-[#4DA6FF] p-2 rounded-lg group-hover:bg-white transition-colors">
                <GraduationCap className="h-6 w-6 text-[#0A2342]" />
              </div>
              <span className="font-bold text-xl tracking-tight">COACH CLEMENT</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-[#4DA6FF]',
                  isActive(link.path) ? 'text-[#4DA6FF]' : 'text-gray-300'
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Coach Photo */}
            <div className="flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-gray-200 border-2 border-[#4DA6FF] overflow-hidden flex items-center justify-center relative">
                {coachPhoto ? (
                  <img src={coachPhoto} alt="Coach" className="w-full h-full object-cover" />
                ) : (
                  <ImageIcon className="h-4 w-4 text-gray-500" />
                )}
              </div>
              <span className="text-[10px] text-gray-400 mt-1 whitespace-nowrap">Coach Clement</span>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A2342] border-t border-[#1a385b]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  isActive(link.path)
                    ? 'bg-[#1a385b] text-[#4DA6FF]'
                    : 'text-gray-300 hover:bg-[#1a385b] hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
