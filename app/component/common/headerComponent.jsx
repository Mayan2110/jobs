// "use client";
// import React, { useContext } from "react";
// import SearchIcon from "../icons/searchIcon";
// import NavbarComponent from "./navbarComponent";
// import Link from "next/link";
// import datacontext from "../../context/datacontext";
// import Cookies from "js-cookie";

// const HeaderComponent = () => {
//   const { isLogin } = useContext(datacontext);

//   return (
//     <>
//       <div className="sticky top-0 z-50">
//         <nav className="bg-blue-900 text-white ">
//           <div className="container mx-auto px-4 py-2 flex justify-end items-center space-x-6 pr-52">
//             <div className="relative group">
//               <button className="focus:outline-none leading-4">
//                 Jobs <i className="fas fa-chevron-down"></i>
//               </button>
//             </div>
//             {isLogin ? (
//               <>
//                 <Link href="/change-password" className="hover:underline">
//                   Change Password
//                 </Link>
//                 <Link
//                   href="/signin"
//                   onClick={() => {
//                     Cookies.remove("is_login");
//                     Cookies.remove("adminEmail");
//                   }}
//                   className="hover:underline"
//                 >
//                   Sign Out
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link href="/signin" className="hover:underline">
//                   Sign In
//                 </Link>
//                 <Link href="/signup" className="hover:underline">
//                   Sign Up
//                 </Link>
//               </>
//             )}
//             <Link href="#" className="hover:underline">
//               Support
//             </Link>
//             <Link href="#" className="hover:underline">
//               Contact Sales
//             </Link>

//             <Link href="#" className="">
//               <SearchIcon />
//             </Link>
//           </div>
//         </nav>
//       </div>
//       <NavbarComponent />
//     </>
//   );
// };

// export default HeaderComponent;

"use client";
import React, { useContext } from "react";
import SearchIcon from "../icons/searchIcon";
import NavbarComponent from "./navbarComponent";
import Link from "next/link";
import datacontext from "../../context/datacontext";
import Cookies from "js-cookie";

const HeaderComponent = () => {
  const { isLogin } = useContext(datacontext);

  return (
    <>
      <div className="sticky top-0 z-50">
        <nav className="bg-blue-900 text-white ">
          <div className="container mx-auto px-4 py-2 flex justify-end items-center space-x-6 pr-52">
            <div className="relative group">
              {/* Wrap the Jobs button in Link for navigation */}
              <Link href="/jobs" className="focus:outline-none leading-4">
                Jobs <i className="fas fa-chevron-down"></i>
              </Link>
            </div>
            {isLogin ? (
              <>
                <Link href="/change-password" className="hover:underline">
                  Change Password
                </Link>
                <Link
                  href="/signin"
                  onClick={() => {
                    Cookies.remove("is_login");
                    Cookies.remove("adminEmail");
                  }}
                  className="hover:underline"
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <>
                <Link href="/signin" className="hover:underline">
                  Sign In
                </Link>
                <Link href="/signup" className="hover:underline">
                  Sign Up
                </Link>
              </>
            )}
            <Link href="#" className="hover:underline">
              Support
            </Link>
            <Link href="#" className="hover:underline">
              Contact Sales
            </Link>

            <Link href="#" className="">
              <SearchIcon />
            </Link>
          </div>
        </nav>
      </div>
      <NavbarComponent />
    </>
  );
};

export default HeaderComponent;
