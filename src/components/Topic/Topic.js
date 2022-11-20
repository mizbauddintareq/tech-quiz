import React from "react";
import "./Topic.css";
const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="card shadow-xl bg-gradient-to-t from-cyan-100 to-blue-100 border-style ">
      <figure className="px-10 pt-10">
        <img src={logo} alt="quiz-logo" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold">Total: {total} quizzes on this topic</p>
        <div className="card-actions mt-2">
          <button className=" border-0 btn  bg-gradient-to-r from-cyan-500 to-blue-500 ">
            See Quizzes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
