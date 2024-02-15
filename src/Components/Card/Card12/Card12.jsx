import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';

const codestr = `
import { useState } from 'react';

const Card12 = () => {
    // Color and size array
    const color = [{label :'Black',value:'Black'},{label :'White',value:'White'},{label :'Brown',value:'Brown'}]
    const size = [{label:'Small',value:'s'},{label:'Medium',value:'m'},{label:'Large',value:'l'},{label:'Extra Large',value:'xl'}]
    // State for handeling radio button
    const [selectedColor, setSelectedColor] = useState('black');
    const [selectedSize, setSelectedSize] = useState('m');
    return (
        <div className="rounded-lg border shadow-sm w-full max-w-md mx-auto bg-white">
            {/* Product Title */}
            <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold ">Classic Leather Jacket</h3>
                <p className="text-sm text-gray-500">Made with genuine leather, our Classic Leather Jacket is the perfect addition to every wardrobe.</p>
            </div>
            {/* Category and price */}
            <div className="px-6 py-4 flex flex-col gap-4">
                <div className="flex justify-between items-end">
                    <h2 className="text-2xl font-medium text-center">$199.99</h2>
                    <p className="text-sm rounded-lg text-center p-2 bg-gray-700 text-white">Category: Clothing</p>
                </div>
                <div className="">
                    <img className="rounded-lg h-[350px]  bg-gray-600 object-cover w-full " src="https://source.unsplash.com/350x350/?jacket" />
                </div>
                {/* Color chossing option */}
                <div>
                <label className="font-medium text-base" htmlFor="color">
                    Color
                </label>
                <div className="flex items-center gap-3 mt-2" id="color">
                    {color?.map(item => (
                    <label key={item.value} className="text-sm font-medium flex items-center gap-1">
                        <input type="radio" value={item.value} checked={selectedColor === item?.value} onChange={(e) => setSelectedColor(e.target.value)} className="h-4 w-4 rounded-full border-2 cursor-pointer" />
                        {item?.label}
                    </label>
                    ))}
                </div>
            </div>
            {/* Size chossing option */}
            <div>
                <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base" htmlFor="size">
                    Size
                </label>
                <div className="flex items-center gap-3 mt-2" id="size">
                    {
                        size?.map(item => (
                        <label key={item.value} className="text-sm font-medium flex items-center gap-1">
                        <input type="radio" value={item.value} checked={selectedSize === item?.value} onChange={(e) => setSelectedSize(e.target.value)} className="h-4 w-4 rounded-full border-2 cursor-pointer" />
                        {item?.label}
                    </label>))
                    }
                </div>
            </div>
            </div>
            <div className="flex items-center p-6">
                <button className="bg-gray-900 text-white px-6 py-2 w-full rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Add to Cart</button>
            </div>
        </div>
    );
};

export default Card12;
`;

const Card12 = () => {
    // Color and size array
    const color = [
        { label: 'Black', value: 'Black' },
        { label: 'White', value: 'White' },
        { label: 'Brown', value: 'Brown' }
    ];
    const size = [
        { label: 'Small', value: 's' },
        { label: 'Medium', value: 'm' },
        { label: 'Large', value: 'l' },
        { label: 'Extra Large', value: 'xl' }
    ];

    return (
        <CodeBox codeStr={codestr}>
            <div className="bg-card mx-auto w-full max-w-md   rounded-lg border shadow-lg bg-white">
                {/* Product Title */}
                <div className="flex flex-col space-y-1.5 px-6 pt-6">
                    <h3 className="text-2xl font-semibold ">Classic Leather Jacket</h3>
                    <p className="text-sm text-gray-500">Made with genuine leather, our Classic Leather Jacket is the perfect addition to every wardrobe.</p>
                </div>
                {/* Category and price */}
                <div className="flex flex-col gap-4 p-6">
                    <div className="flex items-end justify-between">
                        <h2 className="text-center text-2xl font-medium">$199.99</h2>
                        <p className="rounded-lg bg-gray-700 p-2 text-center text-sm text-white">Category: Clothing</p>
                    </div>
                    <div className="">
                        <Image width={350} height={350} className="h-[300px] w-full  rounded-lg bg-gray-600 object-cover" src="https://source.unsplash.com/350x350/?jacket" alt="jacket" />
                    </div>
                    {/* Color chossing option */}
                    <div>
                        <label className="text-base font-medium" htmlFor="color">
                            Color
                        </label>
                        <div className="mt-2 flex items-center gap-3" id="color">
                            {color?.map((item, i) => (
                                <label key={item.value} className="flex items-center gap-1 text-sm font-medium">
                                    <input
                                        type="radio"
                                        value={item.value}
                                        name="le"
                                        defaultChecked={i === 0}
                                        // checked={selectedColor === item?.value}
                                        // onChange={(e) => setSelectedColor(e.target.value)}
                                        className="h-4 w-4 cursor-pointer rounded-full border-2"
                                    />
                                    {item?.label}
                                </label>
                            ))}
                        </div>
                    </div>
                    {/* Size chossing option */}
                    <div>
                        <label className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="size">
                            Size
                        </label>
                        <div className="mt-2 flex items-center gap-3" id="size">
                            {size?.map((item) => (
                                <label key={item.value} className="flex items-center gap-1 text-sm font-medium">
                                    <input
                                        type="radio"
                                        value={item.value}
                                        name="el"
                                        // checked={selectedSize === item?.value}
                                        // onChange={(e) => setSelectedSize(e.target.value)}
                                        className="h-4 w-4 cursor-pointer rounded-full border-2"
                                    />
                                    {item?.label}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center p-6">
                    <button className="w-full rounded-lg bg-gray-900 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">Add to Cart</button>
                </div>
            </div>
        </CodeBox>
    );
};

export default Card12;
