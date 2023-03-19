import React from "react";
import { Carousel } from "@mantine/carousel";
import review1 from "../public/assets/home/review-1.png";
import review2 from "../public/assets/home/review-2.png";
import review3 from "../public/assets/home/review-3.png";
import { MdStarRate } from "react-icons/md";
import Image from "next/image";

export default function ClientReviews() {
  const data = [
    {
      image: review1,
      name: "Roman Rey",
      place: "Toranto, Canada",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque efficitur ac quam in congue.",
    },
    {
      image: review2,
      name: "Alex Tom",
      place: "Toranto, Canada",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque efficitur ac quam in congue.",
    },
    {
      image: review2,
      name: "Alex Tom",
      place: "Toranto, Canada",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque efficitur ac quam in congue.",
    },
    {
      image: review2,
      name: "Alex Tom",
      place: "Toranto, Canada",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque efficitur ac quam in congue.",
    },
    {
      image: review2,
      name: "Alex Tom",
      place: "Toranto, Canada",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque efficitur ac quam in congue.",
    },
    {
      image: review3,
      name: "Finn Balor",
      place: "Toranto, Canada",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque efficitur ac quam in congue.",
    },
  ];
  return (
    <section className="bg-gradient-to-b">
      <div className="max-w-screen-xl px-5 mx-auto mt-28">
        <div className="text-center text-3xl font-bold mb-16">
          <p>What Our Clients Says</p>
          <p>About Us</p>
        </div>
        <div>
          <Carousel
            withIndicators
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            styles={{
              control: {
                width: "44px",
                height: "44px",
                color: "#3282ad",
              },
              indicator: {
                width: "30px",
                height: "30px",
                color: "#3282ad",
              },
            }}
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
          >
            {data.map((item, index) => {
              return (
                <Carousel.Slide key={index}>
                  <div className="card mx-2 px-14">
                    <div className="flex justify-center">
                      <Image src={item.image} alt="image"></Image>
                    </div>
                    <div className="text-center mb-12">
                      <p className="font-semibold text-xl">{item.name}</p>
                      <p className="font-semibold text-gray-600">
                        {item.place}
                      </p>
                    </div>
                    <div>
                      <p>{item.review}</p>
                    </div>
                    <div className="flex justify-center text-primary-color my-5">
                      <MdStarRate size={25} />
                      <MdStarRate size={25} />
                      <MdStarRate size={25} />
                      <MdStarRate size={25} />
                      <MdStarRate size={25} />
                    </div>
                  </div>
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
