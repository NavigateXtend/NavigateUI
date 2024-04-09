import Modal1 from '@/components/Modal/Modal1';
import Modal2 from '@/components/Modal/Modal2';
import Modal3 from '@/components/Modal/Modal3';
import Modal4 from '@/components/Modal/Modal4';
import Modal5 from '@/components/Modal/Modal5';
import Modal6 from '@/components/Modal/Modal6';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Modal Components',
  description: 'Modal tailwind components'
};

export default function ModalPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Explore The Modal Collections</Heading>
      <Modal1 />
      <Modal2 />
      <Modal3 />
      <Modal4 />
      <Modal5 />
      <Modal6 />
    </div>
  );
}
