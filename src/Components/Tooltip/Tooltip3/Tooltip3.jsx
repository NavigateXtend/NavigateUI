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
            <div className="group relative my-10 flex h-10  justify-center">
                {/* Hover button */}
                <button className="rounded-md border border-slate-700 bg-slate-100 px-3 py-2">Hover on me</button>
                {/* Hover Text */}
                <p className="absolute -top-2 scale-0 rounded-md bg-blue-700 px-2 py-1 text-white opacity-0 transition-all duration-500 group-hover:-top-10 group-hover:scale-100 group-hover:opacity-100">
                    This is the hover text
                </p>
            </div>
        </CodeBox>
    );
};

export default Tooltip3;
