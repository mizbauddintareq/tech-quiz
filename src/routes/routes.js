import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound/NotFound";
import Quizzes from "../components/Quizzes/Quizzes";
import Statistic from "../components/Statistic/Statistic";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home />,
      },
      {
        path: "/quizzes/:id",
        loader: async ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quizzes />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "statistic",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Statistic />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
