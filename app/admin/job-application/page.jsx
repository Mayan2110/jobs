// "use client";
// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import { useRouter } from "next/navigation";
// import Adminlayout from "../../component/common/adminLayout";
// import { toast } from "react-toastify";

// export default function Page() {
//   const [hasAccess, setHasAccess] = useState(false);
//   const [Jobapplications, setJobapplications] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     // Verify admin access
//     const adminEmail = Cookies.get("adminEmail");
//     if (adminEmail === "mayanprajapati18@gmail.com") {
//       setHasAccess(true);
//       fetchJobapplication();
//     } else {
//       toast.error("Access denied. Please log in as an admin.");
//     }
//   }, []);

//   const fetchJobapplication = async () => {
//     try {
//       const response = await fetch(
//         "https://671a2686acf9aa94f6a95bd1.mockapi.io/Applyform"
//       );
//       const data = await response.json();
//       setJobapplications(data);
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//       toast.error("Failed to load job data.");
//     }
//   };

//   return (
//     <Adminlayout>
//       <div
//         className="container mx-auto p-4 overflow-auto"
//         style={{ maxHeight: "calc(100vh - 120px)" }} // Adjust height for better scrolling
//       >
//         {hasAccess ? (
//           <>
//             <div className="flex justify-between items-center mb-4">
//               <h1 className="text-2xl font-bold">Job Application Data</h1>
//               <button
//                 onClick={() => router.push("/admin/jobs")}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//               >
//                 Jobs
//               </button>
//             </div>
//             <table className="w-full bg-white rounded-lg shadow-md">
//               <thead>
//                 <tr className="bg-gray-100 text-left">
//                   <th className="p-3">Email</th>
//                   <th className="p-3">Name</th>
//                   <th className="p-3">Job Title</th>
//                   <th className="p-3">Phone</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Jobapplications.length > 0 ? (
//                   Jobapplications.map((job) => (
//                     <tr key={job.id} className="border-b hover:bg-gray-50">
//                       <td className="p-3">{job.email}</td>
//                       <td className="p-3">{job.name}</td>
//                       <td className="p-3">{job.job_title}</td>
//                       <td className="p-3">{job.phone}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="p-3 text-center text-gray-500">
//                       No job applications found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </>
//         ) : (
//           <p className="text-red-600">Access denied. Admin login required.</p>
//         )}
//       </div>
//     </Adminlayout>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Adminlayout from "../../component/common/adminLayout";
import { toast } from "react-toastify";

export default function Page() {
  const [hasAccess, setHasAccess] = useState(false);
  const [Jobapplications, setJobapplications] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Verify admin access
    const adminEmail = Cookies.get("adminEmail");
    if (adminEmail === "mayanprajapati18@gmail.com") {
      setHasAccess(true);
      fetchJobapplication();
    } else {
      toast.error("Access denied. Please log in as an admin.");
      // Redirect non-admins to the job search page
      router.push("/job-search"); // Change this URL to your job search page URL
    }
  }, [router]); // Ensure router is available and the effect is triggered on login state change

  const fetchJobapplication = async () => {
    try {
      const response = await fetch(
        "https://671a2686acf9aa94f6a95bd1.mockapi.io/Applyform"
      );
      const data = await response.json();
      setJobapplications(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Failed to load job data.");
    }
  };

  return (
    <Adminlayout>
      <div
        className="container mx-auto p-4 overflow-auto"
        style={{ maxHeight: "calc(100vh - 120px)" }} // Adjust height for better scrolling
      >
        {hasAccess ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Job Application Data</h1>
              <button
                onClick={() => router.push("/admin/jobs")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Jobs
              </button>
            </div>
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3">Email</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Job Title</th>
                  <th className="p-3">Phone</th>
                </tr>
              </thead>
              <tbody>
                {Jobapplications.length > 0 ? (
                  Jobapplications.map((job) => (
                    <tr key={job.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">{job.email}</td>
                      <td className="p-3">{job.name}</td>
                      <td className="p-3">{job.job_title}</td>
                      <td className="p-3">{job.phone}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-3 text-center text-gray-500">
                      No job applications found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        ) : (
          <p className="text-red-600">Access denied. Admin login required.</p>
        )}
      </div>
    </Adminlayout>
  );
}
