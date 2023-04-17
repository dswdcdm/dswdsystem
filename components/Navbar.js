"use client";

import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiMenu2Line } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { BiHomeAlt ,BiDetail} from "react-icons/bi";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full mx-auto bg-gray-300 py-6">
      <div className="flex w-auto flex-row md:px-20 px-10 text-center justify-between shadow-md pb-5">
        <div className="hover:cursor-pointer">
          <Link href={"/"} className="flex flex-row">
            <img src="/assets/Logo.png" className="w-20" />
            <motion.span initial={{opacity: 0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-2 text-2xl font-bold text-gray-500 hidden md:flex">DSWD <span className="mx-2 hidden lg:flex text-red-700">BGMD</span> </motion.span>
          </Link>
        </div>

        
        <div className="md:hidden">
          {showMenu ? (
            <RiMenu2Line
              onClick={() => setShowMenu(false)}
              className="hover:cursor-pointer mt-2 text-3xl"
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setShowMenu(true)}
              className="hover:cursor-pointer mt-2 text-3xl "
            />
          )}
        </div>

        <div className=" text-center mt-2  md:flex hidden">
          <ul className="flex flex-row gap-7">
            <motion.li initial={{y:-1, opacity: 0}} animate={{y:1,opacity:1}} transition={{duration:0.1, delay:0.1}} className="hover:bg-gray-400 rounded-md p-2  hover:text-white hover:cursor-pointer transition ease-in-out delay-75 duration-300">
              <Link href={"/"} className="flex flex-row gap-2"> <BiHomeAlt className=" text-xl"/>HOME</Link>
            </motion.li>
            <motion.li initial={{y:-1, opacity: 0}} animate={{y:1,opacity:1}} transition={{duration:0.1, delay:0.2}} className="hover:bg-gray-400 rounded-md p-2 hover:text-white hover:cursor-pointer transition ease-in-out delay-75 duration-300">
              <Link href={"/"} className="flex flex-row gap-2"><BiDetail className=" text-xl"/>BIDDING</Link>
            </motion.li>
            <motion.li initial={{y:-1, opacity: 0}} animate={{y:1,opacity:1}} transition={{duration:0.1, delay:0.3}} className="hover:bg-gray-400 rounded-md p-2 hover:text-white hover:cursor-pointer transition ease-in-out delay-75 duration-300">
              <Link href={"/"} className="flex flex-row gap-2"><BsFillPersonFill className=" text-xl"/>PROFILE</Link>
            </motion.li>
          </ul>
        </div>
      </div>

      {showMenu ? (
        <div className="mt-5 text-center w-full   md:hidden">
          <ul className="space-y-2 p-2">
            <li className="hover:bg-gray-600 p-2  hover:text-white hover:cursor-pointer transition ease-in-out delay-75 duration-300">
              <Link href={"/"}>
               HOME
              </Link>
            </li>
            <li className="hover:bg-gray-600 p-2 hover:text-white hover:cursor-pointer transition ease-in-out delay-75 duration-300">
              <Link href={"/"}>BIDDING</Link>
            </li>
            <li className="hover:bg-gray-600 p-2 hover:text-white hover:cursor-pointer transition ease-in-out delay-75 duration-300">
              <Link href={"/"}>PROFILE</Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
