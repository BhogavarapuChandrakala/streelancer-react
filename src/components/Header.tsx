
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-600">
              Streelancer
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="text-gray-700 hover:text-purple-600 transition-colors">Jobs</Link>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Job Alerts</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Gig Work</a>
            <Link to="/marketplace" className="text-gray-700 hover:text-purple-600 transition-colors">Talent</Link>
            <Link to="/employers" className="text-gray-700 hover:text-purple-600 transition-colors">Company</Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="ghost" className="text-gray-700">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Join Now
              </Button>
            </Link>
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
              <Link to="/jobs" className="text-gray-700 hover:text-purple-600 transition-colors">Jobs</Link>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Job Alerts</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Gig Work</a>
              <Link to="/marketplace" className="text-gray-700 hover:text-purple-600 transition-colors">Talent</Link>
              <Link to="/employers" className="text-gray-700 hover:text-purple-600 transition-colors">Company</Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Link to="/signin">
                  <Button variant="ghost" className="text-gray-700 justify-start w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white justify-start w-full">
                    Join Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
