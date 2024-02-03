import CodeBox from '../../../Shared/CodeBox/CodeBox';
 const codeStr = `const Form3 = () => {
    return (
        <div className="mx-auto w-full max-w-md">
            <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
                <div className="mb-4">
                    <h2 className="text-center text-2xl font-bold">Contact Us</h2>
                    <p className="text-center text-gray-600">We'd love to hear from you!</p>
                </div>
                <form className="space-y-4">
                    <div className="mb-6 flex flex-wrap">
                        <label className=" mb-2 block text-sm font-bold text-gray-700" htmlFor="name">Name</label>
                        <input className="focus:shadow-outline flex   h-10   w-full  rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none" id="name" placeholder="Your Name" type="text"/>
                    </div>
                    <div className="mb-6 flex flex-wrap">
                        <label className=" mb-2 block text-sm font-bold text-gray-700" htmlFor="email">Email</label>
                        <input className="focus:shadow-outline flex   h-10   w-full  rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none" id="email" placeholder="Your Email" type="email"/>
                    </div>
                    <div className="mb-6 flex flex-wrap">
                        <label className=" mb-2 block text-sm font-bold text-gray-700" htmlFor="message">Message </label>
                        <textarea className="flex min-h-[80px]   w-full  rounded  border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none " id="message" placeholder="Your Message" defaultValue={''}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="inline-flex h-10 items-center justify-center whitespace-nowrap  rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700 focus:outline-none ">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default Form3;`;
const Form3 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="mx-auto w-full max-w-md">
                <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
                    <div className="mb-4">
                        <h2 className="text-center text-2xl font-bold">Contact Us</h2>
                        <p className="text-center text-gray-600">We'd love to hear from you!</p>
                    </div>
                    <form className="space-y-4">
                        <div className="mb-6 flex flex-wrap">
                            <label className=" mb-2 block text-sm font-bold text-gray-700" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="focus:shadow-outline flex   h-10   w-full  rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
                                id="name"
                                placeholder="Your Name"
                                type="text"
                            />
                        </div>
                        <div className="mb-6 flex flex-wrap">
                            <label className=" mb-2 block text-sm font-bold text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="focus:shadow-outline flex   h-10   w-full  rounded border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none"
                                id="email"
                                placeholder="Your Email"
                                type="email"
                            />
                        </div>
                        <div className="mb-6 flex flex-wrap">
                            <label className=" mb-2 block text-sm font-bold text-gray-700" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="flex min-h-[80px]   w-full  rounded  border px-3 py-2 text-sm leading-tight text-gray-700 shadow focus:outline-none "
                                id="message"
                                placeholder="Your Message"
                                defaultValue={''}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="inline-flex h-10 items-center justify-center whitespace-nowrap  rounded bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700 focus:outline-none ">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </CodeBox>
    );
};

export default Form3;
