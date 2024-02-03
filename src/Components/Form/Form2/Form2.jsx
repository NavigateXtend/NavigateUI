import CodeBox from '../../../Shared/CodeBox/CodeBox';
const codestr = `const Form2 = () => {
    return (
        <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-1 shadow-lg transition-all duration-300 hover:shadow-xl md:p-4 lg:p-6">
            <div className="flex flex-col space-y-1 p-6">
                <h3 className="text-2xl font-bold tracking-tight text-indigo-600">Contact with us</h3>
                <p className="text-sm text-gray-500">Please fill in the form to send us message</p>
            </div>
            {/* Form Inner content */}
            <div className="p-4">
                <form className="space-y-4">
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-gray-700" htmlFor="first-name">First Name</label>
                            <input className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm hover:border-gray-400 hover:ring focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" id="first-name" placeholder="Enter first name"/>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-gray-700" htmlFor="last-name">Last Name</label>
                            <input className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm hover:border-gray-400 hover:ring focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" id="last-name" placeholder="Enter last name"/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none text-gray-700" htmlFor="email">Email</label>
                        <input className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm hover:border-gray-400 hover:ring focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" id="email" placeholder="Enter your email" type="email"/>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none text-gray-700" htmlFor="message">Message</label>
                        <textarea className="flex min-h-[100px] w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm hover:border-gray-400 hover:ring focus:border-indigo-500 focus:outline-none focus:ring-indigo-500" id="message" placeholder="Enter your message" defaultValue={''}/>
                    </div>
                    {/* Submit button */}
                    <button className="rounded-md bg-indigo-600 px-4 py-2 text-white transition-all duration-300 hover:bg-indigo-700 focus:outline-none">Submit</button>
                </form>
            </div>
        </div> 
    );
};

export default Form2;`;
const Form2 = () => {
    

    return (
        <CodeBox codeStr={codestr}>
            <div className="mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-1 shadow-lg transition-all duration-300 hover:shadow-xl md:p-4 lg:p-6">
                <div className="flex flex-col space-y-1 p-6">
                    <h3 className="text-2xl font-bold tracking-tight text-indigo-600">Contact with us</h3>
                    <p className="text-sm text-gray-500">Please fill in the form to send us message</p>
                </div>
                {/* Form Inner content */}
                <div className="p-4">
                    <form className="space-y-4">
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="first-name">
                                    First Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm hover:border-gray-400 hover:ring focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                    id="first-name"
                                    placeholder="Enter first name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none text-gray-700" htmlFor="last-name">
                                    Last Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm hover:border-gray-400 hover:ring focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                    id="last-name"
                                    placeholder="Enter last name"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm hover:border-gray-400 hover:ring focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                id="email"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-gray-700" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="flex min-h-[100px] w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm hover:border-gray-400 hover:ring focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                                id="message"
                                placeholder="Enter your message"
                                defaultValue={''}
                            />
                        </div>
                        {/* Submit button */}
                        <button className="rounded-md bg-indigo-600 px-4 py-2 text-white transition-all duration-300 hover:bg-indigo-700 focus:outline-none">Submit</button>
                    </form>
                </div>
            </div>
        </CodeBox>
    );
};

export default Form2;
