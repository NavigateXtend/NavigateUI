import React from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const Form8 = () => {
    return (
            <section className="min-h-screen bg-white dark:bg-gray-900">
                <main className="w-full max-w-md mx-auto p-6 ">
                    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                {/* close signin page and redirect home icon  */}
                                <a href="#">
                                    <span className="absolute -right-0 -top-0 w-10 h-10 bg-slate-100 text-sun-900 rounded-tr-xl rounded-bl-xl flex justify-center items-center text-2xl cursor-pointer transition-all hover:bg-slate-200 active:bg-slate-300">
                                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                </a>
                                {/* main form title  */}
                                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Signin</h1>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Don&apos;t have an account yet?{' '}
                                    <a href="#" className="text-[#FC7081] decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        Signup here
                                    </a>
                                </p>
                            </div>

                            <div className="mt-5">
                                {/* singin with google button  */}
                                <div>
                                    <button
                                        type="button"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >
                                        <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                            <path
                                                d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                                                fill="#4285F4"
                                            />
                                            <path
                                                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                                fill="#34A853"
                                            />
                                            <path
                                                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                                fill="#FBBC05"
                                            />
                                            <path
                                                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                                fill="#EB4335"
                                            />
                                        </svg>
                                        Sign in with Google
                                    </button>
                                </div>
                                {/* divider with or  */}
                                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                                    Or
                                </div>

                                {/* <!-- Form --> */}
                                <form>
                                    <div className="grid gap-y-4">
                                        {/* email input field */}
                                        <div className="">
                                            <label htmlFor={'email'} className="block text-sm mb-2 dark:text-white">
                                                Email
                                            </label>
                                            <input
                                                id={'email'}
                                                type='email'
                                                placeholder='example@email.com'
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline-none border focus:border-sun-500 focus:ring-sun-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                            />
                                        </div>
                                        {/* password input field */}
                                        <div className="">
                                            <label htmlFor={'password'} className="block text-sm mb-2 dark:text-white">
                                                Password
                                            </label>
                                            <input
                                                id={'password'}
                                                type='password'
                                                placeholder='@430fdjh(*&('
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline-none border focus:border-sun-500 focus:ring-sun-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                            />
                                        </div>
                                        {/* checkbox box  */}
                                        <div className="flex items-center">
                                            <div className="flex">
                                                <input
                                                    id={'terms'}
                                                    type='checkbox'
                                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                />
                                            </div>
                                            <div className="ms-3">
                                                <label htmlFor={'terms'} className="text-sm dark:text-white">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        {/* signin button  */}
                                        <div>
                                            <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#f73c60] text-white hover:bg-[#e41a4b] active:bg-[#c10f3f] disabled:bg-[#ffccd3] disabled:text-[#a1103b] disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                Signin
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- End Form --> */}
                            </div>
                        </div>
                    </div>
                </main>
            </section>
    );
};

export default Form8;`;

const Form8 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <section className="min-h-screen bg-white dark:bg-gray-900">
                <main className="w-full max-w-md mx-auto p-6 ">
                    <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                {/* close signin page and redirect home icon  */}
                                <a href="#">
                                    <span className="absolute -right-0 -top-0 w-10 h-10 bg-slate-100 text-sun-900 rounded-tr-xl rounded-bl-xl flex justify-center items-center text-2xl cursor-pointer transition-all hover:bg-slate-200 active:bg-slate-300">
                                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                </a>
                                {/* main form title  */}
                                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Signin</h1>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                Don&apos;t have an account yet?{' '}
                                    <a href="#" className="text-[#FC7081] decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        Signup here
                                    </a>
                                </p>
                            </div>

                            <div className="mt-5">
                                {/* singin with google button  */}
                                <div>
                                    <button
                                        type="button"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    >
                                        <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                            <path
                                                d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                                                fill="#4285F4"
                                            />
                                            <path
                                                d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                                                fill="#34A853"
                                            />
                                            <path
                                                d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                                                fill="#FBBC05"
                                            />
                                            <path
                                                d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                                                fill="#EB4335"
                                            />
                                        </svg>
                                        Sign in with Google
                                    </button>
                                </div>
                                {/* divider with or  */}
                                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                                    Or
                                </div>

                                {/* <!-- Form --> */}
                                <form>
                                    <div className="grid gap-y-4">
                                        {/* email input field */}
                                        <div className="">
                                            <label htmlFor={'email'} className="block text-sm mb-2 dark:text-white">
                                                Email
                                            </label>
                                            <input
                                                id={'email'}
                                                type='email'
                                                placeholder='example@email.com'
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline-none border focus:border-sun-500 focus:ring-sun-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                            />
                                        </div>
                                        {/* password input field */}
                                        <div className="">
                                            <label htmlFor={'password'} className="block text-sm mb-2 dark:text-white">
                                                Password
                                            </label>
                                            <input
                                                id={'password'}
                                                type='password'
                                                placeholder='@430fdjh(*&('
                                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm outline-none border focus:border-sun-500 focus:ring-sun-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                            />
                                        </div>
                                        {/* checkbox box  */}
                                        <div className="flex items-center">
                                            <div className="flex">
                                                <input
                                                    id={'terms'}
                                                    type='checkbox'
                                                    className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                />
                                            </div>
                                            <div className="ms-3">
                                                <label htmlFor={'terms'} className="text-sm dark:text-white">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        {/* signin button  */}
                                        <div>
                                            <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#f73c60] text-white hover:bg-[#e41a4b] active:bg-[#c10f3f] disabled:bg-[#ffccd3] disabled:text-[#a1103b] disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                Signin
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- End Form --> */}
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </CodeBox>
    );
};

export default Form8;
