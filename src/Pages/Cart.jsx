import React, { useContext } from "react";
import { CartContext } from "../App";
import { Trash2, Plus, Minus } from "lucide-react";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity , 0);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-6">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="container p-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-4 bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <div
                  className="w-20 h-20 flex-shrink-0 rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

               
                <div className="flex-1 ml-4">
                  <div className="text-black font-medium">{item.name}</div>

                 
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      className="p-1 border rounded"
                      onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-2">{item.quantity> 1 ? item.quantity: 1 }</span>
                    <button
                      className="p-1 border rounded"
                      onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
                    >
                      <Plus size={16} />
                    </button>

                   
                    <button
                      className="ml-4 text-red-500 hover:text-red-700"
                      onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                
                <div className="text-black font-semibold">${item.price * item.quantity }</div>
              </div>
            ))}
          </div>

         
          <div className="text-right mt-6 text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
            <div className="text-center mt-6 text-xl font-bold">
            <button className="px-10 py-3  cursor-pointer  text-white  rounded-md m-5  bg-cyan-500"> proceed to checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
