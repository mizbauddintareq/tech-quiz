import React from "react";
import Swal from "sweetalert2";
const Quiz = ({ quiz }) => {
  const handleAnswer = (ans) => {
    if (ans === quiz.correctAnswer) {
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
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse my-3 collapse-plus border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          {quiz?.question}
        </div>
        <div className="collapse-content text-center">
          {quiz?.options?.map((option, idx) => (
            <div
              key={idx}
              className="my-10 cursor-pointer"
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
