import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../Layouts/MainLayout";
import Slider from "./../Components/Sliders/Slider";
import Button from "./../Components/Buttons/Button";
import Card from "../Components/Cards/Card";
import Form from "./../Components/Forms/Form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
    ],
  },
]);
