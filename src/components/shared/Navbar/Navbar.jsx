"use client";

import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiChevronDown, FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import Image from "next/image";

const Navbar = () => {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);

    const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

    return (
        <div>
            <nav className="navbar bg-white shadow-md">
                <div className="container mx-auto flex items-center justify-between py-4 px-6">
                    {/* Logo */}
                    <div className="logo">
                        <Link href="/">
                            <Image
                                src="/Assets/Logo.png"
                                alt="DiscountMe Logo"
                                className="cursor-pointer"
                                width={120}
                                height={40}
                            />
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button onClick={toggleMobileMenu} className="text-gray-600">
                            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    {/* Desktop and Mobile Navigation */}
                    <div
                        className={`flex-1 lg:flex lg:items-center lg:justify-between ${isMobileMenuOpen ? "block" : "hidden"
                            } lg:block`}
                    >
                        {/* Search Bar */}
                        <div className="relative hidden lg:block lg:ml-10">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black">
                                <FiSearch size={17} />
                            </span>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-72 rounded-full pl-10 pr-16 py-2 border border-gray-300 focus:ring focus:ring-orange-300 focus:outline-none"
                            />
                            <button
                                className="absolute right-0.5 top-1/2 transform -translate-y-1/2 bg-orange-500 px-4 py-2 rounded-r-full hover:bg-orange-600"
                            >
                                Search
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="nav-links flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-4 lg:mt-0">
                            {/* Categories Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={toggleCategories}
                                    className="flex items-center px-4 py-2 text-gray-500 hover:text-orange-500"
                                >
                                    All Categories
                                    <FiChevronDown className="ml-2 text-black" size={18} />
                                </button>
                                {isCategoriesOpen && (
                                    <div className="dropdown absolute bg-white shadow-lg rounded-md mt-2 text-gray-500 z-50">
                                        <ul className="py-2">
                                            <li className="px-4 py-2 hover:text-orange-500">
                                                <Link href="/category1">Category 1</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:text-orange-500">
                                                <Link href="/category2">Category 2</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:text-orange-500">
                                                <Link href="/category3">Category 3</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:text-orange-500">
                                                <Link href="/category4">Category 4</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:text-orange-500">
                                                <Link href="/category2">Category 5</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:text-orange-500">
                                                <Link href="/aboutus">About Us</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:text-orange-500">
                                                <Link href="/termsofuse">Terms of use</Link>
                                            </li>
                                            <li className="px-4 py-2 hover:text-orange-500">
                                                <Link href="/privacypolicy">Privacy Policy</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <Link href="/coupon" className="text-gray-600 hover:text-orange-500">
                                Coupon
                            </Link>
                            <Link href="/support" className="text-gray-600 hover:text-orange-500">
                                Support
                            </Link>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center gap-6 mt-4 lg:mt-0">
                            <Link href="/cart">
                                <FiShoppingCart className="text-gray-600 hover:text-orange-500" />
                            </Link>
                            {/* Profile Dropdown */}
                            <div className="relative">
                                <button onClick={toggleProfileMenu} className="text-gray-600 hover:text-orange-500">
                                    <LuUserRound size={15} />
                                </button>
                                {isProfileMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li>
                                                <Link href="/signin" className="block px-4 py-2 hover:text-orange-500">
                                                    Sign In
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/register" className="block px-4 py-2 hover:text-orange-500">
                                                    Register
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <hr className="border-gray-300" />
        </div>
    );
};

export default Navbar;
