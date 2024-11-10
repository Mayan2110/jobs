"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import datacontext from "../context/datacontext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [err, setErr] = useState({});
  const { isLogin, adminEmail } = useContext(datacontext);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { name, value } = e.target;
    // if (name === "email") {
    //   setEmail(value);
    // } else if (name === "password") {
    //   setPassword(value);
    // }

    const validate = () => {
      let error = {};
      if (!email) error.email = "Email is required";
      if (!password) error.password = "Password is required";

      setErr(error);
      return Object.keys(error).length === 0; // Return true if no errors
    };

    // const submit = async (e) => {
    if (validate()) {
      try {
        // Fetch user data from MockAPI based on the email
        const res = await axios.get(
          `https://670d0d07073307b4ee421ac5.mockapi.io/user?email=${email}`
        );
        const users = res.data;

        // Check if the user exists
        if (users.length === 0) {
          setErr({ email: "User not found" });
          toast.error("User not foud");
          return;
        }

        const user = users[0]; // Assuming the first matching user
        // Validate the password
        if (user.password !== password) {
          setErr({ password: "Incorrect password" });
          toast.error("incorrect password");
        } else {
          // Store user details (if needed) and navigate to dashboard
          localStorage.setItem("email", user.email);
          toast.success("sign in successful");
          if (email === "mayanprajapati18@gmail.com") {
            Cookies.set("adminEmail", email, { expires: 7 });
            router.replace("/jobs");
          } else {
            router.replace("/job-search");
          }
          Cookies.set("is_login", true, { expires: 7 });
          // console.log(user, "user ");
          router.refresh();
        }
      } catch (error) {
        console.error("An error occurred during login:", error);
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
  };

  useEffect(() => {
    if (isLogin) {
      if (adminEmail) router.replace("/jobs");
      else router.replace("/job-search");
    }
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col  items-center justify-center min-h-screen pt-9">
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-10 rounded-lg shadow-lg w-[568px] h-[668px]">
          <h1 className="text-[40px] font-normal mb-2">Sign in</h1>
          <p className="text-gray-600 mb-6 text-sm font-normal">
            Stay updated on your professional world
          </p>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email or Phone
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute right-3 top-10 text-blue-500 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 16 16"
                  className="bi bi-eye-slash-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z" />
                  <path
                    fillRule="evenodd"
                    d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"
                  />
                </svg>
              ) : (
                <svg
                  height="17"
                  viewBox="0 0 56 56"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="m28.0103 46.4025c16.5459 0 27.9897-13.3855 27.9897-17.5582 0-4.1932-11.4646-17.558-27.9897-17.558-16.422 0-28.0103 13.3648-28.0103 17.558 0 4.1727 11.671 17.5582 28.0103 17.5582zm0-6.0524c-6.4448 0-11.5263-5.2261-11.5677-11.5058-.0206-6.4448 5.1229-11.5056 11.5677-11.5056 6.4036 0 11.5471 5.0608 11.5471 11.5056 0 6.2797-5.1435 11.5058-11.5471 11.5058zm0-7.3538c2.2929 0 4.1933-1.8797 4.1933-4.152 0-2.2928-1.9004-4.1726-4.1933-4.1726-2.3135 0-4.2139 1.8798-4.2139 4.1726 0 2.2723 1.9004 4.152 4.2139 4.152z" />
                </svg>
              )}{" "}
            </span>
          </div>
          <div className="mb-6">
            <a href="#" className="text-blue-500">
              Forgot password?
            </a>
          </div>
          <button className="w-32 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 text-center mx-auto block">
            Sign in
          </button>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-2 text-gray-500">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="text-center">
            <p className="text-gray-700">
              Allready have TalentConnect?{" "}
              <a href="/signup" className="text-blue-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </form>

      {/* <p>{err}</p> */}
      <br />
    </div>
  );
};
export default SignIn;
