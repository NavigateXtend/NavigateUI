import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Tooltip1 = () => {
  
    const codestr = `
<div className="flex justify-center group relative my-10">
    {/* Hover button */}
    <button className="px-3 py-2 bg-slate-100 border border-slate-700 rounded-md">Hover on me</button>
    {/* Hover Text */}
    <p className="absolute -top-12   duration-700 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 bg-blue-700 px-2 py-1 text-white rounded-md">This is the hover text</p>
</div>
    `


    return (
        <CodeBox codeStr={codestr}>
            <div className="flex justify-center group relative my-10">
                {/* Hover button */}
                <button className="px-3 py-2 bg-slate-100 border border-slate-700 rounded-md">Hover on me</button>
                {/* Hover Text */}
                <p className="absolute -top-12   duration-700 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 bg-blue-700 px-2 py-1 text-white rounded-md">This is the hover text</p>
            </div>
        </CodeBox>
    );
};

export default Tooltip1;
