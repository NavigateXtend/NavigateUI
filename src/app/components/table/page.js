import Table1 from '@/components/Table/Table1';
import Table2 from '@/components/Table/Table2';
import Table3 from '@/components/Table/Table3';

export const metadata = {
  title: 'Table Components',
  description: 'Table tailwind components'
};

export default function TablePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Simple Table</h1>
      <Table1 />
      <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Simple Table with button and images</h1>
      <Table2 />
      <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Simple Table with button and images</h1>
      <Table3 />
    </div>
  );
}
