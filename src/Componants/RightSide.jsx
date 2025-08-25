import React, { useEffect, useRef, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

const lineData = [
  { date: "2025-08-01", balance: 100000 },
  { date: "2025-08-02", balance: 120000 },
  { date: "2025-08-03", balance: 90000 },
  { date: "2025-08-04", balance: -150000 },
  { date: "2025-08-05", balance: 170000 }
];



const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

const transactions = [
  {
    id: 1,
    date: "2025-08-01",
    type: "Income",
    category: "Salary",
    amount: 5000,
  },
  {
    id: 2,
    date: "2025-08-02",
    type: "Expense",
    category: "Groceries",
    amount: 150,
  },
  {
    id: 3,
    date: "2025-08-03",
    type: "Expense",
    category: "Rent",
    amount: 1200,
  },
  {
    id: 4,
    date: "2025-08-04",
    type: "Income",
    category: "Freelance",
    amount: 800,
  },
  {
    id: 5,
    date: "2025-08-05",
    type: "Expense",
    category: "Utilities",
    amount: 200,
  },
];


const totals = {
  balance: 300000,
  income: 200000,
  expense: 100000,
};


const currencyFormat = (num) =>
  num.toLocaleString("en-US", { style: "currency", currency: "USD" });



function RightSide({ state}) {
const [data, setData] = useState([]);
  
  useEffect(() => {
    let cumulativeAmount = 0; 
    const tempData = state.TransactionHistory.map((item) => {
   
      if (item.type === "Income") {
        cumulativeAmount += item.amount;
      } else {
        cumulativeAmount -= item.amount;
      }
      console.log(cumulativeAmount);

 
      return {
        date: new Date(item.id).toLocaleDateString("en-US"), 
        balance: cumulativeAmount, 
        
      };
    });
    
    setData(tempData); 
  }, [state.TransactionHistory]); 

    const latestBalance = data.length > 0 ? data[data.length - 1].balance : 0;
  
  return (
    <>
      <div className="md:col-span-2 grid grid-cols-1 gap-6">
        <div className="p-4 rounded-lg border">
          <h2 className="text-lg font-medium mb-2">Balance Over Time</h2>
          <div className="h-56">
            <LineChart width={500} height={200} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip  />
              <Legend />
              <Line type="monotone" dataKey="balance" stroke="#10b981" />
            </LineChart>
          </div>
        </div>

        <div className="p-4 rounded-lg border flex flex-row gap-4 justify-around ">
         <div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 justify-center items-center">
            <div className="w-20 h-4 bg-green-300 rounded"></div>  
             <span className="flex flex-col">Income</span>
            </div>
       <div className="flex gap-2 justify-center items-center">
          <div className="w-20 h-4 bg-red-300 rounded"></div>  
         <span className="flex flex-col">Expense</span>
        </div>
      </div>
    </div>
            <div className=' flex flex-col item-center'>
            <div className="text-sm text-slate-600">Summary</div>
            <div className="text-xl font-bold mt-1">{currencyFormat(latestBalance)}</div>
            <div className="mt-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 inline-block rounded" /> Income: ${state.Income.toFixed(2)}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-3 h-3 bg-red-500 inline-block rounded" /> Expense: ${state.Expense.toFixed(2)}
              </div>
            </div>
            </div>

        </div>

         <div className="p-4 rounded-lg border max-h-[500px] flex flex-col gap-4 justify-around overflow-y-auto ">
    <h1>Recent Transactions</h1> 
     {state.TransactionHistory && state.TransactionHistory.length > 0 ? (
          state.TransactionHistory.map((item, index) => (
         <div key={index} className="flex justify-between border-b py-1 px-2">
           <span>{item.title}</span>
           <span>{item.date}</span>
           <span className={item.type === "Income" ? "text-green-500" : "text-red-500"}>
           {currencyFormat(item.amount)}
          </span>
         
         </div>
    ))
  ) : (
    <div>No Transactions Yet</div>
  )}
</div>



      </div>
    </>
  );
}

export default RightSide;
