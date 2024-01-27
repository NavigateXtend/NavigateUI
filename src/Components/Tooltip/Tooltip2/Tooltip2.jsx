
import CodeBox from '../../../Shared/CodeBox/CodeBox';

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
            <div className="flex justify-center items-center">
                <div className="relative  inline h-10  group">
                    {/* Hover button */}
                    <button className="px-3 py-2 bg-slate-100 border border-slate-700 rounded-md">Hover on me</button>
                    {/* Hover Text */}
                    <p className="absolute -right-[150%] -bottom-0 top-0 h-fit px-3 py-2  duration-600 hidden opacity-0 group-hover:opacity-100 group-hover:block bg-blue-700 text-white rounded-md">   This is the hover text</p>
                </div>
            </div>
        </CodeBox>
    );
};

export default Tooltip2;
