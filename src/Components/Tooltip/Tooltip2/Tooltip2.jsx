import CodeBox from '@/Shared/CodeBox/CodeBox';

const Tooltip2 = () => {
    const codestr = `
<div className="relative  inline h-10  group">
    {/* Hover button */}
    <button className="px-3 py-2 bg-slate-100 border border-slate-700 rounded-md">Hover on me</button>
    {/* Hover Text */}
    <p className="absolute -right-[150%] -bottom-3 h-fit px-3 py-2  duration-600 hidden opacity-0 group-hover:opacity-100 group-hover:block bg-blue-700 text-white rounded-md"> This is the hover text </p>
</div>
    `;
    return (
        <CodeBox codeStr={codestr}>
            <div className="flex items-center justify-center">
                <div className="group  relative inline  h-10">
                    {/* Hover button */}
                    <button className="rounded-md border border-slate-700 bg-slate-100 px-3 py-2">Hover on me</button>
                    {/* Hover Text */}
                    <p className="duration-600 absolute -bottom-0 -right-[150%] top-0 hidden h-fit  rounded-md bg-blue-700 px-3 py-2 text-white opacity-0 group-hover:block group-hover:opacity-100">
                        {' '}
                        This is the hover text
                    </p>
                </div>
            </div>
        </CodeBox>
    );
};

export default Tooltip2;
