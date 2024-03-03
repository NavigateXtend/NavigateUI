import SpeedDial1 from '@/Components/SpeedDial/SpeedDial1';
import SpeedDial2 from '@/Components/SpeedDial/SpeedDial2';
import SpeedDial3 from '@/Components/SpeedDial/SpeedDial3';
import SpeedDial4 from '@/Components/SpeedDial/SpeedDial4';
import SpeedDial5 from '@/Components/SpeedDial/SpeedDial5';
import SpeedDial6 from '@/Components/SpeedDial/SpeedDial6';

export const metadata = {
  title: 'Speed Dial Components',
  description: 'Speed Dial tailwind components'
};

export default function SpeedDialPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SpeedDial1 />
      <SpeedDial2 />
      <SpeedDial3 />
      <SpeedDial4 />
      <SpeedDial5 />
      <SpeedDial6 />
    </div>
  );
}
