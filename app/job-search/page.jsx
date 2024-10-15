import Image from "next/image";
import RectangleImageComponent from "../component/common/rectangleImageComponent";
import FilterComponent from "../component/common/filterComponent";
import JobSearchComponent from "../component/common/jobSearchComponent";
import FooterComponent from "../component/common/footerComponent";

export default function Jobsearch() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex">
          <FilterComponent />

          <div>
            {[...Array(5)].map(() => (
              <JobSearchComponent />
            ))}
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
