import React, { useState, useEffect, useContext } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import userContext from "../../context/userContext";
import axios from "axios";

export default function Banner() {
  const host = process.env.NEXT_PUBLIC_HOST;
  const [bannerImage, setBannerImage] = useState();
  const [image, setImage] = useState();

  const { user } = useContext(userContext);

  useEffect(() => {
    if (user) {
      if (!user.isAdmin) location.replace("/");
      else {
        // Request to get banner
        axios
          .get(`${host}/banner/getBanner`)
          .then((response) => {
            setBannerImage(response.data[0].imageUrl);
          })
          .catch((error) => {
            console.log(error);
            alert(error.response.data.message);
          });
      }
    }
  }, [user]);

  // Function to handle update banner
  const handleUpdateBanner = () => {
    const bannerId = "6415d59bddbd214004932f53";

    axios
      .put(
        `${host}/banner/update/${bannerId}`,
        {
          image,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      )
      .then((response) => {
        alert("Banner uploaded successfully");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  return (
    <>
      <AdminSidebar />
      <section>
        <div className="max-w-screen-xl lg:ml-[310px] px-5 my-24 lg:my-6 mx-auto">
          <div className="bg-dark-light-blue rounded-md text-center py-6 px-4">
            <span className="font-bold text-gray-700 text-2xl">Banners</span>
          </div>

          <div>
            <h2 className="text-xl font-semibold underline underline-offset-8 my-4 decoration-gray-600 ">
              Home page banner
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img src={bannerImage} alt="banner image" />
              </div>
              <div>
                <input
                  className="placeholder:text-slate-400 w-full mb-4 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
                  placeholder="Enter url of image"
                  type="text"
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />

                <button
                  onClick={handleUpdateBanner}
                  className="px-4 bg-primary-color text-white rounded-md py-2"
                >
                  Update banner
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold underline underline-offset-8 my-4 decoration-gray-600 ">
              About page banner
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img src={bannerImage} alt="banner image" />
              </div>
              <div>
                <input
                  className="placeholder:text-slate-400 w-full mb-4 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
                  placeholder="Enter url of image"
                  type="text"
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />

                <button
                  onClick={handleUpdateBanner}
                  className="px-4 bg-primary-color text-white rounded-md py-2"
                >
                  Update banner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
