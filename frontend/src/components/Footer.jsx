import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">HIRIZONE</h2>
          <p className="text-gray-400">Delivering excellence in services with trust and quality. We connect talent with opportunities to shape the future of work.</p>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-400">Designed with care for the job seekers of tomorrow.</p>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-blue-500 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-blue-500 transition duration-300">Services</a></li>
            <li><a href="#" className="hover:text-blue-500 transition duration-300">Contact</a></li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300">
              <Facebook style={{ color: 'white', fontSize: 24 }} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300">
              <Twitter style={{ color: 'white', fontSize: 24 }} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300">
              <Instagram style={{ color: 'white', fontSize: 24 }} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition duration-300">
              <LinkedIn style={{ color: 'white', fontSize: 24 }} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Hirizone. All rights reserved.</p>
      </div>
    </footer>
  );
}
