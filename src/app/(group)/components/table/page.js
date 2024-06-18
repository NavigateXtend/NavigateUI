import Table1 from '@/components/Table/Table1';
import Table2 from '@/components/Table/Table2';
import Table3 from '@/components/Table/Table3';
import { Breadcrumb } from '@/ui/Client';
import { Heading } from '@/ui/Server';

export const metadata = {
    title: 'Table Components',
    description: 'Table tailwind components'
};

export default function TablePage() {
    return (
        <div>
            <Breadcrumb />
            <Heading>Simple Table</Heading>
            <Table1 />
            <Heading>Simple Table with button and images</Heading>
            <Table2 />
            <Heading>Simple Table with button and images</Heading>
            <Table3 />
        </div>
    );
}
