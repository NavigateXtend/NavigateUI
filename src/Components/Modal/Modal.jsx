import { useEffect } from 'react';
import Modal1 from './Modal1/Modal1';
import Modal2 from './Modal2/Modal2';
import Modal3 from './Modal3/Modal3';

const Modal = () => {
    // For starting the scroll form the top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div>
            <Modal1 />
            <Modal2 />
            <Modal3 />
        </div>
    );
};

export default Modal;
