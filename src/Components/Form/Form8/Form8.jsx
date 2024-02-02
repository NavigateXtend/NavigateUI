import { Link } from 'react-router-dom';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const Form8 = () => {
    return (
        <div className="bg-[#8EA7E9]/20 h-screen flex justify-center items-center p-6 md:p-0">
            <div className="flex h-full md:h-[90%] lg:h-[80%] w-full md:w-[80%]  rounded-xl overflow-hidden shadow-md">
                {/* register design side  */}
                <div className="md:w-[60%] lg:w-[40%] h-full bg-[#8EA7E9] relative md:flex justify-center items-center hidden">
                    <div className="w-16 h-16 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full  absolute left-[20%] -top-2"></div>
                    <div className="w-20 h-20 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full  absolute left-[20%] bottom-[18%]"></div>
                    <div className="w-14 h-14 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full transition-all absolute -right-7 top-[50%] -translate-y-1/2"></div>
                    <div className="w-24 h-24 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full  absolute left-[50%] -translate-x-1/2 top-[22%]"></div>
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl text-white/80 font-medium ">Welcome Back</h2>
                        <p className="text-white/60 text-sm animate-pulse">Please Enter You Information</p>
                    </div>
                </div>
                {/* input side  */}
                <div className="w-full lg:w-[60%] bg-white py-10 flex flex-col justify-center">
                    <h2 className="text-3xl text-[#8EA7E9] font-bold text-center pb-8">Login Here</h2>
                    <form className="w-full  flex flex-col justify-center items-center gap-4">
                        <input className="border border-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50" type="email" placeholder="Email" name="email"/>
                        <input className="border border-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50" type="password" placeholder="Password" name="password"/>
                        <p className="text-[14px] text-gray-400">Do not have an account ? <a className="text-[#8EA7E9] ">Create one</a></p>
                        <input className="bg-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded-lg text-white font-medium" type="submit" />
                    </form>
                    {/* divider  */}
                    <div className="flex items-center my-8 px-8">
                        <hr className="flex-1" />
                        <div className="mx-4 text-gray-400">OR</div>
                        <hr className="flex-1" />
                    </div>
                    {/* sign with google */}
                    <div className="w-[200px] h-[50px] mx-auto flex items-center rounded-full overflow-hidden hover:scale-95 hover:shadow duration-300 shadow-md">
                        <div className="bg-[#8EA7E9] h-full w-[50%] flex items-center text-white text-sm pl-4">Sign With</div>
                        <span className="h-0 w-0 border-b-[50px] border-b-transparent border-r-[50px] border-r-[#8EA7E9] top-0 right-0 -rotate-90 group-hover:hidden"></span>
                        <span className="text-4xl font-bold text-[#8EA7E9] pr-4">G+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form8;`;

const Form8 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="bg-[#8EA7E9]/20 h-screen flex justify-center items-center p-6 md:p-0">
                <div className="flex h-full md:h-[90%] lg:h-[80%] w-full md:w-[80%]  rounded-xl overflow-hidden shadow-md">
                    {/* register design side  */}
                    <div className="md:w-[60%] lg:w-[40%] h-full bg-[#8EA7E9] relative md:flex justify-center items-center hidden">
                        <div className="w-16 h-16 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full  absolute left-[20%] -top-2"></div>
                        <div className="w-20 h-20 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full  absolute left-[20%] bottom-[18%]"></div>
                        <div className="w-14 h-14 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full transition-all absolute -right-7 top-[50%] -translate-y-1/2"></div>
                        <div className="w-24 h-24 bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] rounded-full  absolute left-[50%] -translate-x-1/2 top-[22%]"></div>
                        <div className="text-center space-y-2">
                            <h2 className="text-3xl text-white/80 font-medium ">Welcome Back</h2>
                            <p className="text-white/60 text-sm animate-pulse">Please Enter You Information</p>
                        </div>
                    </div>
                    {/* input side  */}
                    <div className="w-full lg:w-[60%] bg-white py-10 flex flex-col justify-center">
                        <h2 className="text-3xl text-[#8EA7E9] font-bold text-center pb-8">Login Here</h2>
                        <form className="w-full  flex flex-col justify-center items-center gap-4">
                            <input className="border border-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50" type="email" placeholder="Email" name="email"/>
                            <input className="border border-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50" type="password" placeholder="Password" name="password"/>
                            <p className="text-[14px] text-gray-400">Do not have an account ? <a className="text-[#8EA7E9] ">Create one</a></p>
                            <input className="bg-[#8EA7E9] w-[80%] md:w-[60%] py-2 px-6 rounded-lg text-white font-medium" type="submit" />
                        </form>
                        {/* divider  */}
                        <div className="flex items-center my-8 px-8">
                            <hr className="flex-1" />
                            <div className="mx-4 text-gray-400">OR</div>
                            <hr className="flex-1" />
                        </div>
                        {/* sign with google */}
                        <div className="w-[200px] h-[50px] mx-auto flex items-center rounded-full overflow-hidden hover:scale-95 hover:shadow duration-300 shadow-md">
                            <div className="bg-[#8EA7E9] h-full w-[50%] flex items-center text-white text-sm pl-4">Sign With</div>
                            <span className="h-0 w-0 border-b-[50px] border-b-transparent border-r-[50px] border-r-[#8EA7E9] top-0 right-0 -rotate-90 group-hover:hidden"></span>
                            <span className="text-4xl font-bold text-[#8EA7E9] pr-4">G+</span>
                        </div>
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default Form8;
