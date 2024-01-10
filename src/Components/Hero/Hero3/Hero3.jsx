import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Hero3 = () => {

    const codestr = `
    <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
    <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
      <div className="max-w-md space-y-6">
        <h1 className="text-5xl font-bold leading-tight text-gray-900">Take your business to the next level.</h1>
        <p className="text-lg text-gray-600">
          Track and improve the growth of your business. Send the right customers your way with this tool
        </p>
        <div className="flex space-x-4">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
            Get Started
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent text-blue-600">
            Learn More
          </button>
        </div>
        <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
      </div>
      <div className="relative">
      
        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" alt="Businessman" className="relative h-[500px] w-[500px] rounded-b-full object-cover" width={500} height={500} style={{aspectRatio: '500 / 500', objectFit: 'cover'}} />
      </div>
    </div>
  </section>            
    `
  



    return (
    <CodeBox codeStr={codestr}>
<section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
  <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
    <div className="max-w-md space-y-6">
      <h1 className="text-5xl font-bold leading-tight text-gray-900">Take your business to the next level.</h1>
      <p className="text-lg text-gray-600">
        Track and improve the growth of your business. Send the right customers your way with this tool
      </p>
      <div className="flex space-x-4">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white">
          Get Started
        </button>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-transparent text-blue-600">
          Learn More
        </button>
      </div>
      <p className="text-sm text-gray-500">Trusted by 5000+ Users</p>
    </div>
    <div className="relative">
    
      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" alt="Businessman" className="relative h-[500px] w-[500px] rounded-b-full object-cover" width={500} height={500} style={{aspectRatio: '500 / 500', objectFit: 'cover'}} />
    </div>
  </div>
</section>        
    </CodeBox>


    );
};

export default Hero3;
