import Skeleton1 from '@/Components/Skeleton/Skeleton1/Skeleton1';
import Skeleton2 from '@/Components/Skeleton/Skeleton2/Skeleton2';
import Skeleton3 from '@/Components/Skeleton/Skeleton3/Skeleton3';
import Skeleton4 from '@/Components/Skeleton/Skeleton4/Skeleton4';
import Skeleton5 from '@/Components/Skeleton/Skeleton5/Skeleton5';
import Skeleton6 from '@/Components/Skeleton/Skeleton6/Skeleton6';
import Skeleton7 from '@/Components/Skeleton/Skeleton7/Skeleton7';

export const metadata = {
    title: 'Skeleton Components',
    description: 'Skeleton tailwind components'
};

const Skeleton = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="m-0  px-3 py-0 text-base font-bold italic underline opacity-70 sm:text-lg md:text-xl">Avatar loading skeleton</h1>
            <Skeleton1 />

            <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Product Details loading skeleton</h1>
            <Skeleton4 />

            <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Ecommerce Card Skeleton</h1>
            <Skeleton2 />

            <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Ecommerce Card Skeleton</h1>
            <Skeleton3 />

            <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Social media post skeleton</h1>
            <Skeleton5 />

            <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Social media post skeleton</h1>
            <Skeleton6 />

            <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Social media post skeleton</h1>
            <Skeleton7 />
        </div>
    );
};

export default Skeleton;
