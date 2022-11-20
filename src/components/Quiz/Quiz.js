import React from "react";

const Quiz = ({ quiz }) => {
  console.log(quiz);
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
            <div key={idx} className="my-10 cursor-pointer">
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
