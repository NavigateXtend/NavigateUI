import BasicSwitchWithPeer from '@/components/Switch/BasicSwitchWithPeer';
import BasicSwitchWithState from '@/components/Switch/BasicSwitchWithState';
import Heading from '@/ui/Heading';

export default function page() {
  return (
    <div>
      <Heading>BasicSwitchWithPeer</Heading>
      <BasicSwitchWithPeer />
      <Heading>BasicSwitchWithState</Heading>
      <BasicSwitchWithState />
    </div>
  );
}
