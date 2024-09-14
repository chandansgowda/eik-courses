import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import Drawer from './Drawer'; // Ensure you have a correct path to the Drawer component

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get('/data/main.json')
      .then(response => {
        setTitle(response.data.website_name ?? "");
      })
      .catch(error => console.error('Error fetching JSON data:', error));
  }, []);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  return (
    <>
      <nav className="border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={logo}
              className="h-8 hidden md:block" // Hide logo on mobile devices
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-amber-400">
              {title}
            </span>
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-amber-400 rounded-lg md:hidden hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
            onClick={toggleDrawer}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden md:flex md:space-x-8">
            <a href="mailto:someone@gmail.com" className="text-amber-400 hover:text-amber-300">Contact</a>
          </div>
          <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;




