import { FcGoogle } from "react-icons/fc";
import signUp from "../../assets/SignUp.png";

const SignUp = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side (Image Section) */}
      <div className="w-1/2 hidden md:block">
        <img
          src={signUp}
          className="h-full w-full object-cover"
          alt="Sign Up"
        />
      </div>

      {/* Right Side (Form Section) */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="max-w-md w-full">
          <h2 className="text-[#DB4E82] font-bold text-sm">START FOR FREE</h2>
          <h1 className="text-3xl font-bold mt-2">Create new account.</h1>

          <form className="mt-6 space-y-4">
            <div>
              <label
                className="block text-sm font-small text-gray-700"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-gray-100"
                id="email"
                placeholder="example@mail.com"
                type="email"
              />
            </div>

            <div>
              <label
                className="block text-sm font-small text-gray-700"
                htmlFor="password"
              >
                Create a password <span className="text-red-500">*</span>
              </label>
              <input
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-gray-100"
                id="password"
                placeholder="at least 8 characters"
                type="password"
              />
            </div>

            <button
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white bg-[#1890FF]"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-3 text-sm ml-70 text-gray-600 text-center">
            Already a Member?{" "}
            <a className="text-blue-500 font-semibold" href="#">
              Login
            </a>
          </p>

          {/* OR Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          {/* Google Sign-up Button */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md text-sm font-small text-gray-700 hover:bg-gray-100">
            <FcGoogle className="mr-2 text-xl" />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
