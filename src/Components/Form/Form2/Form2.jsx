import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Form2 = () => {
    const codestr = `
export const Form = () => {
    return (
    <div className=" mx-auto max-w-md border  border-gray-200 rounded-lg shadow-lg lg:p-6 md:p-4 p-1 bg-white  hover:shadow-xl  ">
        <div className="flex flex-col p-6 space-y-1">
            <h3 className="tracking-tight text-2xl font-bold text-gray-900 ">Sign Up</h3>
            <p className="text-sm text-gray-500 ">Please fill in the form to create an account.</p>
        </div>
        {/* Form Inner content */}
        <div className="p-4">
            <form className="space-y-4">
                <div className="flex sm:flex-row flex-col gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none  text-gray-700 " htmlFor="first-name">
                            First Name
                        </label>
                        <input className="flex h-10 w-full px-3 py-2 text-sm hover:ring hover:outline-none focus:outline-none bg-gray-100  border border-gray-300  rounded-md" id="first-name" placeholder="Enter first name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium leading-none  text-gray-700 " htmlFor="last-name">
                            Last Name
                        </label>
                        <input className="flex h-10 w-full px-3 py-2 text-sm hover:ring hover:outline-none focus:outline-none bg-gray-100  border border-gray-300  rounded-md" id="last-name" placeholder="Enter last name"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none  text-gray-700 " htmlFor="email">
                        Email
                    </label>
                    <input className="flex h-10 w-full px-3 py-2 text-sm hover:ring hover:outline-none focus:outline-none bg-gray-100  border border-gray-300  rounded-md" id="email" placeholder="Enter your email" type="email"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none  text-gray-700 " htmlFor="message">
                        Message
                    </label>

                    <textarea className="flex w-full px-3 py-2 text-sm  hover:ring hover:outline-none focus:outline-none  bg-gray-100  border border-gray-300  rounded-md min-h-[100px]" id="message" placeholder="Enter your message" defaultValue={''}
                    />
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
           <div className="mx-auto max-w-md border border-gray-200 rounded-lg shadow-lg lg:p-6 md:p-4 p-1 bg-white hover:shadow-xl transition-all duration-300">
  <div className="flex flex-col p-6 space-y-1">
    <h3 className="tracking-tight text-2xl font-bold text-indigo-600">Contact with us</h3>
    <p className="text-sm text-gray-500">Please fill in the form to send us message</p>
  </div>
  {/* Form Inner content */}
  <div className="p-4">
    <form className="space-y-4">
      <div className="flex sm:flex-row flex-col gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none text-gray-700" htmlFor="first-name">
            First Name
          </label>
          <input
            className="flex h-10 w-full px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500 hover:ring hover:border-gray-400 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
            id="first-name"
            placeholder="Enter first name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none text-gray-700" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="flex h-10 w-full px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500 hover:ring hover:border-gray-400 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
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
          className="flex h-10 w-full px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500 hover:ring hover:border-gray-400 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
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
          className="flex w-full px-3 py-2 text-sm focus:ring-indigo-500 focus:border-indigo-500 hover:ring hover:border-gray-400 bg-gray-100 border border-gray-300 rounded-md min-h-[100px] focus:outline-none"
          id="message"
          placeholder="Enter your message"
          defaultValue={''}
        />
      </div>
      {/* Submit button */}
      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-all duration-300 focus:outline-none">
        Submit
      </button>
    </form>
  </div>
</div>

        </CodeBox>
    );
};

export default Form2;
