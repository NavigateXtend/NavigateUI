import Form1 from './Part1/Form1';
import Form2 from './Part1/Form2';
import Form3 from './Part1/Form3';
import Form4 from './Part1/Form4';
import Form5 from './Part1/Form5';
import Form6 from './Part1/Form6';

const Form = () => {
    return (
        <div className="grid grid-cols-1 space-y-10">
            <>
                <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">Login Form With Social Icons</h1>
                <Form6></Form6>
            </>
            <>
                <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">@Simple Login Form</h1>
                <Form1></Form1>
            </>
            <>
                <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">@Simple Register Form</h1>
                <Form5></Form5>
            </>
            <>
                <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">@Simple Login Form 2</h1>
                <Form2></Form2>
            </>
            <>
                <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">@Simple Login Form 3</h1>
                <Form3></Form3>
            </>

            <>
                <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">@Switchable Login & Register Form</h1>
                <Form4></Form4>
            </>
        </div>
    );
};

export default Form;
