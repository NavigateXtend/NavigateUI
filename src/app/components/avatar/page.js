import AvatarType1 from '@/components/Avatar/AvatarType1';
import AvatarType2 from '@/components/Avatar/AvatarType2';
import AvatarType3 from '@/components/Avatar/AvatarType3';
import AvatarType4 from '@/components/Avatar/AvatarType4';
import AvatarType5 from '@/components/Avatar/AvatarType5';
import AvatarType6 from '@/components/Avatar/AvatarType6';
import AvatarType7 from '@/components/Avatar/AvatarType7';
import AvatarType8 from '@/components/Avatar/AvatarType8';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Avatar Components',
  description: 'Avatar tailwind components'
};

export default function Avatar() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Default square</Heading>
      <AvatarType1 />
      <Heading>Default circle</Heading>
      <AvatarType2 />
      <Heading>Active avatar</Heading>
      <AvatarType3 />
      <Heading>Avatar with edit icon</Heading>
      <AvatarType4 />
      <Heading>Avatar with Add Button</Heading>
      <AvatarType5 />
      <Heading>Disabled Offline Avatar</Heading>
      <AvatarType6 />
      <Heading>Avatar With Male Gender Icon</Heading>
      <AvatarType7 />
      <Heading>Avatar With Female Gender Icon</Heading>
      <AvatarType8 />
    </div>
  );
}
