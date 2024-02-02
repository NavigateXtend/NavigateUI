import { useEffect } from 'react';
import Form1 from './Form1/Form1';
import Form4 from './Form4/Form4';
import Form5 from './Form5/Form5';
import Form6 from './Form6/Form6';
import Form7 from './Form7/Form7';
import Form8 from './Form8/Form8';

const Form = () => {
    // For starting the scroll form the top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="grid grid-cols-1 space-y-10">
            <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Login Form With Social Icons</h1>
            <Form1></Form1>
            {/* <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Simple Login Form</h1>
            <Form2></Form2>
            {/* <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800">#Form</h1>
            <Form3></Form3> */}
            <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Simple Form 1</h1>
            <Form4></Form4>
            <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Simple Login Form 2</h1>
            <Form5></Form5>
            <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Simple Login Form 3</h1>
            <Form6></Form6>
            <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Simple Login Form 4</h1>
            <Form8></Form8>
            <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Switchable Login & Register Form</h1>
            <Form7></Form7>
        </div>
    );
};

export default Form;
