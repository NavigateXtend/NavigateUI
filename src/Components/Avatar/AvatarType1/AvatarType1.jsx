import React from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const AvatarType1 = () => {
    return (
        // you can remove the blur by removing hover:blur-[2px] duration-500 these classes 
        <div className="flex flex-wrap justify-between">
            <img className="w-[70px] h-[70px] object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?smartwatch" alt="" />
            <img className="w-[100px] h-[100px] object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?smartwatch" alt="" />
            <img className="w-[120px] h-[120px] object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?smartwatch" alt="" />
        </div>
    );
};

export default AvatarType1;`;

const AvatarType1 = () => {
    return (
        // you can remove the blur by removing hover:blur-[2px] duration-500 these classes
        <CodeBox codeStr={codeStr}>
            <div className="flex items-center flex-wrap justify-around">
                <img className="w-[70px] h-[70px] object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?smartwatch" alt="" />
                <img className="w-[100px] h-[100px] object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?smartwatch" alt="" />
                <img className="w-[120px] h-[120px] object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?smartwatch" alt="" />
            </div>
        </CodeBox>
    );
};

export default AvatarType1;