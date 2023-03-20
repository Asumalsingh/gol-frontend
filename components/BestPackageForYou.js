import React, { useState } from "react";
import Photo1 from "../public/assets/home/photo-1.png";
import Photo2 from "../public/assets/home/photo-2.png";
import Photo3 from "../public/assets/home/photo-3.png";
import Image from "next/image";
import { MdLocationPin, MdStarRate } from "react-icons/md";
import Link from "next/link";

export default function BestPackageForYou() {
  const data = [
    {
      image: Photo1,
      location: "Indonesia",
      rating: "4.5",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
    },
    {
      image: Photo2,
      location: "Indonesia",
      rating: "4.5",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
    },
    {
      image: Photo3,
      location: "Indonesia",
      rating: "4.5",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
    },
  ];

  const tabs = ["Maldives", "Samudram", "Cordelia", "Agatti", "More"];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="bg-gradient-to-b">
      <div className="max-w-screen-xl px-5 mx-auto mt-28">
        <div className="text-center">
          <h2 className="font-bold text-2xl mb-2">Best Packages For You</h2>
          <p>
            This is a unique experience on ship, sea and land, exploring
            different coral islands of Lakshadweep.
          </p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-5 my-14 border-2 border-gray-300 divide-x-2 divide-gray-300 rounded-md font-semibold text-xs sm:text-base">
          {tabs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                }}
                className={`text-center ${
                  activeTab === index && "bg-primary-color text-white"
                } text-primary-color py-3 sm:py-4 cursor-pointer`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Places */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {data.map((item, index) => {
            return (
              <div key={index} className="bg-white shadow-md rounded-md">
                <div className="w-full">
                  <Image
                    src={item.image}
                    alt="Image"
                    className="rounded-t-md"
                    width={2000}
                  ></Image>
                </div>
                <div className="px-4">
                  <div className="flex justify-between my-2">
                    <div className="flex items-center text-lg font-semibold">
                      <MdLocationPin />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center text-lg font-semibold">
                      <MdStarRate className="text-primary-color mr-1" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                  <p>{item.description}</p>
                  <div className="flex justify-center my-5">
                    <button
                      onClick={() => {
                        alert("Successfully Booked!");
                      }}
                      className="px-4 py-2 ml-3 rounded-md bg-primary-color cursor-pointer hover:scale-110 duration-100 text-white"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Link
            href="/packages"
            className="border-2 my-14 rounded-md font-bold py-2 px-4 text-primary-color border-primary-color "
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
