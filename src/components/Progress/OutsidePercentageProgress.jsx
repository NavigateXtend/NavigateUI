'use client';

import CP from '@/ui/CP';
import { useEffect, useState } from 'react';

const code = `
export default function OutsidePercentageProgress() {

    const [progressNumber, setProgressNumber] = useState(0);
    const ProgressNumberPercent = 100; // Adjust the number for your project.

    useEffect(() => {
        if (progressNumber < ProgressNumberPercent) {
            const timeout = setTimeout(() => {
                setProgressNumber(progressNumber + 1);
            }, 1000); // Adjust the interval as per your requirement
            return () => clearTimeout(timeout); // Cleanup function to clear the timeout
        }
    }, [progressNumber, ProgressNumberPercent]);

    return (
        <div className="mx-auto flex w-[300px] flex-col gap-2">
            <div className="flex h-3 w-full  items-center justify-center overflow-hidden rounded-full bg-sky-300">
                <div style={{ width: \`\${progressNumber}%\` }} className="transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-[1ms]"></div>
            </div>
            <span style={{ marginLeft: \`\${progressNumber - 7}%\` }} className="flex text-sm font-medium  text-sky-500">
                {progressNumber}%
            </span>
        </div>
    );
}
`;

export default function OutsidePercentageProgress(i) {
    const [progressNumber, setProgressNumber] = useState(0);
    const ProgressNumberPercent = 100; // Adjust the number for your project.
    useEffect(() => {
        if (progressNumber < ProgressNumberPercent) {
            const timeout = setTimeout(() => {
                setProgressNumber(progressNumber + 1);
            }, 1000); // Adjust the interval as per your requirement
            return () => clearTimeout(timeout); // Cleanup function to clear the timeout
        }
    }, [progressNumber, ProgressNumberPercent]);
    return (
        <CP code={code} i={i}>
            <div className="mx-auto flex w-[300px] flex-col gap-2">
                <div className="flex h-3 w-full  items-center justify-center overflow-hidden rounded-full bg-sky-300">
                    <div style={{ width: `${progressNumber}%` }} className="transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-[1ms]"></div>
                </div>
                <span style={{ marginLeft: `${progressNumber - 7}%` }} className="flex text-sm font-medium  text-sky-500">
                    {progressNumber}%
                </span>
            </div>
        </CP>
    );
}
