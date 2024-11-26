



// // import React from 'react';
// // import Image from 'next/image';
// // import image from "./component/images/image.png";

// // export default function HomePage() {
// //   return (
// //     <div className="font-sans">

// //       <section className="bg-gray-100">
// //         <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
// //           <div className="md:w-1/2 space-y-4">
// //             <h2 className="text-4xl font-bold ">Welcome to TalentConnect!</h2>
// //             <p className="text-gray-700 ">
// //               Streamline your hiring process with TalentConnect, your go-to staffing agency in India. Discover a world of possibilities for building your dream team.
// //             </p>
// //             <div className="flex space-x-4">

// //               <button className="bg-blue-300 px-6 py-2 rounded hover:bg-blue-400">
// //                 Post a Job Now
// //               </button>
// //             </div>
// //           </div>
// //           <div className="md:w-1/2 mt-8 md:mt-0">
// //             <Image src={image} alt="Hero" className="w-full" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section */}
// //       <section className="bg-white py-16">
// //         <div className="container mx-auto px-4 text-center">
// //           <h3 className="text-2xl font-bold mb-8">Unlock the Benefits of TalentConnect</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// //             {[
// //               {
// //                 title: 'Streamlined Recruitment',
// //                 description: 'Simplify every step of hiring.',
// //                 icon: '🌟',
// //               },
// //               {
// //                 title: 'Access Top Talent',
// //                 description: 'Connect with skilled professionals.',
// //                 icon: '💼',
// //               },
// //               {
// //                 title: 'Strengthen Brand Presence',
// //                 description: 'Attract top talent effortlessly.',
// //                 icon: '📈',
// //               },
// //               {
// //                 title: 'Dedicated Support',
// //                 description: 'Personalized assistance for hiring.',
// //                 icon: '🤝',
// //               },
// //             ].map((feature, index) => (
// //               <div key={index} className="space-y-2">
// //                 <div className="text-4xl">{feature.icon}</div>
// //                 <h4 className="font-bold">{feature.title}</h4>
// //                 <p className="text-gray-600">{feature.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Resources Section */}
// //       <section className="bg-gray-100 py-16">
// //         <div className="container mx-auto px-4 text-center">
// //           <h3 className="text-2xl font-bold mb-8">Explore Our Resources</h3>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {[
// //               { title: 'New employee onboarding guide', link: '#' },
// //               { title: 'Complete guide to virtual onboarding', link: '#' },
// //               { title: 'Onboarding new hires checklist', link: '#' },
// //               { title: 'Mastering the first 45 days', link: '#' },
// //               { title: 'A complete guide to onboarding', link: '#' },
// //             ].map((article, index) => (
// //               <div key={index} className="bg-white p-4 shadow rounded">
// //                 <h4 className="font-bold mb-2">{article.title}</h4>
// //                 <a href={article.link} className="text-blue-600 hover:underline">
// //                   Read Now
// //                 </a>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Call to Action */}
// //       <section className="bg-blue-600 text-white py-16">
// //         <div className="container mx-auto px-4 text-center">
// //           <h3 className="text-2xl font-bold mb-4">Ready to hire?</h3>
// //           <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200">
// //             Post a Job Now
// //           </button>
// //         </div>
// //       </section>

// //       {/* Footer */}
// //       <footer className="bg-gray-800 text-gray-400 py-8">
// //         <div className="container mx-auto text-center">
// //           <p>&copy; 2024 TalentConnect. All Rights Reserved.</p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }


// 'use client'; // Marks this file as a Client Component

// import React from 'react';
// import Image from 'next/image';
// import { useRouter } from "next/navigation";
// import image from './component/images/image.png';

// export default function HomePage() {
//   const router = useRouter(); 

//   const navigateToJobSearch = () => {
//     router.push('/job-search'); 
//   };

//   return (
//     <div className="font-sans">
//       <section className="bg-gray-100">
//         <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 space-y-4">
//             <h2 className="text-4xl font-bold">Welcome to TalentConnect!</h2>
//             <p className="text-gray-700">
//               Streamline your hiring process with TalentConnect, your go-to staffing agency in India. Discover a world of possibilities for building your dream team.
//             </p>
//             <div className="flex space-x-4">
//               <button
//                 onClick={navigateToJobSearch} 
//                 className="bg-blue-300 px-6 py-2 rounded hover:bg-blue-400"
//               >
//                 Post a Job Now
//               </button>
//             </div>
//           </div>
//           <div className="md:w-1/2 mt-8 md:mt-0">
//             <Image src={image} alt="Hero" className="w-full" />
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h3 className="text-2xl font-bold mb-8">Unlock the Benefits of TalentConnect</h3>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 title: 'Streamlined Recruitment',
//                 description: 'Simplify every step of hiring.',
//                 icon: '🌟',
//               },
//               {
//                 title: 'Access Top Talent',
//                 description: 'Connect with skilled professionals.',
//                 icon: '💼',
//               },
//               {
//                 title: 'Strengthen Brand Presence',
//                 description: 'Attract top talent effortlessly.',
//                 icon: '📈',
//               },
//               {
//                 title: 'Dedicated Support',
//                 description: 'Personalized assistance for hiring.',
//                 icon: '🤝',
//               },
//             ].map((feature, index) => (
//               <div key={index} className="space-y-2">
//                 <div className="text-4xl">{feature.icon}</div>
//                 <h4 className="font-bold">{feature.title}</h4>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Resources Section */}


//       {/* Call to Action */}
//       <section className="bg-blue-600 text-white py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h3 className="text-2xl font-bold mb-4">Ready to hire?</h3>
//           <button
//             onClick={navigateToJobSearch} // Attach the click handler
//             className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200"
//           >
//             Post a Job Now
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-gray-400 py-8">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 TalentConnect. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }


'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import image from './component/images/image.png';

export default function HomePage() {
  const router = useRouter();


  const isUserLoggedIn = false;

  const navigateToJobSearch = () => {
    if (isUserLoggedIn) {
      router.push('/job-search');
    } else {
      router.push('/signin');
    }
  };

  return (
    <div className="font-sans">
      <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold">Welcome to TalentConnect!</h2>
            <p className="text-gray-700 text:20px ">
              Streamline your hiring process with TalentConnect, your go-to staffing agency in India. Discover a world of possibilities for building your dream team.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={navigateToJobSearch}
                className="bg-blue-300 px-6 py-2 rounded hover:bg-blue-500"
              >
                Post a Job Now
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image src={image} alt="Hero" className="w-full" />
          </div>
        </div>
      </section>


      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">Unlock the Benefits of TalentConnect</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Streamlined Recruitment',
                description: 'Simplify every step of hiring.',
                icon: '🌟',
              },
              {
                title: 'Access Top Talent',
                description: 'Connect with skilled professionals.',
                icon: '💼',
              },
              {
                title: 'Strengthen Brand Presence',
                description: 'Attract top talent effortlessly.',
                icon: '📈',
              },
              {
                title: 'Dedicated Support',
                description: 'Personalized assistance for hiring.',
                icon: '🤝',
              },
            ].map((feature, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl">{feature.icon}</div>
                <h4 className="font-bold">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to hire?</h3>
          <button
            onClick={navigateToJobSearch}
            className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-gray-200"
          >
            Post a Job Now
          </button>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 TalentConnect. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
