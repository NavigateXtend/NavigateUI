import Form1 from '@/components/Form/Form1';
import Form4 from '@/components/Form/Form4';
import Form5 from '@/components/Form/Form5';
import Form6 from '@/components/Form/Form6';
import Form7 from '@/components/Form/Form7';
import Form8 from '@/components/Form/Form8';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Form Components',
  description: 'Form tailwind components'
};

export default function FormPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Login Form With Social Icons</Heading>
      <Form1 />
      {/* <h1 className="lg:text-2xl md:text-xl text-lg   font-semibold px-4 mt-10 text-white"> Simple Login Form</h1>
            <Form2/>
            {/* <h1 className="lg:text-2xl md:text-xl text-lg   font-semibold px-4 mt-10 text-white">Form</h1>
            <Form3/> */}
      <Heading>Simple Form</Heading>
      <Form4 />
      <Heading>Simple Login Form</Heading>
      <Form5 />
      <Heading>Simple Login Form</Heading>
      <Form6 />
      <Heading>Simple Login Form</Heading>
      <Form8 />
      <Heading>Switchable Login & Register Form</Heading>
      <Form7 />
    </div>
  );
}
