import React from "react";
import Photo1 from "../public/assets/home/photo-4.png";
import Photo2 from "../public/assets/home/photo-5.png";
import Photo3 from "../public/assets/home/photo-6.png";
import { MdLocationPin, MdStarRate } from "react-icons/md";
import Image from "next/image";

export default function IslandStays() {
  const data = [
    {
      image: Photo1,
      location: "Kavaratti",
      rating: "4.5",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
    },
    {
      image: Photo2,
      location: "Kavaratti",
      rating: "4.5",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
    },
    {
      image: Photo3,
      location: "Kavaratti",
      rating: "4.9",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
    },
    {
      image: Photo2,
      location: "Kavaratti",
      rating: "2.5",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
    },
    {
      image: Photo3,
      location: "Kavaratti",
      rating: "4.5",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
    },
    {
      image: Photo1,
      location: "Kavaratti",
      rating: "3.5",
      description:
        "Explore the Beauty of the island for 3 days and 2 nights with our travel agency",
    },
  ];
  return (
    <section className="bg-gradient-to-b">
      <div className="max-w-screen-xl px-5 mx-auto mt-28">
        <div className="text-center mb-16">
          <h2 className="font-bold text-2xl mb-2">Island Stays</h2>
          <p>
            One can choose from a variety of beautiful coral islands which
            offers different staying experiences from thatched huts to luxurious
            modern properties. Every island offers a wider range of water sports
            and beach activities for you to enjoy.
          </p>
        </div>

        {/* Places */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {data.map((item, index) => {
            return (
              <div key={index} className="bg-white shadow-md rounded-md">
                <Image
                  src={item.image}
                  alt="Image"
                  className="rounded-t-md"
                  width={2000}
                ></Image>
                <div className="px-4 py-4">
                  <div className="flex items-center text-lg font-semibold">
                    <MdLocationPin />
                    <span>{item.location}</span>
                  </div>

                  <p>{item.description}</p>

                  <div className="flex items-center justify-between mt-5 mb-2 ">
                    <div className="flex items-center font-semibold text-xl">
                      <MdStarRate className="text-primary-color mr-1" />
                      <span>{item.rating}</span>
                    </div>
                    <button className="px-4 py-1 ml-3 rounded-md bg-primary-color hover:scale-110 duration-100 cursor-pointer text-white">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button className="border-2 my-14 rounded-md font-bold py-2 px-4 text-primary-color border-primary-color ">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
