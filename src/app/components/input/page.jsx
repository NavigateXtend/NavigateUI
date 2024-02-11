import {InputType1} from "@/Components/Input/InputType1/InputType1";
import { InputType2 } from "@/Components/Input/InputType2/InputType2";

const page = () => {
    return (
        <div>
            <h1 className="mt-10 px-4 text-2xl font-semibold text-slate-800"># Default Input box</h1>
            <InputType1></InputType1>
            <h1 className="mt-10 px-4 text-2xl font-semibold text-slate-800"># Input  with ring</h1>
            <InputType2></InputType2>
        </div>
    );
};

export default page;