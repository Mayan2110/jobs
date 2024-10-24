// "use client";
// import React from "react";
// import  { useState, useContext } from "react";
// import axios from "axios";
// import { DataContext } from "../context/datacontext";
// import { useRouter } from "next/navigation";

"use client";
import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const router = useRouter();
  const [userdata, setUserdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    city: "",
    dateOfBirth: "",
  });

  const [existUser] = useState([]);
  const [err, setErr] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const check = () => {
    let error = {};

    // Check if email already exists
    existUser.forEach((data) => {
      if (data.email === userdata.email) {
        error.email = "Email Already Exists";
      }
    });

    // Validate required fields
    if (!userdata.firstName) error.firstName = "First name is required";
    if (!userdata.lastName) error.lastName = "Last name is required";
    if (!userdata.password || userdata.password.length < 8) {
      error.password = "Password must be at least 8 characters long";
    }
    if (!userdata.gender) error.gender = "Gender is required";
    if (!userdata.city) error.city = "City is required";
    if (!userdata.dateOfBirth) error.dateOfBirth = "Date of Birth is required";

    setErr(error);
    return Object.keys(error).length === 0; // Return true if no errors
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const submit = async (e) => {
    e.preventDefault();
    if (check()) {
      try {
        await axios.post(
          `https://670d0d07073307b4ee421ac5.mockapi.io/user`,
          userdata
        );
        localStorage.setItem("email", userdata.email);
        toast.success("Signup Successful!");
        router.push("/job-search");
      } catch (error) {
        toast.error("signup failed:" + error.message);
      }
    } else {
      toast.warn("please fix the error before submitting!");
    }
  };

  return (
    <div className="bg-gray-200 flex flex-col  items-center justify-center min-h-screen pt-9">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[568px] h-[850px] mb-8">
        <h1 className="text-[40px] font-normal mb-2">Sign Up</h1>
        <p className="text-gray-600 mb-6 text-sm font-normal">
          Stay updated on your professional world
        </p>

        <form onSubmit={submit}>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="firstName"
              name="firstName"
              value={userdata.firstName}
              onChange={handleInputChange}
              required
            />
            {err.firstName && (
              <p className="text-red-500 text-xs mt-1">{err.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="lastName"
              name="lastName"
              value={userdata.lastName}
              onChange={handleInputChange}
              required
            />
            {err.lastName && (
              <p className="text-red-500 text-xs mt-1">{err.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              value={userdata.email}
              onChange={handleInputChange}
              required
            />
            {err.email && (
              <p className="text-red-500 text-xs mt-1">{err.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type={showPassword ? "text" : "password"} // Use state to toggle password visibility
              id="password"
              name="password"
              value={userdata.password}
              onChange={handleInputChange}
              required
            />
            <span
              className="absolute right-3 top-10 text-blue-500 cursor-pointer"
              onClick={togglePasswordVisibility} // Correctly place the onClick event handler
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
              {/* Toggle text based on showPassword state */}
            </span>
            {err.password && (
              <p className="text-red-500 text-xs mt-1">{err.password}</p>
            )}
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              id="gender"
              name="gender"
              value={userdata.gender}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {err.gender && (
              <p className="text-red-500 text-xs mt-1">{err.gender}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={userdata.dateOfBirth}
              onChange={handleInputChange}
              required
            />
            {err.dateOfBirth && (
              <p className="text-red-500 text-xs mt-1">{err.dateOfBirth}</p>
            )}
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="city">
              City
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="city"
              name="city"
              value={userdata.city}
              onChange={handleInputChange}
              required
            />
            {err.city && (
              <p className="text-red-500 text-xs mt-1">{err.city}</p>
            )}
          </div>

          <button className="w-32 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 text-center mx-auto block">
            Sign In
          </button>
        </form>
        <br />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;

// "use client";
// import React from "react";
// import { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { Datacontext } from "../context/Datacontext";
// import { useRouter } from "next/navigation";
// import FooterComponent from "../component/common/footerComponent";

// const Signup = () => {
//   const router = useRouter();
//   const [userdata, setUserdata] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     gender: "",
//     city: "",
//     dateOfBirth: "",
//   });
//   const [userEmail, setUserEmail] = useState({});
//   const [existUser, setExistUser] = useState([]);
//   const [err, setErr] = useState({});
//   const [loading, setLoading] = useState(true);
//   const contextData = useContext(Datacontext);

//   // useEffect(() => {
//   //   const email = localStorage.getItem("email");
//   //   const role = localStorage.getItem("role");
//   //   const registerCode = sessionStorage.getItem("register");

//   //   if (!registerCode || registerCode !== contextData.secretCode) {
//   //     router.push("/"); // Navigate to the homepage if the code doesn't match
//   //   } else {
//   //     fetchUserData(email);
//   //     fetchExistUsers();
//   //   }
//   // }, []);

//   const fetchUserData = async (email) => {
//     try {
//       const { data } = await axios.get(
//         `https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin?email=${email}`
//       );
//       const user = data[0];
//       setUserEmail(user);
//       setUserdata({ ...user, password: "" }); // Keep password separate from fetched data
//       if (user.signup) {
//         router.push("/");
//         // toast(
//         //   role === "admin"
//         //     ? "Admin already registered"
//         //     : "User already registered"
//         // );
//       }
//       setLoading(false);
//     } catch (error) {
//       // toast(error.message);
//     }
//   };

//   const fetchExistUsers = async () => {
//     try {
//       const { data } = await axios.get(
//         `https://64cc9ddf2eafdcdc851a0938.mockapi.io/EcomLogin`
//       );
//       setExistUser(data);
//     } catch (error) {
//       // toast(error.message);
//       router.push("/");
//     }
//   };

//   const check = () => {
//     let error = {};

//     existUser.forEach((data) => {
//       if (!userEmail.email && data.email === userdata.email) {
//         error.email = "Email Already Exists";
//       }
//     });
//     if (!userdata.firstName) error.firstName = "First name is required";
//     if (!userdata.lastName) error.lastName = "Last name is required";
//     if (!userdata.password || userdata.password.length < 8) {
//      error.password = "Password must be at least 8 characters long";
//    }
//     if (!userdata.gender) error.gender = "Gender is required";
//     if (!userdata.city) error.city = "City is required";
//     if (!userdata.dateOfBirth) error.dateOfBirth = "Date of Birth is required";

//     setErr(error);
//     return Object.keys(error).length === 0;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserdata((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     sessionStorage.clear("register");

//     if (check()) {
//       try {
//         await axios.post(
//           `https://670d0d07073307b4ee421ac5.mockapi.io/user`,
//           userdata
//         );
//         localStorage.setItem("email", userdata.email);
//         // toast.success("Details Updated Successfully");
//         router.push("/");
//       } catch (error) {
//         alert(error.message);
//       }
//     }
//   };

//   return (
//     <div className="bg-gray-200 flex flex-col  items-center justify-center min-h-screen pt-9">
//       <div className="bg-white p-10 rounded-lg shadow-lg w-[568px] h-[990px]">
//         <h1 className="text-[40px] font-normal mb-2">Sign Up</h1>
//         <p className="text-gray-600 mb-6 text-sm font-normal">
//           Stay updated on your professional world
//         </p>

//         {/* {message && <p className="text-center text-red-500">{message}</p>} */}
//         <form onSubmit={submit}>
//           {/* firstname */}
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="firstname">
//               First Name
//             </label>
//             <input
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={userdata.firstName}
//               onChange={handleInputChange}
//               required
//             />

//           </div>
//           {/* lastname */}
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="lastname">
//               Last Name
//             </label>
//             <input
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={userdata.lastName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           {/* email */}
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               type="text"
//               id="email"
//               name="email"
//               value={userdata.email}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-4 relative">
//             <label className="block text-gray-700 mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               type="password"
//               id="password"
//               name="password"
//               value={userdata.password}
//               onChange={handleInputChange}
//               required
//             />
//             <span className="absolute right-3 top-10 text-blue-500 cursor-pointer">
//               Show
//             </span>
//           </div>
//           {/* gender */}
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="gender">
//               Gender
//             </label>
//             <input
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               type="text"
//               id="gender"
//               name="gender"
//               value={userdata.gender}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           {/* date of birth */}
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="dateOfBirth">
//               Date of Birth
//             </label>
//             <input
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               type="text"
//               id="dateOfBirth"
//               name="dateOfBirth"
//               value={userdata.dateOfBirth}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           {/* city */}
//           <div className="mb-4">
//             <label className="block text-gray-700 mb-2" htmlFor="city">
//               City
//             </label>
//             <input
//               className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
//               type="text"
//               id="city"
//               name="city"
//               value={userdata.city}
//               onChange={handleInputChange}
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <a href="#" className="text-blue-500">
//               Forgot password?
//             </a>
//           </div>
//           <button className="w-32 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 text-center mx-auto block">
//             Sign Up
//           </button>
//         </form>
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-2 text-gray-500">or</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         <div className="text-center">
//           <p className="text-gray-700">
//             New to TalentConnect?{" "}
//             <a href="#" className="text-blue-500">
//               Join now
//             </a>
//           </p>
//         </div>
//       </div>
//       <br />
//       <FooterComponent />
//     </div>
//   );
// };

// export default Signup;
// // First Name081
// // Last Name
// // Email
// // Password
// // Gender
// // Date Of Birth
// // City
