import { useState } from 'react';

const codeStr = `import { useState } from 'react';

export const Modal1 = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
            <div className="w-72 mx-auto flex items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="bg-gray-700 text-white p-2 rounded-lg">Modal</button>
                <div onClick={() => setOpenModal(false)} className={\`fixed flex justify-center items-center z-[100] \${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100\`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={\`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg \${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}\`}>
                        <h1 className="p-2 text-3xl font-semibold">Welcome to NavigateUI!</h1>
                        <p className="mb-3">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
                        <button onClick={() => setOpenModal(false)} className="text-white me-2 bg-[#16c55c] px-6 py-2 rounded-full">Ok</button>
                        <button onClick={() => setOpenModal(false)} className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full">Cancel</button>
                    </div>
                </div>
            </div>
    )}`;
const Modal6 = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="w-72 mx-auto flex items-center justify-center">
            <button onClick={() => setOpenModal(true)} className="bg-gray-700 text-white p-2 rounded-lg">
                Modal
            </button>
            <div
                onClick={() => setOpenModal(false)}
                className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} duration-300 inset-0 w-full h-full backdrop-blur-sm bg-black/20 `}
            >
                <div
                    onClick={(e_) => e_.stopPropagation()}
                    className={`absolute  overflow-x-hidden overflow-y-auto h-[99vh]  w-[99vw] flex justify-center  bg-white drop-shadow-2xl rounded-lg ${
                        openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-1000'
                    }`}
                >
                    <main className=" px-4 sm:px-6 lg:px-8 py-8 ">
                      <button onClick={()=>{setOpenModal(false)}} className=' flex bg-slate-950 text-white px-3 py-2 rounded-lg mb-6'> 
                       Close
                      </button>

                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="space-y-8 lg:mb-6">
                                <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                                    <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                        <h3 className="text-2xl font-semibold whitespace-nowrap ">Shipping Details</h3>
                                    </div>
                                    <div className="lg:p-6 p-2">
                                        <form className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium " >
                                                    Name
                                                </label>
                                                <input className="flex h-10 w-full rounded-md border px-3 "  placeholder="Enter your name" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium " >
                                                    Address
                                                </label>
                                                <input className="flex h-10 w-full rounded-md border px-3 "  placeholder="Enter your address" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium " >
                                                    City
                                                </label>
                                                <input className="flex h-10 w-full rounded-md border px-3 "  placeholder="Enter your city" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium " >
                                                    Country
                                                </label>
                                                <input className="flex h-10 w-full rounded-md border px-3 " placeholder="Enter your country" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="rounded-lg border bg-card  shadow-sm  " >
                                    <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                        <h3 className="text-2xl font-semibold whitespace-nowrap ">Payment Information</h3>
                                    </div>
                                    <div className="lg:p-6 p-2">
                                        <form className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none ">Card Number</label>
                                                <input className="flex h-10 w-full rounded-md border px-3 " placeholder="Enter your card number" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none  ">Expiry Date</label>
                                                    <input className="flex h-10 w-full rounded-md border px-3 " placeholder="MM/YY" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium leading-none  ">CVV</label>
                                                    <input className="flex h-10 w-full rounded-md border px-3 " placeholder="Enter your CVV" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none  ">Billing Address</label>
                                                <input className="flex h-10 w-full rounded-md border px-3 " placeholder="Enter your billing address" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-8 lg:mb-0 mb-6">
                                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                                    <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
                                        <h3 className="text-2xl font-semibold whitespace-nowrap ">Order Summary</h3>
                                    </div>
                                    <div className="lg:p-6 p-2">
                                        <div className="space-y-4">
                                            <div className="flex justify-between">
                                                <span>Product 1</span>
                                                <span>$99.99</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Product 2</span>
                                                <span>$49.99</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Product 3</span>
                                                <span>$29.99</span>
                                            </div>
                                            <div className="border-t border-gray-200  mt-4 pt-4 flex justify-between font-semibold">
                                                <span>Total</span>
                                                <span>$179.97</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center lg:p-6 p-2 ">
                                        <button onClick={()=>{setOpenModal(false)}} className="inline-flex items-center bg-slate-950 text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                                            Complete Purchase
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                    
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Modal6;