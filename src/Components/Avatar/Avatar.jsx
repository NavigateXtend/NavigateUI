import React from 'react';
import AvatarType1 from './AvatarType1/AvatarType1';
import AvatarType2 from './AvatarType2/AvatarType2';
import AvatarType3 from './AvaterType3/AvatarType3';

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
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Active</h1>
                <AvatarType3></AvatarType3>
            </div>
        </div>
    );
};

export default Avatar;