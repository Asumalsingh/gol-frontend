import React from "react";
import AdminSidebar from "../../components/AdminSidebar";

export default function SocialLinks() {
  return (
    <>
      <AdminSidebar />
      <section>
        <div className="max-w-screen-xl lg:ml-[310px] px-5 my-24  lg:my-6 mx-auto">
          <div className="bg-dark-light-blue rounded-md text-center py-6 px-4">
            <span className="font-bold text-gray-700 text-2xl">
              Social Links
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
