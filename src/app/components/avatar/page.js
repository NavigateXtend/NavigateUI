import AvatarType1 from '@/components/Avatar/AvatarType1';
import AvatarType2 from '@/components/Avatar/AvatarType2';
import AvatarType3 from '@/components/Avatar/AvatarType3';
import AvatarType4 from '@/components/Avatar/AvatarType4';
import AvatarType5 from '@/components/Avatar/AvatarType5';
import AvatarType6 from '@/components/Avatar/AvatarType6';
import AvatarType7 from '@/components/Avatar/AvatarType7';
import AvatarType8 from '@/components/Avatar/AvatarType8';

export const metadata = {
  title: 'Avatar Components',
  description: 'Avatar tailwind components'
};

export default function Avatar() {
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
}
