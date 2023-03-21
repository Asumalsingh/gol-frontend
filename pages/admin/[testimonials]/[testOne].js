import React from "react";
import AdminSidebar from "../../../components/AdminSidebar";
import Link from "next/link";

export default function TestOne() {
  return (
    <>
      <AdminSidebar />
      <section>
        <div className="max-w-screen-xl lg:ml-[310px] px-5 my-24 lg:my-6 mx-auto">
          <div className="bg-dark-light-blue rounded-md text-center py-6 px-4">
            <span className="font-bold text-gray-700 text-2xl">
              Testimonials
            </span>
          </div>

          <div className="my-6 max-w-lg">
            <div className="mb-4">
              <label htmlFor="" className="font-semibold">
                Name
              </label>
              <input
                className="placeholder:text-slate-400 w-full mb-4 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
                placeholder="Enter name"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="font-semibold">
                Image
              </label>
              <input
                className="placeholder:text-slate-400 w-full mb-4 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
                placeholder="Enter image url "
                type="text"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="font-semibold">
                Country
              </label>
              <input
                className="placeholder:text-slate-400 w-full mb-4 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
                placeholder="Enter country"
                type="text"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="" className="font-semibold">
                Review
              </label>
              <textarea
                placeholder="Write review here. . ."
                name=""
                id=""
                rows="3"
                className="placeholder:text-slate-400 w-full mb-4 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
              ></textarea>
            </div>

            <div className="flex justify-end space-x-4">
              <button className="py-2 border px-6 rounded-md">Cancel</button>
              <button className="bg-primary-color py-2 px-6 rounded-md text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
