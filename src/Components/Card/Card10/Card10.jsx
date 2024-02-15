import React from 'react';
import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';

const codeStr = `const Card10 = () => {
    const items = [
        { id: 1, name: 'Item 1', deliveryDate: '7th january', price: '$10.99', imgToFetch: 'bed' },
        { id: 2, name: 'Item 2', deliveryDate: '17th december', price: '$20.99', imgToFetch: 'furniture' },
        { id: 3, name: 'Item 3', deliveryDate: '12th march', price: '$30.99', imgToFetch: 'door' },
        { id: 4, name: 'Item 4', deliveryDate: '24th February', price: '$10.99', imgToFetch: 'golf set' },
        { id: 4, name: 'Item 5', deliveryDate: '21th February', price: '$50.99', imgToFetch: 'i phone' }
    ];
   
    return (
        <div className="bg-gray-250 shadow-md max-w-[800px] bg-white md:w-[700px] p-8 my-20 space-y-6">
            {/* top part  */}
            <div className="flex justify-between items-center">
                <h4 className="text-xl font-medium text-slate-800 uppercase">order</h4>
                <p className="text-sm font-medium text-gray-400 uppercase">edit cart</p>
            </div>
            <hr />
            {/*  Cart  map */}
            {items.map((item, idx) => (
                <div key={item?.id} className="flex justify-between items-center border-b pb-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <img className="w-[75px] h-[75px] rounded-lg bg-slate-500" src={\`https://source.unsplash.com/75x75/?\${item?.imgToFetch}\`} alt="" />
                        <div>
                            <h5 className="text-lg font-medium">{item?.name}</h5>
                            <p className="text-sm text-gray-400">Delivery {item?.deliveryDate}</p>
                        </div>
                    </div>
                    {/* item increase decrees  */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-10">
                        <div className="space-x-3">
                            <span className="py-1 px-2 hover:text-[#3EBFA4] text-xl duration-200">-</span>
                            <span className="py-1 px-2.5 border hover:bg-[#3EBFA4] hover:text-white hover:border-[#3EBFA4] duration-300 ease-in-out rounded-sm">4</span>
                            <span className="py-1 px-2 hover:text-[#3EBFA4] text-xl duration-200">+</span>
                        </div>
                        <h6 className="text-xl font-medium text-slate-800">{item?.price}</h6>
                    </div>
                </div>
            ))}
            {/* calculation part  */}
            <div className="space-y-10">
                <div className="flex justify-between items-center py-6">
                    <h5 className="text-xl text-slate-800 capitalize">total Price :</h5>
                    <h4 className="text-xl font-medium text-slate-800">$155.99</h4>
                </div>
                <button className="font-semibold bg-[#3EBFA4] text-white py-4 w-full duration-500 active:bg-[#278b76]">proceed to checkout</button>
            </div>
        </div>
    );
};
export default Card10;
`;

const Card10 = () => {
    const items = [
        { id: 1, name: 'Item 1', deliveryDate: '7th january', price: '$10.99', imgToFetch: 'bed' },
        { id: 2, name: 'Item 2', deliveryDate: '17th december', price: '$20.99', imgToFetch: 'furniture' },
        { id: 3, name: 'Item 3', deliveryDate: '12th march', price: '$30.99', imgToFetch: 'door' },
        { id: 4, name: 'Item 4', deliveryDate: '24th February', price: '$10.99', imgToFetch: 'golf set' },
        { id: 4, name: 'Item 5', deliveryDate: '21th February', price: '$50.99', imgToFetch: 'i phone' }
    ];

    return (
        <CodeBox codeStr={codeStr}>
            <div className="bg-gray-250 max-w-[800px] bg-white mx-auto my-20 space-y-6 p-8 shadow-md md:w-[700px]">
                {/* top part  */}
                <div className="flex items-center justify-between">
                    <h4 className="text-xl font-medium uppercase text-slate-800">order</h4>
                    <p className="text-sm font-medium uppercase text-gray-400">edit cart</p>
                </div>
                <hr />
                {/*  Cart  map */}
                {items.map((item, idx) => (
                    <div key={item?.id} className="flex  items-center justify-between border-b pb-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <Image
                                width={75}
                                height={75}
                                className="h-[75px] w-[75px] rounded-lg bg-slate-500"
                                src={`https://source.unsplash.com/75x75/?${item?.imgToFetch}`}
                                alt={`?${item?.imgToFetch}`}
                            />
                            <div className="">
                                <h5 className="text-lg font-medium">{item?.name}</h5>
                                <p className="text-sm text-gray-400 ">Delivery {item?.deliveryDate}</p>
                            </div>
                        </div>
                        {/* item increase decrees  */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-10">
                            <div className="space-x-3">
                                <span className="px-2 py-1 text-xl duration-200 hover:text-[#3EBFA4]">-</span>
                                <span className="rounded-sm border px-2.5 py-1 duration-300 ease-in-out hover:border-[#3EBFA4] hover:bg-[#3EBFA4] hover:text-white">4</span>
                                <span className="px-2 py-1 text-xl duration-200 hover:text-[#3EBFA4]">+</span>
                            </div>
                            <h6 className="text-xl font-medium text-slate-800">{item?.price}</h6>
                        </div>
                    </div>
                ))}
                {/* calculation part  */}
                <div className="space-y-10 py-6">
                    <div className="flex items-center justify-between">
                        <h5 className="text-xl capitalize text-slate-800">total Price :</h5>
                        <h4 className="text-xl font-medium text-slate-800">$155.99</h4>
                    </div>
                    <button className=" w-full bg-[#3EBFA4] py-4 font-semibold uppercase text-white duration-500 active:bg-[#278b76]">proceed to checkout</button>
                </div>
            </div>
        </CodeBox>
    );
};

export default Card10;
