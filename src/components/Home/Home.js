import { useLoaderData } from "react-router-dom";
import HeroBanner from "../HeroBanner/HeroBanner";
import QuizTopics from "../QuizTopics/QuizTopics";

const Home = () => {
  const quizTopics = useLoaderData().data;

  return (
    <div>
      <HeroBanner />
      <QuizTopics quizTopics={quizTopics} />
    </div>
  );
};

export default Home;
