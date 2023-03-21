import Head from "next/head";
import React from "react";
import HomeComp from "../components/Home";
import FlightBooking from "../components/FlightBooking";
import Footer from "../components/Footer";
import BestPackageForYou from "../components/BestPackageForYou";
import IslandStays from "../components/IslandStays";
import ContactUs from "../components/ContactUs";
import ClientReviews from "../components/ClientReviews";
import Navbar from "../components/Navbar";

export default function Home() {
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
      <HomeComp />
      <FlightBooking />
      <BestPackageForYou />
      <IslandStays />
      <ContactUs />
      <ClientReviews />
      <Footer />
    </>
  );
}
