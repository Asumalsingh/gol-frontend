import React, { useContext, useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import userContext from "../../context/userContext";
import axios from "axios";

export default function Team() {
  const host = process.env.NEXT_PUBLIC_HOST;
  const [role, setRole] = useState();
  const [subAdmins, setSubAdmins] = useState();

  const { user } = useContext(userContext);

  useEffect(() => {
    if (user) {
      // If other user try to access this page the send back to home
      if (!user.isAdmin) location.replace("/");
      else {
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
    <>
      <AdminSidebar />
      <section>
        <div className="max-w-screen-xl lg:ml-[310px] px-5 my-24 lg:my-6 mx-auto">
          <div className="bg-dark-light-blue rounded-md text-center py-6 px-4">
            <span className="font-bold text-gray-700 text-2xl">Our Team</span>
          </div>

          <div className="mt-6">
            {/* <h1 className="font-semibold underline underline-offset-8 decoration-gray-500 text-3xl mb-8">
              Manage roles of other sub admins
            </h1> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
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
                        <p className="capitalize text-xs">
                          <span className="font-semibold text-base">
                            {" "}
                            Journey:
                          </span>{" "}
                          My progress was slow and steady because I was also
                          improving other parts of my life that have helped me
                          become a better person and ultimately a better
                          developer.
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
                          className="w-full px-5 py-2 bg-primary-color text-white mt-4 mb-2 text-sm rounded-md"
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
    </>
  );
}
