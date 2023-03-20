import React from "react";
import Image from "next/image";
import mapImage from "../public/assets/map.png";
import Girl from "../public/assets/illustration.png";
import Link from "next/link";

import { MdOutlineExplore } from "react-icons/md";

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b">
        <div className="max-w-screen-xl px-5 mx-auto">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mt-32 sm:mt-40">
              <button className="bg-dark-light-blue z-50 cursor-pointer flex items-center text-xl px-4 py-2 rounded-3xl">
                Visit <MdOutlineExplore size={20} className="ml-4" />
              </button>
              <div className="my-12 font-bold text-5xl sm:text-7xl ">
                <p className=" text-sub-heading ">The Exotic</p>
                <p className=" my-4 text-primary-color">Lakshadweep </p>
                <p className=" text-sub-heading">Islands</p>
              </div>

              <Link
                href="/packages"
                className="border-2 rounded-md font-bold py-2 px-4 text-primary-color border-primary-color "
              >
                Discover Now
              </Link>
            </div>
            <div className="relative">
              <Image src={mapImage} alt="Map image"></Image>

              <span className="absolute z-0 top-10 sm:top-40 right-0">
                <Image src={Girl} alt="Girl image" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
