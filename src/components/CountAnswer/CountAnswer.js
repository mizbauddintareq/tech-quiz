import React from "react";

const CountAnswer = ({ wrongCount, rightCount }) => {
  return (
    <div className="md:fixed mt-5 p-10 rounded-md font-bold lg:ml-6 shadow-xl bg-gradient-to-t from-cyan-100 to-blue-100">
      <p>Correct Answer: {rightCount}</p>
      <p>Wrong Answer: {wrongCount}</p>
    </div>
  );
};

export default CountAnswer;
