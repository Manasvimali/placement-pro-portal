
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-placement-primary flex items-center justify-center text-white font-bold">P</div>
            <span className="font-bold text-xl text-placement-dark">PlacementPro</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-placement-dark hover:text-placement-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/job-application-tracker" className="text-placement-dark hover:text-placement-primary font-medium transition-colors">
              Job Tracker
            </Link>
            <Link to="/resume-management" className="text-placement-dark hover:text-placement-primary font-medium transition-colors">
              Resume
            </Link>
            <Link to="/forums" className="text-placement-dark hover:text-placement-primary font-medium transition-colors">
              Forums
            </Link>
            <Link to="/alumni-interaction" className="text-placement-dark hover:text-placement-primary font-medium transition-colors">
              Alumni
            </Link>
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-placement-dark focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-placement-dark hover:text-placement-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/job-application-tracker" 
                className="text-placement-dark hover:text-placement-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Job Tracker
              </Link>
              <Link 
                to="/resume-management" 
                className="text-placement-dark hover:text-placement-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
              <Link 
                to="/forums" 
                className="text-placement-dark hover:text-placement-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Forums
              </Link>
              <Link 
                to="/alumni-interaction" 
                className="text-placement-dark hover:text-placement-primary font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Alumni
              </Link>
              <div className="flex gap-4 mt-4">
                <Button variant="outline" className="flex-1">Sign In</Button>
                <Button className="flex-1">Sign Up</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
