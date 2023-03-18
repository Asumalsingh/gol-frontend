import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function SignUp() {
  const host = process.env.NEXT_PUBLIC_HOST;

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [warning, setWarning] = useState(false);

  // function to get input field data
  const onChangeInput = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  // function to handle sign up request
  const handleSignup = (e) => {
    setWarning(false);
    e.preventDefault();
    if (inputData.password !== inputData.confirmPassword) {
      setWarning(true);
      return;
    } else {
      axios
        .post(
          `${host}/auth/register`,
          {
            name: inputData.name,
            email: inputData.email,
            password: inputData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          const json = response.data;
          if (json.success) {
            localStorage.setItem("auth-token", json.authToken);
            // console.log(json);
            location.replace("/");
          }
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };
  return (
    <div className="flex h-screen justify-center pt-16 mx-5 items-center">
      <div className="card w-96">
        <div className="flex justify-center mb-5">
          <h1 className="font-bold text-2xl">Sign Up</h1>
        </div>

        <form action="" onSubmit={handleSignup}>
          <input
            type="text"
            id="text"
            name="name"
            required
            placeholder="Name"
            className="w-full my-2 p-3 rounded-md border border-gray-200 bg-gray-100 focus:border-gray-300 outline-none focus:ring-0 "
            onChange={onChangeInput}
          />
          <input
            type="text"
            id="email"
            name="email"
            required
            placeholder="Email"
            className="w-full my-2 p-3 rounded-md border border-gray-200 bg-gray-100 focus:border-gray-300 outline-none focus:ring-0 "
            onChange={onChangeInput}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            className="w-full my-2 p-3 rounded-md border border-gray-200 bg-gray-100 focus:border-gray-300 outline-none focus:ring-0 "
            onChange={onChangeInput}
          />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="w-full my-2 p-3 rounded-md border border-gray-200 bg-gray-100 focus:border-gray-300 outline-none focus:ring-0 "
            onChange={onChangeInput}
          />
          <p className={` ${warning ? "" : "hidden"} text-sm text-red-500`}>
            Password doesn&apos;t match
          </p>

          <input
            type="submit"
            value="Sign Up"
            className="bg-primary-color cursor-pointer text-white rounded-lg w-full px-4 py-3 my-4"
          />
        </form>

        <p>
          Already have an account,{" "}
          <Link href="/login" className="text-primary-color cursor-pointer">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
