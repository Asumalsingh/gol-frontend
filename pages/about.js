import React from "react";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import WhatCustomerSaying from "../components/WhatCustomerSaying";

export default function About() {
  return (
    <>
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
