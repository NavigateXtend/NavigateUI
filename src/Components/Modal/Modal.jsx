import { useEffect } from 'react';
import Modal1 from './Modal1/Modal1';

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
        </div>
    );
};

export default Modal;
