import Button1 from '@/Components/Button/Buttons1/Button1';
import Button2 from '@/Components/Button/Buttons2/Button2';

export const metadata = {
    title: 'Button Components | Navigate UI',
    description: 'Button tailwind components'
};

const Button = () => {
    return (
        <div className="w-full text-center">
            <h1 className="my-10 border-gray-700 text-2xl font-semibold text-gray-800 md:text-3xl">Explore The Button Collections</h1>
            <Button1 />
            <Button2 />
        </div>
    );
};

export default Button;
