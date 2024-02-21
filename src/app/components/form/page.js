import Form1 from '@/Components/Form/Form1/Form1';
import Form4 from '@/Components/Form/Form4/Form4';
import Form5 from '@/Components/Form/Form5/Form5';
import Form6 from '@/Components/Form/Form6/Form6';
import Form7 from '@/Components/Form/Form7/Form7';
import Form8 from '@/Components/Form/Form8/Form8';

export const metadata = {
    title: 'Form Components',
    description: 'Form tailwind components'
};

const Form = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-10 px-4 text-lg  font-semibold text-white md:text-xl lg:text-2xl"># Login Form With Social Icons</h1>
            <Form1></Form1>
            {/* <h1 className="lg:text-2xl md:text-xl text-lg   font-semibold px-4 mt-10 text-white"># Simple Login Form</h1>
            <Form2></Form2>
            {/* <h1 className="lg:text-2xl md:text-xl text-lg   font-semibold px-4 mt-10 text-white">#Form</h1>
            <Form3></Form3> */}
            <h1 className="mt-10 px-4 text-lg   font-semibold text-white md:text-xl lg:text-2xl"># Simple Form</h1>
            <Form4></Form4>
            <h1 className="mt-10 px-4 text-lg   font-semibold text-white md:text-xl lg:text-2xl"># Simple Login Form</h1>
            <Form5></Form5>
            <h1 className="mt-10 px-4 text-lg   font-semibold text-white md:text-xl lg:text-2xl"># Simple Login Form</h1>
            <Form6></Form6>
            <h1 className="mt-10 px-4 text-lg   font-semibold text-white md:text-xl lg:text-2xl"># Simple Login Form</h1>
            <Form8></Form8>
            <h1 className="mt-10 px-4 text-lg   font-semibold text-white md:text-xl lg:text-2xl"># Switchable Login & Register Form</h1>
            <Form7></Form7>
        </div>
    );
};

export default Form;
