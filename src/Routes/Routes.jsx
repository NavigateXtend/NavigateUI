import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './../Layouts/MainLayout';
import Slider from './../Components/Sliders/Slider';
import Button from './../Components/Buttons/Button';
import Card from '../Components/Cards/Card';
import Form from './../Components/Forms/Form';
import Accordion from '../Components/Accordion/Accordion';
import Home from '../Home/Home';
import Loading from './../Components/Loading/Loading';
import Hero from './../Components/Hero/Hero';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/components',
        element: <MainLayout />,
        children: [
            {
                path: 'hero',
                element: <Hero></Hero>
            },
            {
                path: 'carousel',
                element: <Slider />
            },
            {
                path: 'button',
                element: <Button />
            },
            {
                path: 'card',
                element: <Card />
            },
            {
                path: 'form',
                element: <Form />
            },
            {
                path: 'accordion',
                element: <Accordion />
            },
            {
                path: 'spinner',
                element: <Loading />
            }
        ]
    }
]);
