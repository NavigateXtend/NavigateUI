import InputType1  from '@/components/Input/InputType1';
import InputType2  from '@/components/Input/InputType2';
import InputType3  from '@/components/Input/InputType3';
import InputType4  from '@/components/Input/InputType4';
import InputType5  from '@/components/Input/InputType5';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Input Components',
  description: 'Input tailwind components'
};

export default function InputPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Default Input box</Heading>
      <InputType1 />
      <Heading>Input with ring</Heading>
      <InputType2 />
      <Heading>Underline input</Heading>
      <InputType4 />
      <Heading>Floating input</Heading>
      <InputType3 />
      <Heading>Floating input inside</Heading>
      <InputType5 />
    </div>
  );
}
