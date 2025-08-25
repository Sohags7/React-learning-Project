import React, { useReducer, useState } from "react";


function LeftSide({ state, dispatch }) {
  
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Income");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) return alert("Enter a valid amount");

    dispatch({
    type: "ADD",
    payload: { 
      id: Date.now(),
      title, 
      amount: Number(amount), 
      type 
    },
  });

    setTitle("");
    setAmount("");
    setType("Income");
  };

  return (
    <>
      <div className="w-[25%]">
        <h1 className="text-2xl text-center font-bold">Financial Tracker</h1>

        <div className="bg-green-50 p-3">
          <h1 className="text-center text-md text-gray-500">Balance</h1>
          <h1 className="text-center text-3xl font-bold">
            ${state.Total.toFixed(2)}
          </h1>

          <div className="flex justify-center text-center p-2 gap-2">
            <div className="bg-green-200 px-5 py-1 rounded-md">
              <label>Income</label>
              <h1>${state.Income.toFixed(2)}</h1>
            </div>
            <div className="bg-red-200 px-5 py-1 rounded-md">
              <label>Expense</label>
              <h1>${state.Expense.toFixed(2)}</h1>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <h2 className="text-center text-sm pb-2">Title</h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-[0.5px] py-1 rounded-md px-2"
            placeholder="Salary, Grocery, Coffee..."
          />

          <h2 className="text-center text-sm py-2">Amount</h2>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border-[0.5px] py-1 rounded-md px-2"
            placeholder="e.g. 2500"
          />

          <h2 className="text-center text-sm py-2">Type</h2>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border-[1px] px-2 py-1 rounded-md"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>

          {/* Buttons */}
          <div className="py-3 flex items-center gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-purple-700 text-white rounded-md cursor-pointer"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => dispatch({ type: "CLEAR" })}
              className="px-4 py-2 bg-red-400 text-white rounded-md cursor-pointer"
            >
              Clear
            </button>
            <div className="flex justify-end flex-1">
              <p
                onClick={() => dispatch({ type: "CLEAR" })}
                className="text-right text-red-600 cursor-pointer"
              >
                Clear All
              </p>
            </div>
          </div>
        </form>

        <div className="py-10 text-[13px] text-center text-gray-500">
          Transactions saved locally in your browser (coming next with LocalStorage 🚀)
        </div>
      </div>
    </>
  );
}

export default LeftSide;
