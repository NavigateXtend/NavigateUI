import Button1 from './Buttons1/Button1';
import Button2 from './Buttons2/Button2';

const Button = () => {
    return (
        <div className="text-center">
            <h1 className=" mb-20 border-gray-700 text-2xl font-semibold text-gray-800 md:text-3xl">Explore The Button Collections</h1>
            <Button1 />
            <Button2 />
        </div>
    );
};

export default Button;
