import React from 'react';
import Table1 from './Table1/Table1';
import Table2 from './Table2/Table2';

const Table = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Simple Table</h1>
            <Table1></Table1>
            <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Simple Table with button and images</h1>
            <Table2></Table2>
        </div>
    );
};

export default Table;