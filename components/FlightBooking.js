import React from "react";

export default function FlightBooking() {
  return (
    <section className="bg-gradient-to-b">
      <div className="max-w-screen-xl px-5 mx-auto">
        <div className="card">
          <h2 className="font-semibold text-2xl">Where are you flying?</h2>
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
          <div className="flex my-4 justify-end items-center">
            <p>+ Add promo code</p>
            <button className="px-4 py-2 ml-3 rounded-md bg-primary-color cursor-pointer text-white">Show Flights</button>
          </div>
        </div>
      </div>
    </section>
  );
}
