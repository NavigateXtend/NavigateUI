import React from 'react';
import CodeBox from './../../../Shared/CodeBox/CodeBox';

const Table1 = () => {
    const codestr = `
    <div className="overflow-x-auto ">
    <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
        <thead>
            <tr className="bg-[#333333] text-white">
                <th className="py-3 px-6 text-left border-b">Name</th>
                <th className="py-3 px-6 text-left border-b">Age</th>
                <th className="py-3 px-6 text-left border-b">Gender</th>
                <th className="py-3 px-6  border-b text-end">Address</th>
            </tr>
        </thead>
        <tbody>
            <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b">Shiyam </td>
                <td className="py-4 px-6 border-b">19</td>
                <td className="py-4 px-6 border-b">Male</td>
                <td className="py-4 px-6 border-b text-end">Mirpur 15, Dhaka</td>
            </tr>
            <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b">Arif</td>
                <td className="py-4 px-6 border-b">17</td>
                <td className="py-4 px-6 border-b">Male</td>
                <td className="py-4 px-6 border-b text-end">Bagerhat, Khulna</td>
            </tr>
        </tbody>
    </table>
    </div>
    `;
    return (
        <CodeBox codeStr={codestr}>
            <div className="overflow-x-auto rounded-lg">
                <table className="mx-auto my-6 min-w-[90%]  rounded-lg border border-gray-100  shadow-md">
                    <thead>
                        <tr className="bg-[#333333] text-white">
                            <th className="border-b px-6 py-3 text-left">Name</th>
                            <th className="border-b px-6 py-3 text-left">Age</th>
                            <th className="border-b px-6 py-3 text-left">Gender</th>
                            <th className="border-b px-6  py-3 text-end">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-50 text-black transition duration-300 hover:bg-gray-300 ">
                            <td className="border-b px-6 py-4">Shiyam </td>
                            <td className="border-b px-6 py-4">19</td>
                            <td className="border-b px-6 py-4">Male</td>
                            <td className="border-b px-6 py-4 text-end">Mirpur 15, Dhaka</td>
                        </tr>
                        <tr className="bg-gray-50 text-black transition duration-300 hover:bg-gray-300">
                            <td className="border-b px-6 py-4">Arif</td>
                            <td className="border-b px-6 py-4">17</td>
                            <td className="border-b px-6 py-4">Male</td>
                            <td className="border-b px-6 py-4 text-end">Bagerhat, Khulna</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </CodeBox>
    );
};

export default Table1;
