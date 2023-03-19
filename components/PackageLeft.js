import React from "react";
import Image from "next/image";
import PackageImage from "../public/assets/package.png";

export default function PackageLeft() {
  return (
    <div>
      <div className="card py-0 flex space-x-6 font-semibold">
        <span className="cursor-pointer border-b-4 border-primary-color py-4">
          OVERVIEW
        </span>
        <span className="cursor-pointer py-4">ITINERARY</span>
        <span className="cursor-pointer py-4">ADDITIONAL INFO</span>
      </div>
      {/* Package overview */}
      <div className="my-10">
        <div className="w-full">
          <Image
            src={PackageImage}
            alt="image"
            width={2000}
            sizes="100%"
          ></Image>
        </div>

        <h1 className="font-semibold text-2xl my-4">Package Overview</h1>

        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo
          placeat optio suscipit aspernatur assumenda amet aperiam
          reprehenderit? Quos ipsum, minus magni beatae dolorem eius voluptates.
          Beatae rem delectus animi blanditiis alias veritatis nobis deleniti
          perspiciatis atque ab voluptate modi architecto non dolorem, fugit
          ratione! Praesentium, ad numquam. Hic veniam ducimus, inventore sed
          aut, enim corrupti eaque, repellat maxime nulla incidunt impedit minus
          molestiae! Eligendi vero, suscipit esse facere numquam nulla excepturi
          itaque harum accusamus minima provident quidem aspernatur dignissimos
          eius error asperiores eaque sapiente tempore soluta ducimus. Itaque
          cumque animi praesentium doloribus ad rem odit hic asperiores modi
          provident quaerat delectus facere id soluta, reprehenderit omnis ipsa
          ipsum vero consequuntur blanditiis libero inventore expedita corporis?
          Commodi, fuga. Unde pariatur beatae dicta vitae dolore a, architecto,
        </p>
      </div>
      <hr className="border border-gray-500" />
      {/* Day wise */}
      <div>
        <h1 className="text-2xl mt-4 font-semibold">Day Wise Iteneary</h1>

        <div className="md:flex flex-row justify-between mt-8">
          <div className="mb-3">
            <button className="px-6 py-2 rounded-md bg-primary-color cursor-pointer  text-white">
              Day 1
            </button>
          </div>
          <div className="card md:w-10/12">
            <h2 className="font-semibold text-md">ARRIVAL AT MALDIVES</h2>
            <hr className="border-gray-500 my-3" />
            <p>
              On arrival at the Maldives International airport you will be met
              by the resorts airport representative and will be transferred to
              Vivanta By Taj Coral Reef by a speedboat shared basis. Afternoon
              free for relaxation. Overnight stay at the resort.
            </p>
          </div>
        </div>
        <div className="md:flex justify-between mt-8">
          <div className="mb-3">
            <button className="px-6 py-2 rounded-md bg-primary-color cursor-pointer  text-white">
              Day 2
            </button>
          </div>
          <div className="card md:w-10/12">
            <h2 className="font-semibold text-md">MALDIVES</h2>
            <hr className="border-gray-500 my-3" />
            <p>
              On arrival at the Maldives International airport you will be met
              by the resorts airport representative and will be transferred to
              Vivanta By Taj Coral Reef by a speedboat shared basis . Afternoon
              free for relaxation. Overnight stay at the resort.
            </p>
          </div>
        </div>
        <div className="md:flex justify-between mt-8">
          <div className="mb-3">
            <button className="px-6 py-2 rounded-md bg-primary-color cursor-pointer  text-white">
              Day 3
            </button>
          </div>
          <div className="card md:w-10/12">
            <h2 className="font-semibold text-md">DEPATURE FROM MALDIVES</h2>
            <hr className="border-gray-500 my-3" />
            <p>
              On arrival at the Maldives International airport you will be met
              by the resorts airport representative and will be transferred to
              Vivanta By Taj Coral Reef by a speedboat shared basis . Afternoon
              free for relaxation. Overnight stay at the resort.
            </p>
          </div>
        </div>
      </div>

      {/* Additional info */}
      <hr className="border my-8 border-gray-500" />
      <h2 className="font-semibold text-2xl">Additional Info</h2>
      <div className="card my-6">
        <h2 className="text-md font-semibold">INCLUSION</h2>
        <ul className="list-disc ml-4 mt-3 text-sm">
          <li>4 Nights accommodation in selected room category</li>
          <li>Meal Plan: Full Board (Breakfast, Lunch & Dinner)</li>
          <li>Dolphin Watching Tour with Lunch, Water & Soft Drinks</li>
          <li>In-Room 500ml Bottled Mineral Water Per Day</li>
        </ul>
      </div>
      <div className="card my-6">
        <h2 className="text-md font-semibold">EXCLUSION</h2>
        <ul className="list-disc ml-4 mt-3 text-sm">
          <li>4 Nights accommodation in selected room category</li>
          <li>Meal Plan: Full Board (Breakfast, Lunch & Dinner)</li>
          <li>Dolphin Watching Tour with Lunch, Water & Soft Drinks</li>
          <li>In-Room 500ml Bottled Mineral Water Per Day</li>
        </ul>
      </div>
    </div>
  );
}
