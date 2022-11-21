import Topic from "../Topic/Topic";

const QuizTopics = ({ quizTopics }) => {
  return (
    <div className="my-14">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 w-11/12 mx-auto">
        {quizTopics?.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default QuizTopics;
