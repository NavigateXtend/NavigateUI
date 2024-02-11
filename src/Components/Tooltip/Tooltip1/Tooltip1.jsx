import CodeBox from '@/Shared/CodeBox/CodeBox';

const Tooltip1 = () => {
    const codestr = `
    <div className="relative h-10  group">
    <button className="px-3 py-2 bg-slate-100 border border-slate-700 rounded-md">Hover on me</button>
    {/* Hover Text */}
    <p className="absolute -top-10 duration-600 hidden opacity-0 group-hover:opacity-100 group-hover:block bg-blue-700 px-2 py-1 text-white rounded-md">This is the hover text</p>
    {/* Hover button */}
</div>
    `;

    return (
        <CodeBox codeStr={codestr}>
            <div className="group relative my-10 flex h-10  justify-center">
                <button className="rounded-md border border-slate-700 bg-slate-100 px-3 py-2">Hover on me</button>
                {/* Hover Text */}
                <p className="duration-600 absolute -top-10 hidden rounded-md bg-blue-700 px-2 py-1 text-white opacity-0 group-hover:block group-hover:opacity-100">This is the hover text</p>
                {/* Hover button */}
            </div>
        </CodeBox>
    );
};

export default Tooltip1;
