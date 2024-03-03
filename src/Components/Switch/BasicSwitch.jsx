import CodeBox from '@/Shared/CodeBox/CodeBox';

const codestr = `export default function BasicSwitch() {
  return (
    <label htmlFor="toggle" className="relative flex h-fit w-8 items-center rounded-3xl bg-white">
      <input type="checkbox" className="peer/toggle hidden" id="toggle" />
      <span className="inline-block size-4 rounded-full bg-red-500 duration-300 peer-checked/toggle:translate-x-4 peer-checked/toggle:bg-sky-500"></span>
    </label>
  );
}`;

export default function BasicSwitch() {
  return (
    <CodeBox codeStr={codestr}>
      <label htmlFor="BasicSwitch_NavigateUI" className="relative flex h-fit w-8 items-center">
        <input type="checkbox" className="peer/toggle hidden" id="BasicSwitch_NavigateUI" />
        <div className="absolute inset-0 z-10 rounded-full bg-red-200 duration-200 peer-checked/toggle:bg-sky-200"></div>
        <div className="z-20 size-4 rounded-full bg-red-500 duration-200 peer-checked/toggle:translate-x-full peer-checked/toggle:bg-sky-500"></div>
      </label>
    </CodeBox>
  );
}
