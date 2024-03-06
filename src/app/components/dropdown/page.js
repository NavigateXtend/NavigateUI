import AvatarDropDown from '@/components/DropDown/AvatarDropDown';
import BasicDropDown from '@/components/DropDown/BasicDropDown';
import BoxDropDown from '@/components/DropDown/BoxDropDown';
import FadeLeftDropDown from '@/components/DropDown/FadeLeftDropDown';
import FadeUpBoxDropDown from '@/components/DropDown/FadeUpBoxDropDown';
import FadeUpDropDown from '@/components/DropDown/FadeUpDropDown';

export default function DropDownPage() {
  return (
    <div>
      <BasicDropDown />
      <BoxDropDown />
      <FadeUpDropDown />
      <FadeUpBoxDropDown />
      <FadeLeftDropDown />
      <AvatarDropDown />
    </div>
  );
}
