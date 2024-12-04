import { Home, Info, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-7">
            <div className="flex space-x-4">
              <Link
                to="/"
                className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                <Home className="h-5 w-5 mr-2" />
                Home
              </Link>
              <Link
                to="/about"
                className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                <Info className="h-5 w-5 mr-2" />
                About
              </Link>
              <Link
                to="/contact"
                className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
              >
                <Phone className="h-5 w-5 mr-2" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}