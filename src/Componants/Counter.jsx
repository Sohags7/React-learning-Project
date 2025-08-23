import React, { useState,useReducer } from 'react'

 let CountValues = {
    value:0,
    history: [0],
    currentIndex: 0
 }
 const handleCount = (state,action)  => {
    
    switch(action.type) {
        
        case "Increment": {
             let newHistory = state.history.slice(0, state.currentIndex + 1)  
           return { 
        ...state, 
        value: state.value + 1 ,
       currentIndex: state.history.length ,
     history: [...newHistory, state.value + 1]
       
        };
        }
        case "Decrement":
         let newHistory = state.history.slice(0, state.currentIndex + 1)    
        return { 
        ...state, 
        value: state.value - 1 ,
        currentIndex: state.history.length ,
        history: [...newHistory, state.value - 1]
        };

        case "Undo" : 
        if (state.currentIndex === 0) return state;
        
        return  {
            ...state,
            currentIndex: state.currentIndex - 1,
            value: state.history[state.currentIndex - 1], 
        };
        case "Redo" :  
        if (state.currentIndex >= state.history.length - 1) return state
        return {
             ...state,
            currentIndex: state.currentIndex + 1,
              value: state.history[state.currentIndex + 1], 
        }
        default: {
            return state;
        }
    }
 }

function Counter(props) {
 
    const [state,action] = useReducer(handleCount, CountValues);
    

    return (
        <>
        <div className='flex flex-row  items-center justify-center gap-10 p-6'>
            <button className='p-4 rounded-xl  bg-green-400 cursor-pointer'  onClick={() => action({ type: "Increment" })} >
             Increment
            </button>
             <span className="text-xl">{state.value}</span>

            <button className='p-4 rounded-xl text-white  bg-red-600 hover:bg-red-800  cursor-pointer'
           onClick={() => action({ type: "Decrement" })}

            >
            decrement
            </button>
        </div>   

        <div className='flex flex-row  items-center justify-center gap-20 p-6'>
            <button className='p-4 rounded-xl  bg-gray-400 cursor-pointer'  onClick={()=> action({type: "Undo"})}  >
             undo
            </button>
           <span className="text-xl">{state.history[state.currentIndex]}</span>

            <button className='p-4 rounded-xl text-white  bg-gray-600 hover:bg-red-800  cursor-pointer'
            onClick={()=> action({type: "Redo"})}
            >
            Redo
            </button>
            
        </div> 
       <div className='p-6'>
        <strong>History:</strong>
        <ul className="flex gap-2">
          {state.history.map((item, index) => (
            <li
              key={index}
              className={`${
                index === state.currentIndex ? "text-red-500 font-bold" : "text-green-400"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

        </>

    )
}

export default Counter