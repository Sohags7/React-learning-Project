import React from 'react';
import { Heart } from 'lucide-react';
 import { useContext } from 'react';
import { CartContext } from "../../App";
import toast from "react-hot-toast";


function Products({product}) {
  
   const { dispatch } = useContext(CartContext);

     const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success(`${product.name} added to cart 🛒`);
  };
  
  return (
  
      <div className="w-full sm:w-[350px] rounded-sm overflow-hidden shadow-lg">

      <div
        className="h-[200px] bg-cover bg-center hover:scale-120 transition-transform duration-500   text-white "
       style={{ backgroundImage: `url(${product.image})` }}
      >  </div>

      
      <div className="pt-4 px-3 flex justify-between">
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <h4 className="text-md ">{product.price} BDT</h4>
       
      </div>

       <p className="mt-1 px-3 text-gray-600">{product.description}</p>
       <div className="px-3 p-4">
  

        <button
       onClick={addToCart}
        className="mt-4 px-6 py-2 cursor-pointer  text-black border-2 border-solid rounded-xl hover:bg-cyan-600 hover:text-white">
          Add to Cart
        </button>

       </div>
      
    </div>
  );
}

export default Products;
