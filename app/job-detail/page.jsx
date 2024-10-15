import Image from "next/image";
import React from "react";
import RectangleImageComponent from "../component/common/rectangleImageComponent";
import JobDetailComponent from "../component/common/jobDetailComponent";

export default function Detail() {
  return (
    <div className="flex bg-gray-100 ">
      <div className="flex mx-auto">
        <div className=" p-6">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4 gap-2">
              <RectangleImageComponent />
              <div>
                <h1 className="text-xl text-[#002160] font-bold">Aman S.</h1>
                <p className="text-gray-600">Location</p>
              </div>
            </div>
            <hr className="my-4" />
            <h2 className="text-2xl text-[#002160] font-bold mb-2">
              Backend Developer (MEAN Stack)
            </h2>
            <div className="flex justify-between text-[#002160] mb-4">
              <p>
                <span className="font-bold">Location:</span>
                Ahmedabad, Gujarat, India
              </p>
              <p>
                <span className="font-bold">Type:</span>
                Full-Time
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl text-[#002160] font-bold mb-2">
                Job Overview:
              </h3>
              <p>
                We are looking for a passionate and experienced Backend
                Developer specializing in the MEAN stack to join our dynamic
                team at [Company Name] in Ahmedabad. The ideal candidate will
                have at least 3 years of experience in backend development and
                be proficient in MongoDB, Express.js, Angular, and
                <a class="text-[#002160]" href="#">
                  Node.js
                </a>
                . Your goal will be to develop and maintain our server-side
                applications, ensuring seamless performance and integration.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#002160] mb-2">
                Key Responsibilities:
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  Develop and maintain server-side applications using the MEAN
                  stack.
                </li>
                <li>
                  Collaborate with front-end developers to integrate user-facing
                  elements.
                </li>
                <li>Write reusable, testable, and efficient code.</li>
                <li>
                  Design and implement low-latency, high-availability, and
                  performant applications.
                </li>
                <li>Implement security and data protection measures.</li>
                <li>
                  Conduct performance tuning, improvement, balancing, usability,
                  automation.
                </li>
                <li>
                  Participate in code reviews and ensure coding standards are
                  adhered to.
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#002160] mb-2">
                Qualifications:
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  Bachelor's degree in Computer Science, Information Technology,
                  or related field.
                </li>
                <li>Minimum 3 years of experience as a backend developer.</li>
                <li>
                  Proficiency in MongoDB, Express.js, Angular, and
                  <a className="text-blue-600" href="#">
                    Node.js
                  </a>
                </li>
                <li>Strong knowledge of JavaScript, HTML, and CSS.</li>
                <li>Experience with RESTful APIs and third-party libraries.</li>
                <li>Familiarity with version control systems (e.g., Git).</li>
                <li>
                  Understanding of security and data protection practices.
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#002160] mb-2">
                Skills and Competencies:
              </h3>
              <ul className="list-disc list-inside">
                <li>Problem-solving skills</li>
                <li>Analytical thinking</li>
                <li>Attention to detail</li>
                <li>Team collaboration</li>
                <li>Strong communication skills</li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-[#002160] mb-3">
                Education and Experience:
              </h2>
              <ul className="list-disc list-inside">
                <li>Bachelor's degree</li>
                <li>Minimum 3 years of relevant experience</li>
              </ul>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold text-[#002160] mb-2">Salary:</h2>
              <p className="list-disc list-inside">
                Rs. 25,000 - 40,000 per month
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#002160] mb-2">
                Benefits and Perks:
              </h2>
              <ul className="list-disc list-inside">
                <li>Health Insurance</li>
                <li>Paid Time Off</li>
                <li>Flexible Hours</li>
                <li>Work From Home Opportunities</li>
                <li>Professional Development</li>
                <li>Team Outings</li>
              </ul>
            </div>
          </div>
        </div>
        <JobDetailComponent />
      </div>
      {/* <div className="w-[30%]"></div> */}
    </div>
  );
}
