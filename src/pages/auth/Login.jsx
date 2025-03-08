import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import signUp from "../../assets/SignUp.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 hidden md:block">
        <img
          src={signUp}
          className="h-full w-full object-cover"
          alt="Sign Up"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-8">
        <div className="max-w-md w-full">
          <h2 className="text-[#DB4E82] font-bold text-sm">Hey!</h2>
          <h1 className="text-3xl font-bold mt-2">Welcome Back</h1>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                className={`mt-1 block w-full px-4 py-3 border rounded-sm shadow-sm focus:outline-none ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } text-gray-900 bg-gray-100`}
                placeholder="example@mail.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                className={`mt-1 block w-full px-4 py-3 border rounded-sm shadow-sm focus:outline-none ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } text-gray-900 bg-gray-100`}
                placeholder="Enter Your Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <button
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white bg-[#1890FF] hover:bg-blue-700"
              type="submit"
            >
              Log in
            </button>
          </form>

          <div className="mt-3 flex justify-between text-sm text-gray-600">
            <a className="text-[#5A6FE4] font-small" href="#">
              Forget password
            </a>
            <a className="text-gray-600 font-small" href="#">
              Don&apos;t have an account?{" "}
              <span className="text-blue-500 text-small">Sign up</span>
            </a>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
            <FcGoogle className="mr-2 text-xl" />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
