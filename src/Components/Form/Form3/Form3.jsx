import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Form3 = () => {
    const codeStr = `
<div className="w-full max-w-md mx-auto">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>
      <p className="text-gray-600 text-center">We'd love to hear from you!</p>
    </div>
    <form className="space-y-4">
      <div className="flex flex-wrap mb-6">
        <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input className="flex h-10   text-sm   shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Your Name" type="text" />
      </div>
      <div className="flex flex-wrap mb-6">
        <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="flex h-10   text-sm   shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Your Email" type="email" />
      </div>
      <div className="flex flex-wrap mb-6">
        <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea className="flex min-h-[80px]   text-sm  shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " id="message" placeholder="Your Message" defaultValue={""} />
      </div>
      <div className="flex items-center justify-between">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm  h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
   `;

    return (
        <CodeBox codeStr={codeStr}>
            <div className="w-full max-w-md mx-auto">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold text-center">Contact Us</h2>
                        <p className="text-gray-600 text-center">We'd love to hear from you!</p>
                    </div>
                    <form className="space-y-4">
                        <div className="flex flex-wrap mb-6">
                            <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="flex h-10   text-sm   shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                placeholder="Your Name"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="flex h-10   text-sm   shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                placeholder="Your Email"
                                type="email"
                            />
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="flex min-h-[80px]   text-sm  shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                                id="message"
                                placeholder="Your Message"
                                defaultValue={''}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm  h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ">
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
