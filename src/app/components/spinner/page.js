import Spinner1 from '@/Components/Spinner/Part1/Spinner1';

export const metadata = {
    title: 'Spinner ',
    description: 'Spinner tailwind components'
};

function page() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Spinner1 />
        </div>
    );
}

export default page;
