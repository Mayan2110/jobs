import FooterComponent from "../component/common/footerComponent";
import UiuxComponent from "../component/common/uiuxComponent";
export default function JobPosting() {
  return (
    <div className="bg-gray-100">
      <main className="container mx-auto mt-8">
        <div className="flex space-x-8 pt-10">
          <div className="bg-white p-8 rounded-lg shadow-lg h-[100%] w-[817px]  px-6">
            <h2 className="text-[25px] font-bold text-[#002160] mb-4">
              Describe The Job
            </h2>
            <div className="mb-4">
              <label className="block text-[#002160] mb-2 text-[16px] h-[16px] w-[136px] ">
                Job Details
              </label>
              <textarea
                className="w-full border border-gray-300 p-2 rounded"
                rows="5"
              ></textarea>
            </div>
            <div className="flex space-x-4 mb-4">
              <div class="w-1/2">
                <label className="block text-[#002160] mb-2 text-[16px] h-4 w-[87px]">
                  Job City *
                </label>
                <select className="w-full border border-gray-300 p-2 rounded">
                  <option>Select City</option>
                </select>
              </div>
              <div className="w-1/2">
                <label className="block text-[#002160] mb-2 text-[16px] h-4 w-[87px]">
                  Country *
                </label>
                <select className="w-full border border-gray-300 p-2 rounded">
                  <option>Select Country</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label class="block text-[#002160] mb-2 w-[365px] h-5 text-[16px]">
                Job type *
              </label>
              <div className="flex space-x-2">
                <button className="border border-gray-300 py-1 px-3 rounded-full h-[42px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Full time
                </button>
                <button className="border border-gray-300 py-1 px-3 rounded-full h-[42px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Part Time
                </button>
                <button className="border border-gray-300 py-1 px-3 rounded-full h-[42px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Fresher
                </button>
                <button className="border border-gray-300 py-1 px-3 rounded-full h-[42px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Internships
                </button>
                <button className="border border-gray-300 py-1 px-3 rounded-full h-[42px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Volunteer
                </button>
              </div>
            </div>
            <h2 className="text-xl font-bold text-[#002160] mb-4 h-[29px] w-[335px] text-[25px]">
              Add Pay And Benefits
            </h2>
            <div className="flex space-x-4 mb-4">
              <div className="">
                <label className="block text-[#002160] mb-2 h-[16px] w-[230px] text:[16px]">
                  From (Salary Range)
                </label>
                <input
                  className="border border-gray-300 p-2 rounded h-[53px] w-[230px]"
                  placeholder="e.g. $80,000"
                  type="text"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-[#002160] mb-2 h-[16px] w-[230px] text:[16px]">
                  To (Salary Range)
                </label>
                <input
                  className=" border border-gray-300 p-2 rounded  h-[53px] w-[230px]"
                  placeholder="e.g. $90,000"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[#002160] mb-2 h-[20px] w-[230px] text-[16px]">
                Education
              </label>
              <div className="flex space-x-2">
                <button className="border border-blue-350 py-1 px-3 rounded-full  h-[40px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Ph.D.
                </button>
                <button className="border border-blue-350  py-1 px-3 rounded-full h-[40px] text-wrap:nowrap w:fit-content shadow-job-type ">
                  + Master Degree
                </button>
                <button className="border border-blue-350  py-1 px-3 rounded-full  h-[40px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Graduation
                </button>
                <button className="border border-blue-350  py-1 px-3 rounded-full  h-[40px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Higher School
                </button>
                <button className="border border-blue-350 py-1 px-3 rounded-full h-[40px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Certification Course
                </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-[#002160] mb-2 h-[20px] w-[365px] text-[16px]">
                Benefits
              </label>
              <div className="flex space-x-2 flex-wrap ">
                <button className="border border-blue-350 py-1 px-3 rounded-full  h-[40px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Health insurance
                </button>
                <button className="border border-blue-350  py-1 px-3 rounded-full h-[40px] text-wrap:nowrap w:fit-content shadow-job-type ">
                  + Provident Fund
                </button>
                <button className="border border-blue-350  py-1 px-3 rounded-full  h-[40px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Cell phone reimbursement
                </button>
                <button className="border border-blue-350  py-1 px-3 rounded-full  h-[40px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Paid sick time
                </button>
                <button className="border border-blue-350 py-1 px-3 rounded-full h-[40px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Work from home
                </button>
                <button className="border border-blue-350 py-1 px-3 rounded-full h-[40px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Paid time off
                </button>
                <button className="border border-blue-350 py-1 px-3 rounded-full h-[40px] text-wrap:nowrap w:fit-content shadow-job-type">
                  + Food Prvided
                </button>
              </div>
            </div>
            <div className="flex justify-between pt-2">
              <button className="text-blue-600 hover:underline">Back</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Post
              </button>
            </div>
          </div>

          <div className="w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-4">
              <UiuxComponent />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <i className="fas fa-info-circle text-gray-600 mr-2 h-[63px] w-[322px] text-[13px]"></i>
                <p>
                  Clearly outlining the role's responsibilities and objectives
                  attracts suitable candidates with cross-industry applications,
                  ensuring a better fit for both parties.
                </p>
              </div>
            </div>
          </div>
        </div>
        <FooterComponent/>
      </main>
    </div>
  );
}
