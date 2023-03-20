import React, { useState, useEffect } from "react";
import { IoSearchCircle } from "react-icons/io5";
import Link from "next/link";

export default function PackagesTop() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <section className="">
      <div
        className=""
        style={{
          backgroundImage: `url('/assets/map-3.png')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="max-w-screen-xl px-5 md:px-0 pt-28 mx-auto">
          <div className="h-full">
            <div className="text-center py-24">
              <h1 className="font-bold text-7xl">Maldives</h1>
            </div>
            <div className="flex justify-center pb-60">
              <div>
                <span className="relative">
                  <input
                    className="placeholder:text-slate-400 bg-transparent w-80 max-w-96 py-3 px-4 block rounded-full border-2 border-gray-500 focus:border-gray-600 focus:outline-none focus:ring-0"
                    placeholder="Write something . . . "
                    type="text"
                    name=""
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                  />

                  <button className=" absolute top-0 right-0 text-primary-color">
                    <IoSearchCircle
                      onClick={() => {
                        alert("Result not fount");
                      }}
                      size={52}
                    />
                  </button>
                </span>
                <div
                  className={`card mt-4 flex flex-col ${
                    searchInput === "" && "hidden"
                  }`}
                >
                  <Link
                    href="/"
                    className="cursor-pointer w-full my-1 bg-gray-50 py-2 px-6"
                  >
                    Samudram
                  </Link>
                  <Link
                    href="/"
                    className="cursor-pointer w-full my-1 bg-gray-50 py-2 px-6"
                  >
                    Maldives
                  </Link>
                  <Link
                    href="/ "
                    className="cursor-pointer w-full my-1 bg-gray-50 py-2 px-6"
                  >
                    Agatti
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
