import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import logo from '../assets/SPORTEC-red.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'} transition-all duration-300`}
    >
      {/* Custom color variables */}
      <style jsx global>{`
        :root {
          --dark: #181818;
          --light: #ffffff;
          --accent: #de1200;
        }
        .text-de1200 {
          color: #de1200;
        }
        .bg-de1200 {
          background-color: #de1200;
        }
        .border-de1200 {
          border-color: #de1200;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center justify-center">
            <img src={logo} className='object-contain h-16 -mr-2 relative mt-1 overflow-hidden w-16 drop-shadow-xl '/>
              <span className="text-2xl font-bold text-accent bg-gradient-to-r from-[#de1200]/60 to-black bg-clip-text text-transparent">
                Sportec
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-dark hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-dark hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link 
                to="/features" 
                className="text-dark hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link 
                to="/contact" 
                className="text-dark hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Link to="/contact" className="block w-full text-center bg-gradient-to-r from-orange-800/100 to-[#de1200] text-white px-4 py-2 rounded-md text-base font-medium hover:opacity-90 transition-opacity mt-2">
              Join Now
            </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-accent focus:outline-none transition-colors"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link 
              to="/features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-accent transition-colors"
            >
              Features
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-dark hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <Link to="/contact" className="block w-full text-center bg-gradient-to-r from-orange-800/100 to-[#de1200] text-white px-4 py-2 rounded-md text-base font-medium hover:opacity-90 transition-opacity mt-2">
              Join Now
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;