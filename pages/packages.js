import React from "react";
import Footer from "../components/Footer";
import PackageLeft from "../components/PackageLeft";
import PackageRight from "../components/PackageRight";
import PackagesTop from "../components/PackagesTop";

export default function Packages() {
  return (
    <>
      <PackagesTop />
      <section className="bg-gradient-to-b">
        <div className="max-w-screen-xl px-5 mx-auto mt-28">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16">
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
