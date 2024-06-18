import Spinner1 from '@/components/Spinner/Spinner1';
import { Breadcrumb } from '@/ui/Client';
import { Heading } from '@/ui/Server';

export const metadata = {
    title: 'Spinner ',
    description: 'Spinner tailwind components'
};

export default function SpinnerPage() {
    return (
        <div>
            <Breadcrumb />
            <Heading>Explore The Spinner Collections</Heading>
            <Spinner1 />
        </div>
    );
}
