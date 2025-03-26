import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, LayoutDashboard, User, Notebook } from "lucide-react";
import { Switch } from '@headlessui/react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className={`flex justify-between items-center w-full p-4 shadow-md ${darkMode ? 'bg-gray-800 text-white' : '07782f text-white'}`}>
      <div className="flex items-center justify-end w-full">
        {/* Döljer knappen på större skärmar */}
        <button
          onClick={toggleNavbar}
          className="px-4 py-2 h-fit self-center hover:bg-accent rounded-md md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop-menyn visas alltid på större skärmar */}
        <ul className="hidden md:flex gap-8">
          <li><NavLink to="/" className="p-4 hover:bg-accent rounded-md"><LayoutDashboard className="inline self-center h-full mr-2"/>Dashboard</NavLink></li>
          <li><NavLink to="/profilecard" className="p-4 hover:bg-accent rounded-md"><User className="inline self-center h-full mr-2"/>Profil</NavLink></li>
          <li><NavLink to="/mealLog" className="p-4 hover:bg-accent rounded-md"><Notebook className="inline self-center h-full mr-2"/>Måltider</NavLink></li>
        </ul>

        {/* Dark Mode Switch */}
        <div className="flex items-center ml-4">
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11`}
          >
            <span className="sr-only">Enable dark mode</span>
            <span
              className={`${darkMode ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
          </Switch>
        </div>
      </div>

      {/* Dropdown-menyn syns bara i mobilvy när knappen trycks */}
      {isOpen && (
        <ul className={`md:hidden flex flex-col mt-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-green-600 text-white'}`}>
          <li className="my-2"><NavLink to="/" className="px-4 py-2 hover:bg-accent rounded-md">Dashboard</NavLink></li>
          <li className="my-2"><NavLink to="/profilecard" className="px-4 py-2 hover:bg-accent rounded-md">Profile</NavLink></li>
          <li className="my-2"><NavLink to="/mealLog" className="px-4 py-2 hover:bg-accent rounded-md">Meallog</NavLink></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;