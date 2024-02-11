import AvatarType1 from '@/Components/Avatar/AvatarType1/AvatarType1';
import AvatarType2 from '@/Components/Avatar/AvatarType2/AvatarType2';
import AvatarType3 from '@/Components/Avatar/AvatarType3/AvatarType3';
import AvatarType4 from '@/Components/Avatar/AvatarType4/AvatarType4';
import AvatarType5 from '@/Components/Avatar/AvatarType5/AvatarType5';
import AvatarType6 from '@/Components/Avatar/AvatarType6/AvatarType6';
import AvatarType7 from '@/Components/Avatar/AvatarType7/AvatarType7';
import AvatarType8 from '@/Components/Avatar/AvatarType8/AvatarType8';

const Avatar = () => {
    return (
        <>
            {/* square avatar  */}
            <h1 className="mt-10 px-4 text-2xl font-semibold text-slate-800"># Default square</h1>
            <AvatarType1 />
            {/* circle avatar  */}
            <h1 className="mt-10 px-4 text-2xl font-semibold text-slate-800"># Default circle</h1>
            <AvatarType2></AvatarType2>
            {/* Active avatar  */}
            <h1 className="mt-10 px-4 text-2xl font-semibold text-slate-800"># Active avatar</h1>
            <AvatarType3></AvatarType3>
            {/* avatar with Edit Icon  */}
            <h1 className="mt-10 px-4 text-2xl font-semibold text-slate-800"># Avatar with edit icon</h1>
            <AvatarType4 />
            {/* avatar with Add Icon  */}
            <h1 className="mt-10 px-4 text-2xl font-semibold text-slate-800"># Avatar with Add Button</h1>
            <AvatarType5 />
            {/* Disabled Offline Avatar  */}
            <h1 className="mt-10 px-4 text-2xl font-semibold text-slate-800"># Disabled Offline Avatar</h1>
            <AvatarType6 />
            {/* Male Avatar  */}
            <h1 className="mt-10 px-4 text-2xl font-semibold text-slate-800">#Avatar With Male Gender Icon</h1>
            <AvatarType7 />
            {/* Female Avatar  */}
            <h1 className="mt-10 px-4 text-2xl font-semibold text-slate-800">#Avatar With Female Gender Icon</h1>
            <AvatarType8 />
        </>
    );
};

export default Avatar;
