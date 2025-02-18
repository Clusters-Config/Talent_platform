import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-white dark:text-gray-900 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white">HIRIZONE</h2>
          <p className="text-gray-400 dark:text-gray-600">
            Connecting top talent with world-class opportunities. Your career, our priority.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-600">
            Designed with passion for the job seekers of tomorrow.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 dark:text-gray-600">
            <li><a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-600 transition duration-300">Home</a></li>
            <li><a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-600 transition duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-600 transition duration-300">Job Listings</a></li>
            <li><a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-600 transition duration-300">Contact</a></li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold dark:text-white text-gray-900">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="p-3 bg-indigo-500 dark:bg-gray-200 rounded-full hover:bg-indigo-400 dark:hover:bg-indigo-500 transition duration-300">
              <Facebook className="text-white dark:text-gray-900" fontSize="large" />
            </a>
            <a href="#" className="p-3 bg-indigo-500 dark:bg-gray-200 rounded-full hover:bg-indigo-400 dark:hover:bg-indigo-500 transition duration-300">
              <Twitter className="text-white dark:text-gray-900" fontSize="large" />
            </a>
            <a href="#" className="p-3 bg-indigo-500 dark:bg-gray-200 rounded-full hover:bg-indigo-400 dark:hover:bg-indigo-500 transition duration-300">
              <Instagram className="text-white dark:text-gray-900" fontSize="large" />
            </a>
            <a href="#" className="p-3 bg-indigo-500 dark:bg-gray-200 rounded-full hover:bg-indigo-400 dark:hover:bg-indigo-500 transition duration-300">
              <LinkedIn className="text-white dark:text-gray-900" fontSize="large" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="text-center text-gray-500 dark:text-gray-600 text-sm mt-12 border-t border-indigo-500 dark:border-gray-300 pt-4">
        <p>&copy; {new Date().getFullYear()} Hirizone. All rights reserved.</p>
      </div>
    </footer>
  );
}
