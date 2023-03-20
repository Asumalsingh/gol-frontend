import React from "react";
import review1 from "../public/assets/about/review-1.png";
import review2 from "../public/assets/about/review-2.png";
import review3 from "../public/assets/about/review-3.png";
import review4 from "../public/assets/about/review-4.png";
import Image from "next/image";
import boat from "../public/assets/about/boat.png";

export default function WhatCustomerSaying() {
  const data = [review1, review2, review3, review4];
  return (
    <section className="bg-gradient-to-b">
      <div className="max-w-screen-xl px-5 mx-auto mt-28">
        <div className="bg-light-blue md:px-32 py-8">
          <div className="max-w-sm">
            <h2 className="font-bold text-2xl mb-4">
              What customer are saying?
            </h2>
            <p className="text-sm">
              Take a look at what our customer are saying. At Nature we not only
              provide you with services but also we provide .
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <span className="pt-44">
              <Image src={review1} alt="review image"></Image>
            </span>
            <span className="pt-28">
              <Image src={review2} alt="review image"></Image>
            </span>
            <span className="pt-14">
              <Image src={review3} alt="review image"></Image>
            </span>
            <span className="">
              <Image src={review4} alt="review image"></Image>
            </span>
          </div>
        </div>

        {/* Certificate */}
        <div className="text-center mt-12">
          <h1 className="font-bold text-4xl">Certificate</h1>
          <p className="mt-4 mb-8" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
            turpis sodales, facilisis massa at, rutrum eros.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image src={boat} alt="boat image"></Image>
            <Image src={boat} alt="boat image"></Image>
            <Image src={boat} alt="boat image"></Image>
            <Image src={boat} alt="boat image"></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
