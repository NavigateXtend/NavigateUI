import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Skeleton1 = () => {
    const codestr = `
    {/* small avatar */}
    <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
    {/* large avatar */}
    <div className="w-24 h-24 rounded-full bg-gray-300 animate-pulse"></div>
    {/* Extra large avatar */}
    <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse"></div>
  `;

    return (
        <CodeBox codeStr={codestr}>
            <div className="flex flex-wrap items-center justify-center gap-5 ">
                {/* small avatar */}
                <div className="h-16 w-16 animate-pulse rounded-full bg-gray-300"></div>
                {/* large avatar */}
                <div className="h-24 w-24 animate-pulse rounded-full bg-gray-300"></div>
                {/* Extra large avatar */}
                <div className="h-32 w-32 animate-pulse rounded-full bg-gray-300"></div>
            </div>
        </CodeBox>
    );
};

export default Skeleton1;
