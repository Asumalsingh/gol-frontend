import React from "react";
import Oval1 from "../public/assets/about/oval-1.png";
import Oval2 from "../public/assets/about/oval-2.png";
import Oval3 from "../public/assets/about/oval-3.png";
import Oval4 from "../public/assets/about/oval-4.png";
import OvalImage from "../public/assets/about/oval-image.png";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Image from "next/image";

export default function OurTeam() {
  const data = [Oval1, Oval2, Oval3, Oval4];
  return (
    <section className="bg-gradient-to-b">
      <div className="max-w-screen-xl px-5 mx-auto mt-28">
        <div className="bg-light-blue text-center px-4 mb-10 py-6">
          <h2 className="font-bold text-2xl mb-4">Our Team</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            totam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
            adipisicing elit. Omnis, totam!
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="space-y-2">
            {data.map((profile, index) => {
              return (
                <div key={index}>
                  <Image
                    src={profile}
                    alt="team images"
                    className="cursor-pointer"
                    width={200}
                    height={200}
                  ></Image>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image src={OvalImage} alt="full image"></Image>
              <div className="flex justify-end text-primary-color mt-2">
                <span>
                  <a href="https://www.linkedin.com/in/asumal-kushwah/">
                    <AiFillTwitterCircle size={30} />
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/asumal-kushwah/">
                    <AiFillLinkedin size={30} />
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/asumal_singh/">
                    <AiFillInstagram size={30} />
                  </a>
                </span>
              </div>
            </div>
            <div>
              <h2 className="font-bold text-primary-color text-2xl">
                Sebastian Bennett
              </h2>
              <h4 className="font-bold my-3">Founder LEad Photographer CEO</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti laborum cumque laudantium asperiores illum quis ad
                aspernatur eos vero. Inventore. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Deleniti laborum cumque laudantium
                asperiores illum quis ad aspernatur eos vero. Inventore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
