import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CountAnswer from "../CountAnswer/CountAnswer";
import Quiz from "../Quiz/Quiz";

const Quizzes = () => {
  const quizzes = useLoaderData().data;
  const [wrongCount, setWrongCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  return (
    <div className="grid md:grid-cols-5 gap-5 w-11/12 mx-auto">
      <div className="col-span-4">
        {quizzes?.questions?.map((quiz) => (
          <Quiz
            key={quiz.id}
            quiz={quiz}
            wrongCount={wrongCount}
            setWrongCount={setWrongCount}
            rightCount={rightCount}
            setRightCount={setRightCount}
          />
        ))}
      </div>
      <div className="col-span-1 text-center">
        <CountAnswer wrongCount={wrongCount} rightCount={rightCount} />
      </div>
    </div>
  );
};

export default Quizzes;
