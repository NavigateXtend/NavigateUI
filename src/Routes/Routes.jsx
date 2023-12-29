import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../Layouts/MainLayout";
import Button from "../Buttons/Button";
import Card from "./../Cards/Card";
import Form from "./../Forms/Form";
import Slider from "../Sliders/Slider";

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
