import Form1 from "./Part1/Form1";
import Form2 from "./Part1/Form2";
import Form3 from "./Part1/Form3";

const Form = () => {
  return (
    <div className="grid grid-cols-1 space-y-10">
      <>
        <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">
          @Simple Login Form
        </h1>
        <Form1></Form1>
      </>
      <>
        <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">
          @Simple Login Form 2
        </h1>
        <Form2></Form2>
      </>
      <>
        <h1 className="text-xl italic font-bold opacity-70 underline m-0 p-0">
          @Switchable Login & Register Form
        </h1>
        <Form3></Form3>
      </>
    </div>
  );
};

export default Form;
