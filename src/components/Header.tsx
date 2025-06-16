
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-purple-600">
              Streelancer
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Jobs</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Job Alerts</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Gig Work</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Talent</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Company</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Jobs</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Job Alerts</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Gig Work</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Talent</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Company</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button variant="ghost" className="text-gray-700 justify-start">
                  Sign In
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white justify-start">
                  Join Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
