import React from "react";
import MapImage from "../public/assets/map-3.png";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="bg-gradient-to-b">
      <div className="max-w-screen-xl px-5 mx-auto mt-28">
        <div className="relative bg-cadetblue opacity-90 py-6 px-6 rounded-md">
          <div className="md:flex items-center">
            <div className="text-white md:w-1/2">
              <p className="text-4xl font-semibold">
                Let’s Ready to Explore The
              </p>
              <p className="text-4xl font-semibold my-3">World With Us.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Pellentesque efficitur ac quam in congue. </p>
            </div>
            <div className="mix-blend-multiply mt-10">
              <Image src={MapImage} alt="map image"></Image>
            </div>
          </div>
          <button
            onClick={() => {
              alert("Thanks! for reaching out us");
            }}
            className="absolute bottom-8 right-1/2  md:right-0 md:bottom-1/2 px-5 py-2 mr-6 rounded-md bg-white font-semibold"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
