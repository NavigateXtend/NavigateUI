import CP from '@/ui/CP';

const code = `export default function BasicSwitch() {
  return (
    <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-10 items-center rounded-full border border-sky-600">
        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
        <div className="absolute inset-0 z-10 w-0 rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-sky-200"></div>
        <div className="z-20 size-4 rounded-full bg-sky-500 duration-200 peer-checked/toggle:translate-x-6"></div>
      </label>
  );
}`;

export default function BasicSwitchWithPeer() {
  return (
    <CP code={code}>
      <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-8 cursor-pointer items-center rounded-full border border-sky-400">
        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
        <div className="absolute inset-0 z-10 w-0 cursor-pointer rounded-full duration-200 peer-checked/toggle:w-full peer-checked/toggle:bg-sky-400/50"></div>
        <div className="z-20 size-4 rounded-full bg-sky-400 duration-200 peer-checked/toggle:translate-x-4"></div>
      </label>
    </CP>
  );
}
