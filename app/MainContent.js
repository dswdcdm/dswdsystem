import LeftMainContent from "@/components/LeftMainContent";
import Link from "next/link";
import React from "react";

const MainContent = () => {
  return (
    <>
    <div className="maindiv md:flex gap-2  justify-between h-[calc-(100vh-10px)]">
      <section className="mt-30">
      <h1 className="text-2xl  font-bold text-gray-500 p-4">PRODUCTS</h1>
        <div className="p-4 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10">
            
            <Link href={'/'} className=" min-w-[380px] max-w-[1400px]"> 
            <div className="card bg-gray-300 rounded p-4 flex gap-10">
                <span className="w-1/3 items-center text-center"> 
                    <img src="/assets/Logo.png"/>
                </span>
                <div className="ml-5 bg-gray-200 w-full p-2">
                    <h1 className="font-semibold">PRODUCT NAME</h1>
                    <p>DESCRIPTION</p>
                    <p className="mt-4">BIDDER NAME : NONE</p>
                    <p>BIDDER PRICE : NONE</p>
                <div className="space-x-4 text-center mt-4">
                    <button className="bg-green-400  p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-green-500 hover:text-white transition ease-in-out delay-75 duration-300">agree</button>
                    <button className="bg-red-400 p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-red-500 hover:text-white transition ease-in-out delay-75 duration-300">disagree</button>
                </div>
                </div>
            </div></Link>
           

            <Link href={'/'} className=" min-w-[380px] max-w-[1400px]"> 
            <div className="card bg-gray-300 rounded p-4 flex gap-10">
                <span className="w-1/3 items-center text-center"> 
                    <img src="/assets/Logo.png"/>
                </span>
                <div className="ml-5 bg-gray-200 w-full p-2">
                    <h1 className="font-semibold">PRODUCT NAME</h1>
                    <p>DESCRIPTION</p>
                    <p className="mt-4">BIDDER NAME : NONE</p>
                    <p>BIDDER PRICE : NONE</p>
                <div className="space-x-4 text-center mt-4">
                    <button className="bg-green-400  p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-green-500 hover:text-white transition ease-in-out delay-75 duration-300">agree</button>
                    <button className="bg-red-400 p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-red-500 hover:text-white transition ease-in-out delay-75 duration-300">disagree</button>
                </div>
                </div>
            </div></Link>

            <Link href={'/'} className=" min-w-[380px] max-w-[1400px]"> 
            <div className="card bg-gray-300 rounded p-4 flex gap-10">
                <span className="w-1/3 items-center text-center"> 
                    <img src="/assets/Logo.png"/>
                </span>
                <div className="ml-5 bg-gray-200 w-full p-2">
                    <h1 className="font-semibold">PRODUCT NAME</h1>
                    <p>DESCRIPTION</p>
                    <p className="mt-4">BIDDER NAME : NONE</p>
                    <p>BIDDER PRICE : NONE</p>
                <div className="space-x-4 text-center mt-4">
                    <button className="bg-green-400  p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-green-500 hover:text-white transition ease-in-out delay-75 duration-300">agree</button>
                    <button className="bg-red-400 p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-red-500 hover:text-white transition ease-in-out delay-75 duration-300">disagree</button>
                </div>
                </div>
            </div></Link>

            <Link href={'/'} className=" min-w-[380px] max-w-[1400px]"> 
            <div className="card bg-gray-300 rounded p-4 flex gap-10">
                <span className="w-1/3 items-center text-center"> 
                    <img src="/assets/Logo.png"/>
                </span>
                <div className="ml-5 bg-gray-200 w-full p-2">
                    <h1 className="font-semibold">PRODUCT NAME</h1>
                    <p>DESCRIPTION</p>
                    <p className="mt-4">BIDDER NAME : NONE</p>
                    <p>BIDDER PRICE : NONE</p>
                <div className="space-x-4 text-center mt-4">
                    <button className="bg-green-400  p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-green-500 hover:text-white transition ease-in-out delay-75 duration-300">agree</button>
                    <button className="bg-red-400 p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-red-500 hover:text-white transition ease-in-out delay-75 duration-300">disagree</button>
                </div>
                </div>
            </div></Link>

            <Link href={'/'} className=" min-w-[380px] max-w-[1400px]"> 
            <div className="card bg-gray-300 rounded p-4 flex gap-10">
                <span className="w-1/3 items-center text-center"> 
                    <img src="/assets/Logo.png"/>
                </span>
                <div className="ml-5 bg-gray-200 w-full p-2">
                    <h1 className="font-semibold">PRODUCT NAME</h1>
                    <p>DESCRIPTION</p>
                    <p className="mt-4">BIDDER NAME : NONE</p>
                    <p>BIDDER PRICE : NONE</p>
                <div className="space-x-4 text-center mt-4">
                    <button className="bg-green-400  p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-green-500 hover:text-white transition ease-in-out delay-75 duration-300">agree</button>
                    <button className="bg-red-400 p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-red-500 hover:text-white transition ease-in-out delay-75 duration-300">disagree</button>
                </div>
                </div>
            </div></Link>

            <Link href={'/'} className=" min-w-[380px] max-w-[1400px]"> 
            <div className="card bg-gray-300 rounded p-4 flex gap-10">
                <span className="w-1/3 items-center text-center"> 
                    <img src="/assets/Logo.png"/>
                </span>
                <div className="ml-5 bg-gray-200 w-full p-2">
                    <h1 className="font-semibold">PRODUCT NAME</h1>
                    <p>DESCRIPTION</p>
                    <p className="mt-4">BIDDER NAME : NONE</p>
                    <p>BIDDER PRICE : NONE</p>
                <div className="space-x-4 text-center mt-4">
                    <button className="bg-green-400  p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-green-500 hover:text-white transition ease-in-out delay-75 duration-300">agree</button>
                    <button className="bg-red-400 p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-red-500 hover:text-white transition ease-in-out delay-75 duration-300">disagree</button>
                </div>
                </div>
            </div></Link>

            <Link href={'/'} className=" min-w-[380px] max-w-[1400px]"> 
            <div className="card bg-gray-300 rounded p-4 flex gap-10">
                <span className="w-1/3 items-center text-center"> 
                    <img src="/assets/Logo.png"/>
                </span>
                <div className="ml-5 bg-gray-200 w-full p-2">
                    <h1 className="font-semibold">PRODUCT NAME</h1>
                    <p>DESCRIPTION</p>
                    <p className="mt-4">BIDDER NAME : NONE</p>
                    <p>BIDDER PRICE : NONE</p>
                <div className="space-x-4 text-center mt-4">
                    <button className="bg-green-400  p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-green-500 hover:text-white transition ease-in-out delay-75 duration-300">agree</button>
                    <button className="bg-red-400 p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-red-500 hover:text-white transition ease-in-out delay-75 duration-300">disagree</button>
                </div>
                </div>
            </div></Link>

            <Link href={'/'} className=" min-w-[380px] max-w-[1400px]"> 
            <div className="card bg-gray-300 rounded p-4 flex gap-10">
                <span className="w-1/3 items-center text-center"> 
                    <img src="/assets/Logo.png"/>
                </span>
                <div className="ml-5 bg-gray-200 w-full p-2">
                    <h1 className="font-semibold">PRODUCT NAME</h1>
                    <p>DESCRIPTION</p>
                    <p className="mt-4">BIDDER NAME : NONE</p>
                    <p>BIDDER PRICE : NONE</p>
                <div className="space-x-4 text-center mt-4">
                    <button className="bg-green-400  p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-green-500 hover:text-white transition ease-in-out delay-75 duration-300">agree</button>
                    <button className="bg-red-400 p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-red-500 hover:text-white transition ease-in-out delay-75 duration-300">disagree</button>
                </div>
                </div>
            </div></Link>

            <Link href={'/'} className=" min-w-[380px] max-w-[1400px]"> 
            <div className="card bg-gray-300 rounded p-4 flex gap-10">
                <span className="w-1/3 items-center text-center"> 
                    <img src="/assets/Logo.png"/>
                </span>
                <div className="ml-5 bg-gray-200 w-full p-2">
                    <h1 className="font-semibold">PRODUCT NAME</h1>
                    <p>DESCRIPTION</p>
                    <p className="mt-4">BIDDER NAME : NONE</p>
                    <p>BIDDER PRICE : NONE</p>
                <div className="space-x-4 text-center mt-4">
                    <button className="bg-green-400  p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-green-500 hover:text-white transition ease-in-out delay-75 duration-300">agree</button>
                    <button className="bg-red-400 p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-red-500 hover:text-white transition ease-in-out delay-75 duration-300">disagree</button>
                </div>
                </div>
            </div></Link>

             <Link href={'/'} className=" min-w-[380px] max-w-[1400px]"> 
            <div className="card bg-gray-300 rounded p-4 flex gap-10">
                <span className="w-1/3 items-center text-center"> 
                    <img src="/assets/Logo.png"/>
                </span>
                <div className="ml-5 bg-gray-200 w-full p-2">
                    <h1 className="font-semibold">PRODUCT NAME</h1>
                    <p>DESCRIPTION</p>
                    <p className="mt-4">BIDDER NAME : NONE</p>
                    <p>BIDDER PRICE : NONE</p>
                <div className="space-x-4 text-center mt-4">
                    <button className="bg-green-400  p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-green-500 hover:text-white transition ease-in-out delay-75 duration-300">agree</button>
                    <button className="bg-red-400 p-1 w-1/3 text-gray-800 rounded hover:cursor-pointer hover:bg-red-500 hover:text-white transition ease-in-out delay-75 duration-300">disagree</button>
                </div>
                </div>
            </div></Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default MainContent;
