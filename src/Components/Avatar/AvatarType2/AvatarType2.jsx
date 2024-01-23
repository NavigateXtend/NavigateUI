import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const AvatarType2 = () => {
    return (
        // you can remove the blur by removing hover:blur-[2px] duration-500 these classes 
        <div className="flex flex-wrap justify-between">
            <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
            <img className="w-[100px] h-[100px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
            <img className="w-[120px] h-[120px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
        </div>
    );
};

export default AvatarType2;`;

const AvatarType2 = () => {
    return (
        // you can remove the blur by removing hover:blur-[2px] duration-500 these classes
        <CodeBox codeStr={codeStr}>
            <div className="flex items-center flex-wrap justify-around">
                <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
                <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
                <img className="w-[130px] h-[130px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
            </div>
        </CodeBox>
    );
};

export default AvatarType2;
