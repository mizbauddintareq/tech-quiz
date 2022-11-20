import React from "react";
import { useLoaderData } from "react-router-dom";

const Quizzes = () => {
  const quizzes = useLoaderData().data;
  //   console.log(quizzes.questions);
  return (
    <div>
      <h1>This is quizzes for {quizzes.name}</h1>
    </div>
  );
};

export default Quizzes;
