'use client';

import CP from '@/ui/CP';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const code = `
export default function InsidePercentageProgress() {

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
        <div className="mx-auto flex w-[500px] flex-col gap-2">
            <div className="flex h-5 w-full items-center justify-center overflow-hidden rounded-full bg-sky-300">
                <div style={{ width: \`\${progressNumber}%\` }} className="transition-width mr-auto flex h-full w-0 items-center justify-center rounded-full  bg-sky-600 duration-500">
                    <span className="text-center text-xs font-medium text-gray-300">{progressNumber}%</span>
                </div>
            </div>
        </div>
    );
}
`;

export default function InsidePercentageProgress(i) {
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
            <div className="mx-auto flex w-[500px] flex-col gap-2">
                <div className="flex h-5 w-full items-center justify-center overflow-hidden rounded-full bg-sky-300">
                    <div style={{ width: `${progressNumber}%` }} className="transition-width mr-auto flex h-full w-0 items-center justify-center rounded-full  bg-sky-600 duration-500">
                        <span className="text-center text-xs font-medium text-gray-300">{progressNumber}%</span>
                    </div>
                </div>
            </div>
        </CP>
    );
}
