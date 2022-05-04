import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import logo from "./logo.png";

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='border-gray-200 px-2 sm:px-8 py-3 sticky top-0 w-full transition-all bg-white' >
            <div className=" flex justify-between items-center">
                <img src={logo} alt="" className="h-10" />

                <div className="w-full md:block md:w-auto">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3  rounded  md:p-0 dark:"
                                aria-current="page"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blogs"
                                className="block py-2 px-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block py-2 px-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="block py-2 px-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent"
                            >
                                Contact
                            </Link>
                        </li>

                        <li>
                            {user ? (
                                <div>
                                    <button onClick={() => signOut(auth)} className="px-8 bg-green-500 rounded-lg hover:bg-yellow-500" >Logout {user?.email.slice(0, 10)}
                                    </button>
                                </div>
                            ) : (
                                <div className='flex gap-2'>
                                    <Link
                                        to="/signup"
                                        className="block py-2 px-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover: dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent"
                                    > Sign Up
                                    </Link>

                                    <Link
                                        to="/login"
                                        className="block px-8 bg-yellow-500 rounded-lg hover:bg-green-400 md:border-1 md:hover:text-black transition"
                                    > Login </Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Header;