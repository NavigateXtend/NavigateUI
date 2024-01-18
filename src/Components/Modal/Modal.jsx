import { useEffect } from 'react';
import Modal1 from './Modal1/Modal1';
import Modal2 from './Modal2/Modal2';
import Modal3 from './Modal3/Modal3';
import Modal4 from './Modal4/Modal4';

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
            {/* todo: modal's codebox code update */}
            <Modal1 />
            <Modal2 />
            <Modal3 />
            <Modal4 />
        </div>
    );
};

export default Modal;
