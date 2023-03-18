import React, { useContext } from "react";
import userContext from "../context/userContext";

export default function Profile() {
  const { user } = useContext(userContext);
  return (
    <section className="bg-gradient-to-b">
      <div className="max-w-screen-xl px-5 sm:px-0 mx-auto mt-40">
        {user && (
          <div>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>

            <button
              className="px-4 py-1 my-4 bg-red-700 rounded-md text-white opacity-80 "
              onClick={() => {
                localStorage.removeItem("auth-token");
                location.replace("/");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
