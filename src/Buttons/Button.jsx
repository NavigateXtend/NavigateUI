import Button1 from "./Buttons1/Button1";
import Button2 from "./Buttons2/Button2";

const Button = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold pt-10  pb-2 text-gray-800 border-gray-700">
        Explore The Card Collections ✅
      </h1>
      <Button1 />
      <Button2 />
    </div>
  );
};

export default Button;
