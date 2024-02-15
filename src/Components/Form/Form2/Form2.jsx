import CodeBox from '@/Shared/CodeBox/CodeBox';

const Form2 = () => {
    const codestr = `
export const Form = () => {
    return (
            <div className=" mx-auto max-w-md border  border-gray-200 rounded-lg shadow-lg p-6 bg-white  hover:shadow-xl  ">
                <div className="flex flex-col p-6 space-y-1">
                    <h3 className="tracking-tight text-2xl font-bold text-gray-900 ">Sign Up</h3>
                    <p className="text-sm text-gray-500 ">Please fill in the form to create an account.</p>
                </div>
                {/* Form Inner content */}
                <div className="p-6">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 " htmlFor="first-name">
                                    First Name
                                </label>
                                <input className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md" id="first-name" placeholder="Enter your first name"/>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 " htmlFor="last-name">
                                    Last Name
                                </label>
                                <input className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md" id="last-name" placeholder="Enter your last name"/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 " htmlFor="email">
                                Email
                            </label>
                            <input  className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md" id="email" placeholder="Enter your email" type="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 " htmlFor="message">
                                Message
                            </label>
                            <textarea className="flex w-full px-3 py-2 text-sm  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md min-h-[100px]" id="message" placeholder="Enter your message" defaultValue={''} />
                        </div>
                        {/* Submit button */}
                        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">Submit</button>
                    </form>
                </div>
            </div>
        
    );
};
    `;

    return (
        <CodeBox codeStr={codestr}>
            <div className=" mx-auto max-w-md rounded-lg  border border-gray-200 bg-white p-6 shadow-lg  hover:shadow-xl  ">
                <div className="flex flex-col space-y-1 p-6">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 ">Sign Up</h3>
                    <p className="text-sm text-gray-500 ">Please fill in the form to create an account.</p>
                </div>
                {/* Form Inner content */}
                <div className="p-6">
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 " htmlFor="first-name">
                                    First Name
                                </label>
                                <input
                                    className="placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md  border border-gray-300 bg-gray-100 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed  disabled:opacity-50"
                                    id="first-name"
                                    placeholder="Enter first name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 " htmlFor="last-name">
                                    Last Name
                                </label>
                                <input
                                    className="placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md  border border-gray-300 bg-gray-100 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed  disabled:opacity-50"
                                    id="last-name"
                                    placeholder="Enter last name"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 " htmlFor="email">
                                Email
                            </label>
                            <input
                                className="placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md  border border-gray-300 bg-gray-100 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:cursor-not-allowed  disabled:opacity-50"
                                id="email"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 " htmlFor="message">
                                Message
                            </label>

                            <textarea
                                className="placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[100px] w-full  rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-offset-2  disabled:cursor-not-allowed disabled:opacity-50"
                                id="message"
                                placeholder="Enter your message"
                                defaultValue={''}
                            />
                        </div>
                        {/* Submit button */}
                        <button className="rounded-md bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">Submit</button>
                    </form>
                </div>
            </div>
        </CodeBox>
    );
};

export default Form2;
