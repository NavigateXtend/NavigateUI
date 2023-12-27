import Form1 from "./Part1/Form1";
import Form2 from "./Part1/Form2";

const Form = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Form1></Form1>
      <Form2></Form2>
      <Form1></Form1>
      <Form1></Form1>
    </div>
  );
};

export default Form;
