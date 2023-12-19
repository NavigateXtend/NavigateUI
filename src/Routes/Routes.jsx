import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../Layouts/MainLayout";
import { Slider1 } from "../Sliders/Slider1/Slider1";
import Button from "../Buttons/Button";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/slider",
        element: <Slider1 />,
      },
      {
        path: "/button",
        element: <Button />,
      },
    ],
  },
]);
