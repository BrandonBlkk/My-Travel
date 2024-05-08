import React from 'react'

const Footer = () => {
     return (
        <footer className="bg-gray-900 text-white px-5 md:px-10">
            <div className="container mx-auto divide-y divide-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
                    <div className='space-y-10'>
                        <div className='flex select-none'>
                            <i class="ri-earth-line text-4xl text-blue-400"></i>
                            <h1 className='text-3xl font-semibold italic'>My Travel</h1>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-3xl font-semibold'>Newsletter</h1>
                            <p className='text-slate-400'>Want to know what we're up to? Sign up for the newsletter and join our tribe.</p>
                            <input className='bg bg-transparent border border-slate-700 p-2 w-full' type="text" placeholder='Email address' required/>
                            <input className='font-senibold bg-slate-600 w-full py-2 rounded cursor-pointer hover:bg-slate-500 transition-colors duration-200 md:w-32' type="submit" value="Subscribe" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Destinations</h2>
                        <ul className="text-sm space-y-2 text-slate-400">
                            <li><a className='hover:underline underline-offset-2' href="#">New York</a></li>
                            <li><a className='hover:underline underline-offset-2' href="#">Paris</a></li>
                            <li><a className='hover:underline underline-offset-2' href="#">Tokyo</a></li>
                            <li><a className='hover:underline underline-offset-2' href="#">Rome</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Help</h2>
                        <ul className="text-sm space-y-2 text-slate-400">
                            <li><a className='hover:underline underline-offset-2' href="#">Contact Us</a></li>
                            <li><a className='hover:underline underline-offset-2' href="#">Our Policies</a></li>
                            <li><a className='hover:underline underline-offset-2' href="#">Account</a></li>
                            <li><a className='hover:underline underline-offset-2' href="#">Terms & Conditions Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Connect</h2>
                        <ul className="text-sm space-y-2 text-slate-400">
                            <li><a className='hover:underline underline-offset-2' href="#">Facebook</a></li>
                            <li><a className='hover:underline underline-offset-2' href="#">Twitter</a></li>
                            <li><a className='hover:underline underline-offset-2' href="#">Instagram</a></li>
                            <li><a className='hover:underline underline-offset-2' href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-between p-3 text-slate-400 md:flex-row">
                    <p className="text-sm">&copy; {new Date().getFullYear()} My Travel. All Rights Reserved.</p>
                    <div className='flex gap-2 text-sm'>
                        <a className='hover:text-slate-300' href="#">Terms & conditions</a>
                        <span>|</span>
                        <a className='hover:text-slate-300' href="#">Privacy Policy</a>
                        <span>|</span>
                        <a className='hover:text-slate-300' href="#">Cookie</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
