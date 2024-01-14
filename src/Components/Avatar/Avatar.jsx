import React from 'react';
import AvatarType1 from './AvatarType1/AvatarType1';

const Avatar = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Default square</h1>
                <AvatarType1></AvatarType1>
            </div>
        </div>
    );
};

export default Avatar;