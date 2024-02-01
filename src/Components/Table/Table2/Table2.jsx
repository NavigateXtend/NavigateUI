import React from 'react';

const Table2 = () => {
    return (
        <div className='overflow-x-auto '>
        <table className='min-w-[90%] shadow-md   border mx-auto border-gray-100  my-6'>

        <thead>
          <tr className=' border-b'> 
          <th className="py-2 px-4  text-center">Image</th>
            <th className="py-2 px-4  text-center">ID</th>
            <th className="py-2 px-4  text-center">Product Name</th>
            

            <th className="py-2 px-4  text-center">Options</th>
          </tr>
        </thead>
          <tbody>
          <tr >
          <td className="py-4 px-4  flex justify-center">
                <img src='https://source.unsplash.com/800x600/?hockey'  className="h-12 w-12 object-cover" />
              </td>
              <td className="py-2 px-4   text-center">123</td>
              <td className="py-2 px-4  text-center">Hockey</td>
             

              <td className="py-2 px-4  flex justify-center items-center">
                <button className="bg-blue-500 text-white py-1 px-2 rounded">
                  Details
                </button>
                {/* Add more options as needed */}
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>


        </table>
    </div>
    );
};

export default Table2;