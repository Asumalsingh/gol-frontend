import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import userContext from "../context/userContext";

export default function Admin() {
  const host = process.env.NEXT_PUBLIC_HOST;
  const [image, setImage] = useState();
  const [subAdmins, setSubAdmins] = useState();
  const [role, setRole] = useState();
  const [bannerImage, setBannerImage] = useState();

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

        // Request to getting all sub admins
        axios
          .get(`${host}/user/subAdmins`, {
            headers: {
              "auth-token": localStorage.getItem("auth-token"),
            },
          })
          .then((response) => {
            setSubAdmins(response.data);
          })
          .catch((error) => {
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

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  // Function to handle set sum admins role
  const handleSetRole = (id) => {
    if (role === undefined || role === "") {
      alert("Please select role");
      return;
    }
    axios
      .put(`${host}/user/setRole/${id}/${role}`, null, {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      })
      .then((response) => {
        alert("Updated successfully, Please reload the page");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <section className="bg-gradient-to-b">
      <div className="max-w-screen-xl px-5 sm:px-0 mx-auto mt-48">
        {/* Update banner */}
        <div>
          <h1 className="font-bold text-3xl">Update banner</h1>
          <input
            className="placeholder:text-slate-400 w-full my-3 py-2 px-4 block rounded-md border border-gray-500 focus:border-gray-500 focus:outline-none focus:ring-0"
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
            Update banner{" "}
          </button>

          <p className="mt-4">Banner demo</p>
          <img src={bannerImage} width={200} alt="banner image" />
        </div>

        {/* Sub admins */}
        <div className="mt-6">
          <h1 className="font-bold text-3xl mb-4">
            Manage roles of other sub admins
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subAdmins &&
              subAdmins.map((item, index) => {
                return (
                  <div key={index} className="card px-4 py-2">
                    <div className="mb-4">
                      <p>
                        <span className="font-semibold"> Name:</span>{" "}
                        {item.name}
                      </p>
                      <p>
                        <span className="font-semibold"> Email:</span>{" "}
                        {item.email}
                      </p>
                      <p className="capitalize">
                        <span className="font-semibold"> Role:</span>{" "}
                        {item.role}
                      </p>
                    </div>

                    <select
                      name="role"
                      id="role"
                      className="w-full bg-gray-100 rounded-md py-2 px-2 cursor-pointer border outline-none"
                      onChange={handleRoleChange}
                    >
                      <option value="">Select sub-admin role</option>
                      <option value="frontend">Frontend</option>
                      <option value="backend">Backend</option>
                      <option value="fullStack">Full Stack</option>
                    </select>

                    <div className="flex justify-center">
                      <button
                        onClick={() => handleSetRole(item._id)}
                        className="px-5 py-2 bg-primary-color text-white mt-4 mb-2 text-sm rounded-md"
                      >
                        Set
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
