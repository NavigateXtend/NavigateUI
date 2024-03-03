import CP from '@/ui/CP';

const Form3 = () => {
  const code = `
<div className="w-full max-w-md mx-auto">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>
      <p className="text-gray-600 text-center">We&apos;d love to hear from you!</p>
    </div>
    <form className="space-y-4">
      <div className="flex flex-wrap mb-6">
        <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input className="flex h-10 text-sm shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Your Name" type="text" />
      </div>
      <div className="flex flex-wrap mb-6">
        <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="flex h-10 text-sm shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Your Email" type="email" />
      </div>
      <div className="flex flex-wrap mb-6">
        <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea className="flex min-h-[80px] text-sm shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " id="message" placeholder="Your Message" defaultValue={""} />
      </div>
      <div className="flex items-center justify-between">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none ">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
   `;

  return (
    <CP code={code}>
      <div className="mx-auto w-full max-w-md">
        <div className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
          <div className="mb-4">
            <h2 className="text-center text-2xl font-bold">Contact Us</h2>
            <p className="text-center text-gray-600">We&apos;d love to hear from you!</p>
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
    </CP>
  );
};

export default Form3;
