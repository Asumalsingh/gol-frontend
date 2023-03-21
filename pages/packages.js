import React from "react";
import Footer from "../components/Footer";
import PackageLeft from "../components/PackageLeft";
import PackageRight from "../components/PackageRight";
import PackagesTop from "../components/PackagesTop";
import Navbar from "../components/Navbar";

export default function Packages() {
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-40 sm:h-48 z-30 px-5"
        style={{
          background:
            "linear-gradient(180deg, #E5F8FE 14.25%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <Navbar />
      </div>
      <PackagesTop />
      <section className="bg-gradient-to-b">
        <div className="max-w-screen-xl px-5 mx-auto mt-28">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-28">
            <div className="col-span-2">
              <PackageLeft />
            </div>
            <div className="">
              <PackageRight />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
