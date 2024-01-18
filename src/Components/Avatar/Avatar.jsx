import { useEffect } from 'react';
import AvatarType1 from './AvatarType1/AvatarType1';
import AvatarType2 from './AvatarType2/AvatarType2';
import AvatarType3 from './AvatarType3/AvatarType3';
import AvatarType4 from './AvatarType4/AvatarType4';
import AvatarType5 from './AvatarType5/AvatarType5';
import AvatarType6 from './AvatarType6/AvatarType6';
import AvatarType7 from './AvatarType7/AvatarType7';
import AvatarType8 from './AvatarType8/AvatarType8';

const Avatar = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
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
            {/* avatar with Add Icon  */}
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Avatar with Add Button</h1>
                <AvatarType5 />
            </div>
            {/* Disabled Offline Avatar  */}
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Disabled Offline Avatar</h1>
                <AvatarType6 />
            </div>
            {/* Male Avatar  */}
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800">#Avatar With Male Gender Icon</h1>
                <AvatarType7 />
            </div>
            {/* Female Avatar  */}
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800">#Avatar With Female Gender Icon</h1>
                <AvatarType8 />
            </div>
        </div>
    );
};

export default Avatar;
