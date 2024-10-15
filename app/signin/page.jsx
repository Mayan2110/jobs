// next js
import FooterComponent from "../component/common/footerComponent";

export default function SignIn() {
  return (
    <div className="bg-gray-200 flex flex-col  items-center justify-center min-h-screen pt-9">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[568px] h-[668px]">
        <h1 className="text-[40px] font-normal mb-2">Sign in</h1>
        <p className="text-gray-600 mb-6 text-sm font-normal">
          Stay updated on your professional world
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email or Phone
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="text"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password"
            />
            <span className="absolute right-3 top-10 text-blue-500 cursor-pointer">
              Show
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
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="text-center">
          <p className="text-gray-700">
            New to TalentConnect?{" "}
            <a href="#" className="text-blue-500">
              Join now
            </a>
          </p>
        </div>
      </div>
      <br />
      <FooterComponent />
    </div>
  );
}
