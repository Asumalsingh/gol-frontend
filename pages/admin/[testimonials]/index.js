import React, { useState, useEffect, useContext } from "react";
import AdminSidebar from "../../../components/AdminSidebar";
import Link from "next/link";
import axios from "axios";
import userContext from "../../../context/userContext";
import { FaRegEdit } from "react-icons/fa";

export default function Testimonials() {
  const host = process.env.NEXT_PUBLIC_HOST;
  const [test, setTest] = useState();
  const { user } = useContext(userContext);

  useEffect(() => {
    if (user) {
      if (!user.isAdmin) location.replace("/");
      else {
        // Reques to get all testimonials
        axios
          .get(`${host}/testimonial/get`, {
            headers: {
              "auth-token": localStorage.getItem("auth-token"),
            },
          })
          .then((response) => {
            setTest(response.data);
          })
          .catch((error) => {
            console.log(error);
            alert(error.response.data.message);
          });
      }
    }
  }, [user]);

  return (
    <>
      <AdminSidebar />
      <section>
        <div className="max-w-screen-xl lg:ml-[310px] px-5 my-24 lg:my-6 mx-auto">
          <div className="bg-dark-light-blue rounded-md text-center py-6 px-4">
            <span className="font-bold text-gray-700 text-2xl">
              Testimonials
            </span>
          </div>

          <div className="my-8">
            <Link
              href="/admin/testimonials/addTestimonial"
              className="bg-primary-color py-2 px-4 rounded-md text-white font-semibold text-xl"
            >
              <span className="text-3xl">+</span> Add
            </Link>
          </div>

          <div>
            {test &&
              test.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="bg-white px-4 py-4 mb-4 flex justify-between items-center rounded-md"
                  >
                    <div>
                      <p>
                        <span className="font-bold">_id: </span> {item._id}{" "}
                      </p>
                      <p>
                        <span className="font-bold">name: </span> {item.name}{" "}
                      </p>
                      <p>
                        <span className="font-bold">country: </span>{" "}
                        {item.country}
                      </p>
                    </div>

                    <Link
                      href={`/admin/testimonials/${item._id}`}
                      className="bg-light-blue p-2 flex items-center justify-center rounded-md"
                    >
                      <FaRegEdit size={25} className="text-primary-color" />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
