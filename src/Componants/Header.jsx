import React from 'react'
import { Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Header() {
  
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-red-600 text-[18px] font-semibold cursor-pointer hover:underline"
      : "text-white text-[18px] font-semibold cursor-pointer hover:underline";

  return (
    <div>
      <div className="py-4 w-full bg-black flex justify-around px-10 items-center">
       
        <NavLink className="text-red-600 text-[30px] font-extrabold" to={'/'}>BedFlix</NavLink>
        
        <div className="flex items-center gap-10">
          <NavLink className={linkClass} to={'action'}>Action</NavLink>
          <NavLink className={linkClass} to={'drama'}>Drama</NavLink>
          <NavLink className={linkClass} to={'animation'}>Animation</NavLink>
          <NavLink className={linkClass} to={'adventure'}>Adventure</NavLink>
          <NavLink className={linkClass} to={'sci-fi'}>Sci-Fi</NavLink>
        </div>

        <div className="flex relative">
          <input
            type="text"
            className="bg-white rounded-xl px-10 py-2 border focus:outline-none focus:border-2 focus:border-red-500"
            placeholder="Search Movie"
          />
          <Search className="w-6 h-6 absolute right-3 top-2 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
