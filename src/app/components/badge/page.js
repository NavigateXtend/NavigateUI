import React from 'react';
import Badge1 from '@/Components/Badge/Badge1/Badge1';
import Badge2 from '@/Components/Badge/Badge2/Badge2';
const page = () => {
    return (
        <div>
        
           <h1 className="text-2xl font-semibold px-4 mt-10 text-white"># Simple notification badge</h1>
            <Badge1></Badge1>
            <h1 className="text-2xl font-semibold px-4 mt-10 text-white"># Notification badge with numbers</h1>
            <Badge2></Badge2>
        </div>

    )
};

export default page;
