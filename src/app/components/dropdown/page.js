import AvatarDropDown from '@/components/DropDown/AvatarDropDown';
import BasicDropDown from '@/components/DropDown/BasicDropDown';
import BoxDropDown from '@/components/DropDown/BoxDropDown';
import FadeLeftDropDown from '@/components/DropDown/FadeLeftDropDown';
import FadeUpBoxDropDown from '@/components/DropDown/FadeUpBoxDropDown';
import FadeUpDropDown from '@/components/DropDown/FadeUpDropDown';
import Heading from '@/ui/Heading';

export default function DropDownPage() {
  return (
    <div className="mt-5">
      <Heading>Basic Dropdown</Heading>
      <BasicDropDown />
      <Heading>Box Dropdown</Heading>
      <BoxDropDown />
      <Heading>Fade Up Dropdown</Heading>
      <FadeUpDropDown />
      <Heading>Fade Up Box Dropdown</Heading>
      <FadeUpBoxDropDown />
      <Heading>Fade Left Dropdown</Heading>
      <FadeLeftDropDown />
      <Heading>Avatar Dropdown</Heading>
      <AvatarDropDown />
    </div>
  );
}
