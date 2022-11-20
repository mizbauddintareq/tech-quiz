import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizzes = () => {
  const quizzes = useLoaderData().data;
  //   console.log(quizzes.questions);
  return (
    <div className="w-10/12 mx-auto">
      {quizzes?.questions?.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
};

export default Quizzes;
