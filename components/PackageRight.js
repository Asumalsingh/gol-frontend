import React from "react";

import { CiSearch } from "react-icons/ci";

export default function PackageRight() {
  return (
    <div>
      {/* Starting from section */}
      <div className="card py-4 text-center">
        Starting From{" "}
        <span className="text-primary-color ml-2 font-bold">50,000</span>{" "}
      </div>

      <div className="text-center bg-light-blue rounded-md px-4 py-4 my-6">
        <h2 className="font-semibold">Want to Go For A Memorable Holiday?</h2>
        <p>Provide Your Details to Know Best Holiday Deals</p>
      </div>

      {/* Booking input form */}
      <div className="card">
        <div className="mb-6">
          <label className="font-medium text-gray-600">Package Name</label>
          <input
            className="placeholder:text-slate-400 w-full mt-2 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
            placeholder="Explore maldives "
            type="text"
          />
        </div>
        <div className="mb-6">
          <label className="font-medium text-gray-600">City of Departure</label>
          <input
            className="placeholder:text-slate-400 w-full mt-2 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
            placeholder="Indore "
            type="text"
          />
        </div>
        <div className="mb-6">
          <label className="font-medium text-gray-600">Date of Departure</label>
          <input
            className="placeholder:text-slate-400 w-full mt-2 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
            placeholder="18 April "
            type="text"
          />
        </div>

        <label className="font-medium text-gray-600"> Contact Details</label>

        <hr className="border mt-1 mb-6 border-gray-400" />
        {/* Contact details */}
        <div className="mb-6">
          <input
            className="placeholder:text-slate-400 w-full mt-2 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
            placeholder="Your name "
            type="text"
          />
        </div>
        <div className="mb-6">
          <input
            className="placeholder:text-slate-400 w-full mt-2 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
            placeholder="Your Email Address "
            type="email"
          />
        </div>
        <div className="flex space-x-3">
          <div className="mb-6 text-slate-400 mt-2 py-2 px-4 block rounded-md border border-gray-500">
            <span>+91</span>
          </div>
          <div className="mb-6 w-10/12">
            <input
              className="placeholder:text-slate-400 w-full mt-2 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
              placeholder="Your Phone number "
              type="number"
            />
          </div>
        </div>

        {/* Submit */}
        <button className="text-center w-full mt-2 py-2 px-4 block rounded-md border text-primary-color border-primary-color font-semibold">
          Send Query
        </button>
        <div className="text-center text-gray-500 my-6">OR</div>
        <button className="text-center w-full mt-2 py-2 px-4 rounded-md bg-primary-color text-white">
          Book Now
        </button>
      </div>

      {/* Need help secion */}
      <div className="card text-center my-6 text-sm">
        <h2 className="text-lg font-semibold">Need help?</h2>
        <p className="my-4">+91 7000635238</p>
        <p>ask@gmail.com</p>
      </div>

      {/* FAQ  */}
      <div className="card">
        <div className="text-center">
          <h2 className="font-semibold">FAQ</h2>
        </div>
        <div className="relative my-4">
          <input
            type="search"
            placeholder="Search a question"
            className="bg-light-blue py-2 px-4 w-full border-none outline-none"
          />
          <CiSearch
            size={25}
            className="absolute top-2 text-gray-500 cursor-pointer right-2"
          />
        </div>

        <div className="border mb-6 flex justify-between items-center border-gray-400 px-4 py-2 rounded-sm">
          <h2 className="font-medium">Try using our templates!</h2>
          <span className="font-semibold text-2xl">+</span>
        </div>
        <div className="border mb-6 flex justify-between items-center border-gray-400 px-4 py-2 rounded-sm">
          <div>
            <h2 className="font-medium">Try using our templates!</h2>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              sequi doloribus
            </p>
          </div>
          <span className="font-semibold text-2xl">-</span>
        </div>
        <div className="border mb-6 flex justify-between items-center border-gray-400 px-4 py-2 rounded-sm">
          <h2 className="font-medium">Try using our templates!</h2>
          <span className="font-semibold text-2xl">+</span>
        </div>
        <div className="border mb-6 flex justify-between items-center border-gray-400 px-4 py-2 rounded-sm">
          <h2 className="font-medium">Try using our templates!</h2>
          <span className="font-semibold text-2xl">+</span>
        </div>
      </div>
    </div>
  );
}
