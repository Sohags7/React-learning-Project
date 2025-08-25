import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import { useReducer } from 'react';

const InitialValue = {
  Income: 0,
  Expense: 0,
  Total: 0,
  TransactionHistory: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    
      case "ADD": {
      const newTransaction = {
        id: Date.now(),
        title: action.payload.title,
        amount: action.payload.amount,
        type: action.payload.type,
      };

      if (action.payload.type === "Income") {
        return {
          ...state,
          Income: state.Income + action.payload.amount,
          Total: state.Total + action.payload.amount,
          TransactionHistory: [...state.TransactionHistory, newTransaction],
        };
      } else {
        return {
          ...state,
          Expense: state.Expense + action.payload.amount,
          Total: state.Total - action.payload.amount,
          TransactionHistory: [...state.TransactionHistory, newTransaction],
        };
      }
    };

    case "CLEAR":
      return InitialValue;

    default:
      return state;
  }
};


function Transaction() {

  const [state, dispatch] = useReducer(reducer, InitialValue);

    return (
        <>
            <div className="max-w-5xl mx-auto flex bg-white rounded-2xl shadow-lg p-6  gap-6">
               <LeftSide state={state} dispatch={dispatch} />
                <RightSide state={state} />
            </div>

        </>
    )
}

export default Transaction