import { InputType1 } from '@/Components/Input/InputType1/InputType1';
import { InputType2 } from '@/Components/Input/InputType2/InputType2';
import { InputType3 } from '@/Components/Input/InputType3/InputType3';
import { InputType4 } from '@/Components/Input/InputType4/InputType4';
import { InputType5 } from '@/Components/Input/InputType5/InputType5';

export const metadata = {
    title: 'Input Components',
    description: 'Input tailwind components'
};

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100 dark:text-white"># Default Input box</h1>
            <InputType1/>
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100 dark:text-white"># Input with ring</h1>
            <InputType2/>
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100 dark:text-white"># Input with ring</h1>
            <InputType3/>
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100 dark:text-white"># Input with ring</h1>
            <InputType4/>
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100 dark:text-white"># Input with ring</h1>
            <InputType5/>
        </div>
    );
};

export default page;
