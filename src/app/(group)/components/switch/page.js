import BasicSwitchWithPeer from '@/components/Switch/BasicSwitchWithPeer';
import BasicSwitchWithState from '@/components/Switch/BasicSwitchWithState';
import { Breadcrumb } from '@/ui/Client';
import { Heading } from '@/ui/Server';

export default function page() {
    return (
        <div>
            <Breadcrumb />
            <Heading>BasicSwitchWithPeer</Heading>
            <BasicSwitchWithPeer />
            <Heading>BasicSwitchWithState</Heading>
            <BasicSwitchWithState />
        </div>
    );
}
