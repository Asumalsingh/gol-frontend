import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const host = process.env.NEXT_PUBLIC_HOST;

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  // function to get input field data
  const onChangeInput = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  // function to handle login request
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        `${host}/auth/login`,
        {
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
          console.log(json);
          location.replace("/");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="flex h-screen justify-center mx-5 items-center">
      <div className="card w-96">
        <div className="flex justify-center mb-5">
          <h1 className="font-bold text-2xl">Login</h1>
        </div>

        <form action="" onSubmit={handleLogin}>
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
            type="submit"
            value="Login"
            className="bg-primary-color cursor-pointer text-white rounded-lg w-full px-4 py-3 my-4"
          />
        </form>

        <p>
          Don&apos;t have an account,{" "}
          <Link href="/signUp" className="text-primary-color cursor-pointer">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
