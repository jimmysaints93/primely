function LogIn() {
    return (
        <main className="relative flex flex-1 flex-col overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
            {/* <div class="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"><svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-bg" width="32" height="32" patternUnits="userSpaceOnUse" x="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-bg)"></rect></svg></div> */}
            <div className="relative flex flex-1 flex-col items-center justify-center pt-12 pb-16">
                {/* logo of the company here */}
                <h1 className="sr-only">Log in to your Tailwind UI account</h1>
                <form className="w-full max-w-sm" action="/login">
                    <div className="mb-6">
                        <label for="email" className="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
                        <input type="email" id="email" className="mt-2 appearance-none text-red-900 bg-white rounded-md w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-red-400 focus:ring-2 focus:ring-red-500 ring-1 ring-red-200"></input>
                    </div>
                    <div className="mb-6">
                        <label for="password" className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
                        <input type="password" id="password" className="mt-2 appearance-none text-red-900 bg-white rounded-md w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-red-400 focus:ring-2 focus:ring-red-500 ring-1 ring-red-200"></input>
                    </div>
                    <button type="submit" className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-red-900 text-white hover:bg-red-700 w-full">
                        <span>Sign in to account</span>
                    </button>
                    <p className="mt-8 text-center"><a href="/password/reset" className="text-sm hover:underline text-red-900 hover:text-red-900">Forgot password?</a></p>
                </form>
            </div>
            <footer className="relative shrink-0">
                <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4">
                    <p class="text-center sm:text-left">Don't have an account?</p>
                    <a class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20" href="/all-access"><span>Get access <span aria-hidden="true">→</span></span></a>
                </div>
            </footer>
        </main>       
    );
}

export default LogIn