import React from "react";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import WhatCustomerSaying from "../components/WhatCustomerSaying";
import Navbar from "../components/Navbar";

export default function About() {
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
      <section className="">
        <div
          className="h-screen"
          style={{
            backgroundImage: `url('/assets/map-3.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="max-w-screen-xl px-5 pt-28 mx-auto">
            <div className="h-full">
              <div
                className="text-center pt-44 pb-60"
                style={{
                  backgroundImage: `url('/assets/circle.png')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundSize: "350px",
                }}
              >
                <h1 className="font-bold text-6xl">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurTeam />
      <WhatCustomerSaying />
      <Footer />
    </>
  );
}
