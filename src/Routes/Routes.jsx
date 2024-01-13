import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../Layouts/MainLayout";
import Slider from "./../Components/Sliders/Slider";
import Button from "./../Components/Buttons/Button";
import Card from "../Components/Cards/Card";
import Form from "./../Components/Forms/Form";
import CodeBox from "../Shared/CodeBox/CodeBox";
import Accordion from "../Components/Accordion/Accordion";
import Home from "../Home/Home";
import Loading from "./../Components/Loading/Loading";
import Hero from './../Components/Hero/Hero';
import Skeleton from "../Components/Skeleton/Skeleton";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/Components",
    element: <MainLayout />,
    children: [
      {
        path: "hero",
        element: <Hero></Hero>,
      },
      {
        path: "slider",
        element: <Slider />,
      },
      {
        path: "button",
        element: <Button />,
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "accordion",
        element: <Accordion />,
      },
      {
        path: "loading",
        element: <Loading />,
      },
      {
        path:'skeleton',
        element:<Skeleton></Skeleton>
      }
    ],
  },
]);
