import { NavLink } from 'react-router-dom';
import { House, Info, ShoppingCart, Phone } from 'lucide-react';
import Cart from '../../Pages/Cart';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from "../../App"

const Header = () => {
  const { cart, dispatch } = useContext(CartContext);
   const [isCartOpen, setIsCartOpen] = useState(false);
  const links = [
    { to: '/', label: 'Home', icon: House },
    { to: '/about', label: 'About', icon: Info },
    { to: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav className="w-screen h-[70px] fixed flex justify-around  bg-orange-500 shadow-lg">
    
      <div className="w-12 h-12">
        <img
          className="rounded-full object-cover border-2 border-white shadow-md"
          src="data:image/png;base64,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"
          alt="Logo"
        />
      </div>

      <div className="flex  items-center gap-20">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
                textDecoration: isActive ? 'underline' : 'none',
              })}
              className="text-white flex items-center gap-2 hover:text-yellow-200 transition-colors duration-200"
            >
              {Icon && <Icon className="w-5 h-5" />}
              {link.label}
            </NavLink>
          );
        })}
        <button
            onClick={() => setIsCartOpen(true)}
            className="text-white flex items-center gap-2 relative hover:text-yellow-200 transition-colors duration-200"
          >
            <ShoppingCart /> { cart.length>0 &&   <div className='w-4 text-white h-4 text-[10px] left-4 bottom-3 absolute rounded-xl bg-red-400'>
              {cart.length}
              </div> }Cart
          </button>

           {isCartOpen && (
          <div className="fixed top-16 right-0 z-50 w-full md:w-[600px] lg:w-[500px]">
      <div className="bg-white p-6 rounded-xl shadow-lg relative">
        
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={() => setIsCartOpen(false)}
        >
          ✕
        </button>
        <Cart />
      </div>
    </div>

      )}

      </div>
    </nav>
  );
};

export default Header;
