import React from "react";
import { IoSearchCircle } from "react-icons/io5";

export default function PackagesTop() {
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
              <span className="relative">
                <input
                  className="placeholder:text-slate-400 bg-transparent w-80 max-w-96 py-3 px-4 block rounded-full border-2 border-gray-500 focus:border-gray-600 focus:outline-none focus:ring-0"
                  placeholder="Write something . . . "
                  type="text"
                  name="from-to"
                />

                <button className=" absolute top-0 right-0 text-primary-color">
                  <IoSearchCircle size={52} />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
