import React, { useState, useRef, useEffect } from "react";
import Question from "./Question";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const optionRefs = useRef([]);
  const [totalMarks, setTotalMarks] = useState(0);
  const [timer, setTimer] = useState(20);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option, index, correctAnswer) => {
    if (option === correctAnswer) {
      setTotalMarks((prevMarks) => prevMarks + 1);
    }

    setSelectedOption(option);

    if (optionRefs.current[index]) {
      optionRefs.current[index].classList.add("bg-green-600", "text-white");

      if (option !== correctAnswer) {
        optionRefs.current[index].classList.add("bg-red-600", "text-white");
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < Question.length - 1) {
      setTimer(20);
      setSelectedOption(null);
      setCurrentQuestionIndex((prev) => prev + 1);

      optionRefs.current.forEach((button) => {
        if (button) {
          button.classList.remove("bg-green-600", "bg-red-600", "text-white");
        }
      });
    } else {
      setTimer(0);
      setFinished(true);
    }
  };

  useEffect(() => {
    if (timer > 0 && selectedOption === null && !finished) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0) {
      handleNextQuestion();
      setTimer(20);
    }
  }, [timer, selectedOption, finished]);

  return (
    <div className="w-[1000px] h-[500px] bg-white p-10 rounded-xl">
      <div className="flex flex-col text-left">
        {!finished && (
          <>
            <div className="flex justify-between">
              <span className="text-[20px]">
                {currentQuestionIndex + 1}. {Question[currentQuestionIndex].question}
              </span>
              <span className="text-xl font-semibold animate-pulse text-green-900">
                Time left: {timer}
              </span>
            </div>

            <div className="mt-4">
              {Question[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className="flex items-center">
                  <span>{String.fromCharCode(index + 65)}.</span>
                  <button
                    ref={(el) => (optionRefs.current[index] = el)}
                    onClick={() =>
                      handleAnswer(option, index, Question[currentQuestionIndex].answer)
                    }
                    className="p-2 m-2 rounded cursor-pointer bg-gray-200 block"
                    disabled={selectedOption !== null}
                  >
                    {option}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button
                onClick={handleNextQuestion}
                className="px-2 py-1 bg-green-700 text-white cursor-pointer rounded lg"
                disabled={selectedOption === null}
              >
                Next question
              </button>
            </div>
          </>
        )}

        {finished && (
           <>
          <div className="mt-4">
            <span className="text-xl font-semibold">
              Quiz Finished! Total Marks: {totalMarks}
            </span>

           
          </div >
           <button
           
           className="bg-green-500 px-2 max-w-50 item-center text-white py-1 mt-10 cursor-pointer"
          onClick={() => {
          setCurrentQuestionIndex(0);
            setFinished(false); 
            setTotalMarks(0);    
            setTimer(20);        
          }}
           >Try Again</button>
           
          
           </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
