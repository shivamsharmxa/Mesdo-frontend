import { useState } from "react";
import ForgetIcon from "../../assets/Web Security.svg";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
    } else {
      setError("");
      alert("Password reset link sent!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-8">
      <div className="w-130 max-w-3xl p-12  rounded-md">
        <h2 className="text-center text-3xl font-medium">Forgot Password</h2>

        {/* Image Section - Wider */}
        <div className="flex justify-center my-8">
          <img src={ForgetIcon} alt="Security" className="h-56 w-80" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-small text-gray-700">
              Enter Registered Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className={`mt-2 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none ${
                error ? "border-red-500" : "border-gray-300"
              } text-gray-900 bg-gray-100 text-lg`}
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white bg-[#1890FF] hover:bg-blue-700"
          >
            Continue
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
