import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Skeleton4 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
    const codeStr = `
<div className=" p-6 rounded-md shadow-md">
    <div className="animate-pulse">
        {/* Product Image Skeleton */}
        <div className="w-64 lg:h-64 md:h-52 h-48 rounded-lg bg-gray-300 mb-4"></div>
        {/* Product Title Skeleton */}
        <div className="w-2/3 h-8 rounded-lg bg-gray-300 mb-4"></div>
        {/* Product Description Skeleton */}
        <div className="w-full h-16 rounded-lg bg-gray-300 mb-4"></div>
    </div>
</div>
  `;

    return (
        <CodeBox codeStr={codeStr}>
            <div className=" p-6 rounded-md shadow-md">
                <div className="animate-pulse">
                    {/* Product Image Skeleton */}
                    <div className="w-64 lg:h-64 md:h-52 h-48 rounded-lg bg-gray-300 mb-4"></div>
                    {/* Product Title Skeleton */}
                    <div className="w-2/3 h-8 rounded-lg bg-gray-300 mb-4"></div>
                    {/* Product Description Skeleton */}
                    <div className="w-full h-16 rounded-lg bg-gray-300 mb-4"></div>
                </div>
            </div>

  
        </CodeBox>
    );
};

export default Skeleton4;
