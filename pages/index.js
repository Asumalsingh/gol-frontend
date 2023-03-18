import Head from "next/head";
import React from "react";
import HomeComp from "../components/Home";
import FlightBooking from "../components/FlightBooking";
import Footer from "../components/Footer";
import BestPackageForYou from "../components/BestPackageForYou";
import IslandStays from "../components/IslandStays";
import ContactUs from "../components/ContactUs";
import ClientReviews from "../components/ClientReviews";

export default function Home() {
  return (
    <>
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
