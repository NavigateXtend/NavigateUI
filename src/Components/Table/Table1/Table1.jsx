import React from 'react';
import CodeBox from './../../../Shared/CodeBox/CodeBox';

const Table1 = () => {
    const codestr =`
    <div className='overflow-x-auto '>
        <table className='min-w-full shadow-md  border  border-gray-100  my-6'>

        <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 text-left border-b">Name</th>
              <th className="py-3 px-6 text-left border-b">Age</th>
              <th className="py-3 px-6 text-left border-b">City</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition duration-300">
              <td className="py-4 px-6 border-b">Shiyam </td>
              <td className="py-4 px-6 border-b">19</td>
              <td className="py-4 px-6 border-b">Dhaka</td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-300">
              <td className="py-4 px-6 border-b">Arif</td>
              <td className="py-4 px-6 border-b">17</td>
              <td className="py-4 px-6 border-b">Khulna</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>


        </table>
    </div>    
    `
    return (
  <CodeBox>
    <div className='overflow-x-auto '>
        <table className='min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6'>

        <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 text-left border-b">Name</th>
              <th className="py-3 px-6 text-left border-b">Age</th>
              <th className="py-3 px-6 text-left border-b">City</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition duration-300">
              <td className="py-4 px-6 border-b">Shiyam </td>
              <td className="py-4 px-6 border-b">19</td>
              <td className="py-4 px-6 border-b">Dhaka</td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-300">
              <td className="py-4 px-6 border-b">Arif</td>
              <td className="py-4 px-6 border-b">17</td>
              <td className="py-4 px-6 border-b">Khulna</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>


        </table>
    </div>
  </CodeBox>

    );
};

export default Table1;