import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md fixed w-full z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
     
      <div className="text-2xl font-bold text-[#640D5F] dark:text-white">
        Sri Krithi Alla
      </div>
      <div className="flex space-x-4">
        {['home', 'about', 'skills', 'experience', 'projects'].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="cursor-pointer bg-[#f3e8f6] dark:bg-[#2e2e2e] text-[#640D5F] dark:text-white px-4 py-2 rounded-md shadow hover:bg-[#e2d2e8] dark:hover:bg-[#3c3c3c] transition-colors duration-300 text-sm font-medium"
          >
            {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
          </Link>
        ))}
      </div>

      <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-white  transition"
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? <FaSun className="text-yellow-700" /> : <FaMoon className="text-gray-800" />}
        </button>
    </nav>
  );
}

export default Navbar;

