import React, { useState } from "react";

import { AiFillCloseCircle } from "react-icons/ai";

export default function FlightBooking() {
  const [promo, setPromo] = useState(false);
  return (
    <section className="bg-gradient-to-b">
      <div className="max-w-screen-xl px-5 mx-auto">
        <div className="card">
          <h2 className="font-semibold text-2xl">Where are you flying?</h2>
          {/* Inputs */}
          <div>
            <div className="flex flex-col sm:flex-row justify-between mt-4">
              <div className="my-2">
                <label className="font-medium">From - To</label>
                <input
                  className="placeholder:text-slate-400 w-full py-2 px-4 block rounded-md border border-gray-600 focus:ring-0"
                  placeholder="Write something creative. . . "
                  type="text"
                  name="from-to"
                  defaultValue="Lahore - Karachi"
                />
              </div>
              <div className="my-2">
                <label className="font-medium">Trip</label>
                <input
                  className="placeholder:text-slate-400 w-full py-2 px-4 block rounded-md border border-gray-600 focus:ring-0"
                  placeholder="Write something creative. . . "
                  type="text"
                  name="from-to"
                  defaultValue="Return"
                />
              </div>
              <div className="my-2">
                <label className="font-medium">Depart Return</label>
                <input
                  className="placeholder:text-slate-400 w-full py-2 px-4 block rounded-md border border-gray-600 focus:ring-0"
                  placeholder="Write something creative. . . "
                  type="text"
                  name="from-to"
                  defaultValue="17 March, 2023"
                />
              </div>
              <div className="my-2">
                <label className="font-medium">Pasenger - Class</label>
                <input
                  className="placeholder:text-slate-400 w-full py-2 px-4 block rounded-md border border-gray-600 focus:ring-0"
                  placeholder="Write something creative. . . "
                  type="text"
                  name="from-to"
                  defaultValue="Eonomy"
                />
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex my-4 justify-end items-center">
            <button
              onClick={() => {
                setPromo(true);
              }}
              className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md"
            >
              + Add promo code
            </button>
            <button
              onClick={() => {
                alert("No flight is avaliable for this root");
              }}
              className="px-4 py-2 ml-3 rounded-md bg-primary-color cursor-pointer text-white"
            >
              Show Flights
            </button>
          </div>
          {/* Available promo codes */}

          {promo && (
            <div className="flex justify-center">
              <div className="border py-2 px-8 rounded-md relative">
                <AiFillCloseCircle
                  onClick={() => {
                    setPromo(false);
                  }}
                  size={25}
                  className="text-gray-500 absolute cursor-pointer -top-2 -right-2"
                />
                <h2 className="font-medium">Available Promo codes</h2>
                <div className="flex space-x-2 mt-2">
                  <button className="px-4 py-1 bg-gray-100  rounded-md">
                    ASK20
                  </button>
                  <button className="px-4 py-1 bg-gray-100 rounded-md">
                    GET10
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
