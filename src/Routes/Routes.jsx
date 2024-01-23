import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './../Layouts/MainLayout';
import Carousel from '../Components/Carousel/Carousel';
import Button from './../Components/Button/Button';
import Card from '../Components/Card/Card';
import Form from './../Components/Form/Form';
import Accordion from '../Components/Accordion/Accordion';
import Home from '../Home/Home';
import Loading from './../Components/Spinner/Loading';
import Hero from './../Components/Hero/Hero';
import Skeleton from '../Components/Skeleton/Skeleton';
import Avatar from '../Components/Avatar/Avatar';
import Modal from '../Components/Modal/Modal';
import SpeedDial from '../Components/SpeedDial/SpeedDial';
import Tooltip from '../Components/Tooltip/Tooltip';

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
                path: 'avatar',
                element: <Avatar />
            },
            {
                path: 'accordion',
                element: <Accordion />
            },
            {
                path: 'button',
                element: <Button />
            },
            {
                path: 'carousel',
                element: <Carousel />
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
                path: 'hero',
                element: <Hero />
            },
            {
                path: 'modal',
                element: <Modal />
            },
            {
                path: 'speed dial',
                element: <SpeedDial></SpeedDial>
            },
            {
                path: 'skeleton',
                element: <Skeleton />
            },
            {
                path: 'spinner',
                element: <Loading />
            },
            {
                path:'tooltip',
                element:<Tooltip></Tooltip>
            }
        ]
    }
]);
