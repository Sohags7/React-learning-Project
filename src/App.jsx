import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Componants/Header/Header';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About-us';
import { createContext } from 'react';
import { useReducer } from 'react';
import Cart from './Pages/Cart';
import { Toaster } from "react-hot-toast";




const AddProduct = () => <h1> Add your product here</h1>

const CartContext = createContext();


const initialState = { 
  cart: [],
  
 };

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
     
       const existing = state.cart.find(item => item.id === action.payload.id);
      if (existing) {
        
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
       
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
     case "INCREASE_QUANTITY"  :{
      
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )

      }
     }
     case "DECREASE_QUANTITY" :
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
  <CartContext.Provider  value={{ cart: state.cart, dispatch }}>
     <Toaster position="top-right" reverseOrder={false} />
    <div>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element ={<Contact/>} />
          <Route path="/add-product" element ={<AddProduct/>} />
        </Routes>
      </main>
    </div>
  </CartContext.Provider>
  );
}

export { CartContext };
export default App;
