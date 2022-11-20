import React from "react";
import Swal from "sweetalert2";
import { EyeIcon } from "@heroicons/react/24/solid";

const Quiz = ({ quiz }) => {
  const handleAnswer = (ans) => {
    if (ans === quiz?.correctAnswer) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Answer Is Correct",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong Answer!",
      });
    }
  };

  const handleRightAnswer = (ans) => {
    Swal.fire({
      text: `${ans}`,
    });
  };

  return (
    <div>
      <div
        tabIndex={0}
        className="collapse my-3 collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          {quiz?.question}
        </div>
        <div className="flex justify-end mr-3">
          <button onClick={() => handleRightAnswer(quiz.correctAnswer)}>
            <EyeIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="collapse-content ">
          {quiz?.options?.map((option, idx) => (
            <div
              key={idx}
              className="my-10 cursor-pointer text-center"
              onClick={() => handleAnswer(option)}
            >
              <span className="text-xl font-bold border-cyan-500 border-2 px-5 py-2">
                {option}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
