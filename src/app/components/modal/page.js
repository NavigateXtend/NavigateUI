import Modal1 from '@/Components/Modal/Modal1';
import Modal2 from '@/Components/Modal/Modal2';
import Modal3 from '@/Components/Modal/Modal3';
import Modal4 from '@/Components/Modal/Modal4';
import Modal5 from '@/Components/Modal/Modal5';
import Modal6 from '@/Components/Modal/Modal6';

export const metadata = {
  title: 'Modal Components',
  description: 'Modal tailwind components'
};

export default function ModalPage() {
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
}
