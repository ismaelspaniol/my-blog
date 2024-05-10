"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    // State to manage the navbar's visibility teste 2
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };

    // Array containing navigation items
    interface InavItem {
        id: number;
        text: string;
        route: string;
    }

    const navItems: InavItem[] = [
        { id: 1, text: "Home", route: "/" },
        { id: 2, text: "About", route: "/about" },
    ];

    return (
        <div
            className="bg-gray-900 flex h-10 text-white  
                        flex-row-reverse sm:justify-center "
        >
            {/* Desktop Navigation */}
            <ul className="hidden sm:flex justify-center   ">
                {navItems.map((item: InavItem) => (
                    <li
                        key={item.id}
                        className="p-3 hover:bg-[#00df9a] rounded-xl cursor-pointer
                                   duration-300 hover:text-black flex items-center"
                    >
                        <Link href={item.route}>{item.text}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Icon */}
            <div
                onClick={handleNav}
                className=" sm:hidden pr-5 flex justify-center"
            >
                {nav ? (
                    <div className="flex items-center">
                        <AiOutlineClose size={30} />
                    </div>
                ) : (
                    <div className="flex items-center">
                        <AiOutlineMenu size={30} />
                    </div>
                )}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? "fixed sm:hidden left-0 top-0 w-[50%] h-full border-r  bg-gray-800 ease-in-out duration-500"
                        : "ease-in-out w-[50%] duration-500 fixed top-0 bottom-0 left-[-100%]"
                }
            >
                {/* Mobile Logo */}
                <h1 className="w-full text-3xl font-bold  m-4">Páginas</h1>

                {/* Mobile Navigation Items */}
                {navItems.map((item: InavItem) => (
                    <li
                        key={item.id}
                        className="p-2 border-b rounded-xl hover:bg-gray-800 duration-300 hover:text-black cursor-pointer border-gray-600 flex items-center"
                    >
                        <Link
                            className="flex-grow  text-center py-1 rounded-xl"
                            href={item.route}
                            onClick={handleNav}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
