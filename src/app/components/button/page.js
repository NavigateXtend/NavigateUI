import Button1 from '@/Components/Button/Button1';
import Button2 from '@/Components/Button/Button2';

export const metadata = {
  title: 'Button Components',
  description: 'Button tailwind components'
};

export default function ButtonPage() {
  return (
    <div>
      <h1 className="my-10 border-gray-700 text-2xl font-semibold text-white md:text-3xl">Explore The Button Collections</h1>
      <Button1 />
      <Button2 />
    </div>
  );
}
