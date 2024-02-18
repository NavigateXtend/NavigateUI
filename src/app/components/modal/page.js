import Modal1 from '@/Components/Modal/Modal1/Modal1';
import Modal2 from '@/Components/Modal/Modal2/Modal2';
import Modal3 from '@/Components/Modal/Modal3/Modal3';
import Modal4 from '@/Components/Modal/Modal4/Modal4';
import Modal5 from '@/Components/Modal/Modal5/Modal5';
import Modal6 from '@/Components/Modal/Modal6/Modal6';

export const metadata = {
    title: 'Modal Components',
    description: 'Modal tailwind components'
};

const Modal = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Modal1 />
            <Modal2 />
            <Modal3 />
            <Modal4 />
            <Modal5 />
            <Modal6 />
        </div>
    );
};

export default Modal;
