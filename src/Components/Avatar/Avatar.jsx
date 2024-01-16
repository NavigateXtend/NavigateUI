import React from 'react';
import AvatarType1 from './AvatarType1/AvatarType1';
import AvatarType2 from './AvatarType2/AvatarType2';
import AvatarType3 from './AvaterType3/AvatarType3';
import AvatarType4 from './AvatarType4/AvatarType4';
import AvatarType5 from './AvatarType5/AvatarType5';

const Avatar = () => {
    return (
        <div>
            {/* square avatar  */}
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Default square</h1>
                <AvatarType1></AvatarType1>
            </div>
            {/* circle avatar  */}
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Default circle</h1>
                <AvatarType2></AvatarType2>
            </div>
            {/* Active avatar  */}
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Active avatar</h1>
                <AvatarType3></AvatarType3>
            </div>
            {/* avatar with Edit Icon  */}
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Avatar with edit icon</h1>
                <AvatarType4 />
            </div>
            {/* avatar with Edit Icon  */}
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Avatar with Add Button</h1>
                <AvatarType5 />
            </div>
        </div>
    );
};

export default Avatar;