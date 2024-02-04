import { useEffect } from 'react';
import Modal1 from './Modal1/Modal1';
import Modal2 from './Modal2/Modal2';
import Modal3 from './Modal3/Modal3';
import Modal4 from './Modal4/Modal4';
import Modal5 from './Modal5/Modal5';
import Modal6 from './Modal6/Modal6';

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
            <h1  className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Simple modal with a question</h1>
            <Modal1 />
            <h1  className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Simple modal with a cross button</h1>
            <Modal2 />
            <h1  className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Simple notification design modal</h1>
            <Modal3 />
            <h1  className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Login from in modal</h1>
            <Modal4 />
            <h1  className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Simple Image modal</h1>
            <Modal5 />
            <h1  className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Full screen modal with payment </h1>
            <Modal6 />
        </div>
    );
};

export default Modal;
