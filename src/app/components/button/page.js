import Button1 from '@/Components/Button/Buttons1/Button1';
import Button2 from '@/Components/Button/Buttons2/Button2';

export const metadata = {
    title: 'Button Components',
    description: 'Button tailwind components'
};

const Button = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="my-10 border-gray-700 text-2xl font-semibold text-white md:text-3xl">Explore The Button Collections</h1>
            <Button1 />
            <Button2 />
        </div>
    );
};

export default Button;
