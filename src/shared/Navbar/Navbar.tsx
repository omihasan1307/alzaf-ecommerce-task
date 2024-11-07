"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaRegUser,
  FaRegHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../../asset/Alzaf Logo Size 300x300 pixel 1.png";
import group from "../../../asset/Group 48099301.png";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="bg-white-b-gray-200">
      {/* pc view */}
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3">
          <Link href={'/'} className="flex items-center">
            <Image src={logo} alt="Alzaf_Logo" className="h-auto w-32" />
          </Link>

          <div className="lg:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div className="hidden lg:flex flex-1 justify-center mx-4">
            <div className="flex justify-center">
              <div className="relative lg:w-[704px] md:w-[450px] w-full ">
                <input
                  placeholder="Search Product"
                  className="border hover:border-baseColor rounded-lg py-2 px-4 pr-10 focus:outline-none w-full bg-grayColor text-sm"
                />
                <button className="absolute inset-y-0 right-0 flex items-center justify-center w-12 bg-baseColor text-white rounded-lg">
                  <CiSearch className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center space-x-4">
            <button className="flex items-center justify-center w-8 h-8 bg-grayColor rounded-lg">
              <CiUser className="text-xl" />
            </button>
            <button className="flex items-center justify-center w-8 h-8 bg-grayColor rounded-lg">
              <CiHeart className="text-xl" />
            </button>
            <button className="flex items-center justify-center w-8 h-8 bg-grayColor rounded-lg">
              <CiShoppingCart className="text-xl" />
            </button>
            <Image src={group} alt={"group"} />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-grayColor w-full px-4 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="w-full bg-gray-200 placeholder:text-gray-400 placeholder:text-sm rounded-xl py-2 pl-4 pr-10 focus:outline-none"
                />
                <span className="absolute flex justify-center items-center right-0 top-0 bg-orange-500 rounded-lg w-[2.4rem] h-[2.43rem] ">
                  <CiSearch className="text-xl text-white" />
                </span>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <button className="bg-[#e4e4e4] rounded-lg shadow-none py-1 px-2 hover:bg-gray-300">
                  <FaRegHeart
                    className="text-gray-600 cursor-pointer"
                    size={20}
                  />
                </button>
                <button className="bg-[#e4e4e4] rounded-lg shadow-none py-1 px-2 hover:bg-gray-300">
                  <FaRegUser
                    className="text-gray-600 cursor-pointer"
                    size={20}
                  />
                </button>
                <button className="bg-[#e4e4e4] rounded-lg shadow-none py-1 px-2 hover:bg-gray-300">
                  <FaShoppingCart
                    className="text-gray-600 cursor-pointer"
                    size={20}
                  />
                </button>
              </div>
              <div className="flex flex-col  items-center space-y-4 mt-4">
                <Link href="/" className="text-sm text-gray-600">
                  Become a Seller
                </Link>
                <Link href="/" className="text-sm text-gray-600">
                  Order Track
                </Link>
                <Link
                  href="/registration"
                  className="text-sm text-orange-500 font-semibold mb-4"
                >
                  Sign up / Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

