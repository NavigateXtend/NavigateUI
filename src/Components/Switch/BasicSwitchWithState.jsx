'use client';
import CP from '@/ui/CP';
import { useState } from 'react';

const code = ` import { useState } from 'react';

export default function BasicSwitchWithState() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex gap-5">
      <button onClick={() => setToggle((prev) => !prev)} className={\`flex h-4 w-8 items-center rounded-full border border-sky-400 \${toggle ? 'bg-sky-400/50' : null}\`}>
        <div className={\`size-4 rounded-full bg-sky-400 duration-200 \${toggle ? 'translate-x-4' : 'translate-x-0'}\`}></div>
      </button>

      <button onClick={() => setToggle((prev) => !prev)} className={\`flex h-fit w-8 items-center rounded-sm border border-sky-400 \${toggle ? 'bg-sky-400/50 duration-500' : 'duration-300'}\`}>
        <div className={\`size-4 rounded-sm bg-sky-400 duration-300 \${toggle ? 'translate-x-4' : 'translate-x-0'}\`}></div>
      </button>
    </div>
  );
}`;

export default function BasicSwitchWithState() {
  const [toggle, setToggle] = useState(false);
  return (
    <CP code={code}>
      <div className="flex gap-5">
        <button onClick={() => setToggle((prev) => !prev)} className={`flex h-fit w-8 items-center rounded-full border border-sky-400 ${toggle ? 'bg-sky-400/50 duration-500' : 'duration-300'}`}>
          <div className={`size-4 rounded-full bg-sky-400 duration-300 ${toggle ? 'translate-x-4' : 'translate-x-0'}`}></div>
        </button>

        <button onClick={() => setToggle((prev) => !prev)} className={`flex h-fit w-8 items-center rounded-sm border border-sky-400 ${toggle ? 'bg-sky-400/50 duration-500' : 'duration-300'}`}>
          <div className={`size-4 rounded-sm bg-sky-400 duration-300 ${toggle ? 'translate-x-4' : 'translate-x-0'}`}></div>
        </button>
      </div>
    </CP>
  );
}
