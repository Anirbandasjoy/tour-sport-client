import { useState } from "react"
import { Link } from "react-router-dom"
import { MdOutlineDashboardCustomize } from "react-icons/md"
import { LuMoonStar } from "react-icons/lu"
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [dropdown, setDropdown] = useState(true);
    const [open, setOpen] = useState(false)
    return (
        <div>

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap relative items-center justify-between mx-auto p-4">
                    <Link href="https://flowbite.com/" className="flex items-center">
                        <img src={logo} className="h-8 mr-1" alt="logo" />
                        <span className="self-center lg:text-2xl text-sm sm:text-lg font-semibold whitespace-nowrap dark:text-white">CareerNest</span>
                    </Link>
                    <div className="flex items-center md:order-2 ">
                        <button onClick={() => setDropdown(!dropdown)} type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 sm:text-sm text-xs text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                            <MdOutlineDashboardCustomize className="mr-1 " />
                            Dashboard
                        </button>
                        <LuMoonStar size={22} className="cursor-pointer mr-2 lg:mr-0" />

                        <div className={dropdown ? "z-50   lg:mt-8 mt-9 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" : "z-50  absolute top-10 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow lg:mt-8 mt-9 dark:bg-gray-700"} id="language-dropdown-menu">
                            <ul className="py-2 font-medium" role="none">
                                <li>
                                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">

                                            English (US)
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">

                                            Deutsch
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">

                                            Italiano
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div className="inline-flex items-center">

                                            中文 (繁體)
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <button onClick={() => setOpen(!open)} data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={open ? "items-center justify-between  w-full md:flex md:w-auto md:order-1" : "items-center hidden  justify-between   w-full md:flex md:w-auto md:order-1"} id="navbar-language">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</Link>
                            </li>
                            <li>
                                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar