import BadgeWithNumber from '@/components/Badge/BadgeWithNumber';
import BadgeWithNumberBelow from '@/components/Badge/BadgeWithNumberBelow';
import BadgeWithText from '@/components/Badge/BadgeWithText';
import SimpleBadge from '@/components/Badge/SimpleBadge';
import { ComponentPortion } from '@/ui/Server';

export const metadata = {
    title: 'Badge Components',
    description: 'Badge tailwind components'
};

const badgeArr = [
    {
        name: 'Simple Badge',
        Comp: SimpleBadge
    },
    {
        name: 'Badge with number',
        Comp: BadgeWithNumber
    },
    {
        name: 'Badge with number below',
        Comp: BadgeWithNumberBelow
    },
    {
        name: 'Badge with text',
        Comp: BadgeWithText
    }
];

export default function BadgePage() {
    return <ComponentPortion arr={badgeArr} />;
}
