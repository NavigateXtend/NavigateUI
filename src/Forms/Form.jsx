import Form2 from "./Part1/Form1";
import Form3 from "./Part1/Form3";
import Form1 from "./Part1/Form2";

const Form = () => {
  return (
    <div className="grid grid-cols-1  space-y-20">
      <Form1></Form1>
      <Form2></Form2>
      <Form3></Form3>
    </div>
  );
};

export default Form;
