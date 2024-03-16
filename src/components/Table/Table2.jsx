import React from 'react';
import CP from '@/ui/CP';
import Image from 'next/image';

const Table2 = () => {
  const code = `
    <div className="overflow-x-auto">
    <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
        <thead>
            <tr className="bg-[#0095FF] text-white">
                <th className="py-4 px-6 text-lg text-left border-b">Product Image</th>
                <th className="py-4 px-6 text-lg text-left border-b">Product Name</th>
                <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
                <td className="py-4 px-4 flex justify-start">
                    <img src="https://source.unsplash.com/64x64/?microphone" alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">Dual Speaker</td>
                <td className="py-4 px-6 border-b text-lg font-medium">$99.99</td>
                <td className="py-4 px-6 border-b text-end">
                    <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                </td>
            </tr>
            <tr className="hover:bg-gray-50 border-b transition duration-300">
                <td className="py-4 px-4 flex justify-start">
                    <img src="https://source.unsplash.com/64x64/?phone" alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">Samsung s22</td>
                <td className="py-4 px-6 border-b text-lg font-medium">$599.99</td>
                <td className="py-4 px-6 border-b text-end">
                    <button className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Details</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

  `;
  return (
    <CP code={code}>
      <div className="overflow-x-auto">
        <table className="mx-auto my-6 min-w-[90%] rounded-md border border-gray-100 shadow-md">
          <thead>
            <tr className="bg-[#0095FF] text-white">
              <th className="border-b px-6 py-4 text-left text-lg">Product Image</th>
              <th className="border-b px-6 py-4 text-left text-lg">Product Name</th>
              <th className="border-b px-6 py-4 text-left text-lg">Price</th>
              <th className="border-b px-6 py-4 text-end text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50 text-black transition duration-300 hover:bg-gray-300">
              <td className="flex justify-start px-4 py-4">
                <Image width={64} height={64} src="https://source.unsplash.com/64x64/?microphone" alt="table navigate ui" className="h-16 w-16 rounded-md bg-gray-300 object-cover" />
              </td>
              <td className="border-b px-6 py-4 text-xl font-medium">Dual Speaker</td>
              <td className="border-b px-6 py-4 text-lg font-medium">$99.99</td>
              <td className="border-b px-6 py-4 text-end">
                <button className="scale-100 rounded-md bg-blue-500 px-4 py-2 text-white transition-all duration-100 hover:scale-110">Details</button>
              </td>
            </tr>
            <tr className="bg-gray-50 text-black transition duration-300 hover:bg-gray-300">
              <td className="flex justify-start px-4 py-4">
                <Image width={64} height={64} src="https://source.unsplash.com/64x64/?phone" alt="table navigate ui" className="h-16 w-16 rounded-md bg-gray-300 object-cover" />
              </td>
              <td className="border-b px-6 py-4 text-xl font-medium">Samsung s22</td>
              <td className="border-b px-6 py-4 text-lg font-medium">$599.99</td>
              <td className="border-b px-6 py-4 text-end">
                <button className="scale-100 rounded-md bg-blue-500 px-4 py-2 text-white transition-all duration-100 hover:scale-110">Details</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </CP>
  );
};

export default Table2;
