import React, { useEffect, useReducer } from 'react'

const initialValue = {
  isRunning:false,
  time:0,
  lap:[]
};

const handleStopwatch = (state, action) => {

  switch(action.type) {

    case "START" : {
      return {...state,isRunning: true}
    };
    case "PAUSE": return {...state,isRunning: false};

    case "RESTART":
    return {
      ...state,
      isRunning: false,
      time: 0,
      lap:[]
    };
    case "Lap": if(state.isRunning===false)return state;
     return {
      ...state,
      lap:[...state.lap,state.time]
    }
    case "TICK":
      return { ...state, time: state.time + 1 }

    default: return state;


  }
};
const formatTime = (time) => {
  const totalSeconds = Math.floor(time / 100);
const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
const seconds = (totalSeconds % 60).toString().padStart(2, "0");
const centiseconds = (time % 100).toString().padStart(2, "0");
return `${hours}:${minutes}:${seconds}:${centiseconds}`;

  };


function Stopwatch() {

  const [state, dispatch ] = useReducer(handleStopwatch,initialValue);

useEffect(() => {
  let timer;
  if (state.isRunning) {
    timer = setInterval(() => dispatch({ type: "TICK" }), 10); 
  }
  return () => clearInterval(timer);
}, [state.isRunning]);



  return (
    <>
    <div className=' flex flex-col    h-screen  font-bold '>
      <span className='text-[30px] '> ⏱ Stopwatch : {formatTime(state.time)} </span>

       <div className='flex  justify-center gap-4 pt-5' >
      { state.isRunning ? 
        (  <button
              className="px-4 py-2 bg-yellow-500 text-white rounded cursor-pointer"
              onClick={() => dispatch({ type: "PAUSE" })}
            >
              Pause
            </button> ):
        ( <button
            className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
              onClick ={() => dispatch({ type: "START" })}
          >
            Start
          </button> )
      }

      <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick ={() => dispatch({ type: "RESTART" })}
          >
            Reset
          </button> 
          <button
            className="px-4 py-2 bg-gray-900 text-white rounded cursor-pointer"
            onClick ={() => dispatch({ type: "Lap" })}
          >
            Lap
        </button> 
   
    </div>

  {state.lap.length>0?(<span>Lap status:</span>):""}
  <div className="flex flex-col gap-1 pt-2">
    
    {state.lap.map((item, index) => (
      <div key={index}>
        Lap {index + 1}: {formatTime(item)}
      </div>
    ))}
  </div>
</div>
   

    </>
   
  );
}

export default Stopwatch