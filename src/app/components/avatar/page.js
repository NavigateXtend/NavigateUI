import AvatarType1 from '@/Components/Avatar/AvatarType1/AvatarType1';
import AvatarType2 from '@/Components/Avatar/AvatarType2/AvatarType2';
import AvatarType3 from '@/Components/Avatar/AvatarType3/AvatarType3';
import AvatarType4 from '@/Components/Avatar/AvatarType4/AvatarType4';
import AvatarType5 from '@/Components/Avatar/AvatarType5/AvatarType5';
import AvatarType6 from '@/Components/Avatar/AvatarType6/AvatarType6';
import AvatarType7 from '@/Components/Avatar/AvatarType7/AvatarType7';
import AvatarType8 from '@/Components/Avatar/AvatarType8/AvatarType8';

export const metadata = {
    title: 'Avatar Components',
    description: 'Avatar tailwind components'
};

const Avatar = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Default square</h1>
            <AvatarType1 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Default circle</h1>
            <AvatarType2></AvatarType2>
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Active avatar</h1>
            <AvatarType3></AvatarType3>
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Avatar with edit icon</h1>
            <AvatarType4 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Avatar with Add Button</h1>
            <AvatarType5 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Disabled Offline Avatar</h1>
            <AvatarType6 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100">#Avatar With Male Gender Icon</h1>
            <AvatarType7 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100">#Avatar With Female Gender Icon</h1>
            <AvatarType8 />
        </div>
    );
};

export default Avatar;
