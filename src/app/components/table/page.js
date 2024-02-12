import Table1 from '@/Components/Table/Table1/Table1';
import Table2 from '@/Components/Table/Table2/Table2';
import Table3 from '@/Components/Table/Table3/Table3';

const TablePage = () => {
    return (
        <div>
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Simple Table</h1>
            <Table1></Table1>
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Simple Table with button and images</h1>
            <Table2></Table2>
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Simple Table with button and images</h1>
            <Table3></Table3>
        </div>
    );
};

export default TablePage;
