import { Helmet } from 'react-helmet';
import Form1 from './Part1/Form1';
import Form2 from './Part1/Form2';
import Form3 from './Part1/Form3';
import Form4 from './Part1/Form4';

const Form = () => {
    return (
        <>
            <Helmet>
                <title>Form Component | Unify UI</title>
            </Helmet>
            <div className="grid grid-cols-1 space-y-10">
                <>
                    <h1 className="m-0 p-0 text-xl font-bold italic underline opacity-70">@Simple Login Form</h1>
                    <Form1></Form1>
                </>
                <>
                    <h1 className="m-0 p-0 text-xl font-bold italic underline opacity-70">@Simple Login Form 2</h1>
                    <Form2></Form2>
                </>
                <>
                    <h1 className="m-0 p-0 text-xl font-bold italic underline opacity-70">@Simple Login Form 3</h1>
                    <Form3></Form3>
                </>
                <>
                    <h1 className="m-0 p-0 text-xl font-bold italic underline opacity-70">@Switchable Login & Register Form</h1>
                    <Form4></Form4>
                </>
            </div>
        </>
    );
};

export default Form;
