import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../Layouts/MainLayout";
import Slider from "./../Components/Sliders/Slider";
import Button from "./../Components/Buttons/Button";
import Card from "../Components/Cards/Card";
import Form from "./../Components/Forms/Form";
import Banner from "../Components/Banners/Banner";
import CodeBox from "../Shared/CodeBox/CodeBox";
import Accordion from "../Components/Accordion/Accordion";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path:"/new",
        element:<CodeBox></CodeBox>
      }
    ],
  },
]);
