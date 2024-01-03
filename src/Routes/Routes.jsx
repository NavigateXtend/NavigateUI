import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../Layouts/MainLayout";
import Slider from "./../Components/Sliders/Slider";
import Button from "./../Components/Buttons/Button";
import Card from "../Components/Cards/Card";
import Form from "./../Components/Forms/Form";
import Banner from "../Components/Banners/Banner";
import CodeBox from "../Shared/CodeBox/CodeBox";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: "/banner",
        element: <Banner />,
      },
      {
        path: "/slider",
        element: <Slider />,
      },
      {
        path: "/button",
        element: <Button />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path:"/new",
        element:<CodeBox></CodeBox>
      }
    ],
  },
]);
