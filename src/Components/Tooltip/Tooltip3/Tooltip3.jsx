import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codestr = `
<div className="relative flex justify-center my-10 h-10  group">
    {/* Hover button */}
    <button className="px-3 py-2 bg-slate-100 border border-slate-700 rounded-md">Hover on me</button>
    {/* Hover Text */}
    <p className="absolute -top-2 group-hover:-top-10 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-500 transition-all bg-blue-700 px-2 py-1 text-white rounded-md">
    This is the hover text
    </p>
</div>
`;

const Tooltip3 = () => {
    return (
        <CodeBox codeStr={codestr}>
            <div className="relative flex justify-center my-10 h-10  group">
                {/* Hover button */}
                <button className="px-3 py-2 bg-slate-100 border border-slate-700 rounded-md">Hover on me</button>
                {/* Hover Text */}
                <p className="absolute -top-2 group-hover:-top-10 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-500 transition-all bg-blue-700 px-2 py-1 text-white rounded-md">
                    This is the hover text
                </p>
            </div>
        </CodeBox>
    );
};

export default Tooltip3;
