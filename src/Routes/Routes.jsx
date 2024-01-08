import { createBrowserRouter } from 'react-router-dom';
import Accordion from '../Components/Accordion/Accordion';
import Card from '../Components/Cards/Card';
import Home from '../Home/Home';
import CodeBox from '../Shared/CodeBox/CodeBox';
import Button from './../Components/Buttons/Button';
import Form from './../Components/Forms/Form';
import Hero from './../Components/Hero/Hero';
import Loading from './../Components/Loading/Loading';
import Slider from './../Components/Sliders/Slider';
import MainLayout from './../Layouts/MainLayout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/Components',
        element: <MainLayout />,
        children: [
            {
                path: 'hero',
                element: <Hero></Hero>
            },
            {
                path: 'slider',
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
                path: 'loading',
                element: <Loading />
            },
            {
                path: 'new',
                element: <CodeBox></CodeBox>
            }
        ]
    }
]);
