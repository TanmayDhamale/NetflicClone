// //import Input from "@/components/Input";

// const Auth = () => {
//   return (
//     <div className="min-h-screen h-full w-full bg-[url('/images/hero1.png')] bg-no-repeat bg-cover bg-fixed bg-center">
//       <div className="bg-black bg-opacity-50 w-full h-full ">
//       <nav className="px-5 py-0 flex items-center  justify-center ">
//         <img src="/images/logo.png" alt="Logo" className="h-12" w-auto />
//          </nav>
//          <div className="flex justify-center items-center min-h-[calc(100%-4rem)]">
//           <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full ">
//           <h2 className="text-4xl text-white mb-8 font-semibold ">Sign In
//           </h2>
//           <div className ="flex flex-col space-y-4">
//           <input type="email" placeholder="Email" className="bg-white px-4 py-2 rounded-md" />
//           </div>
//           </div>
//          </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      // Example login logic
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Failed to login");
      const data = await response.json();
      console.log("Login successful:", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('/images/hero1.png')] bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col items-center w-full max-w-md space-y-6">
        {/* Netflix Logo */}
        <img src="/images/logo.png" alt="Netflix Logo" className="h-16" />

        {/* Sign In Form */}
        <div className="bg-black bg-opacity-70 p-8 rounded-md w-full">
          <h2 className="text-4xl text-white mb-6 font-semibold text-center">Sign In</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-800 px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-gray-800 px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-red-600 py-2 mt-4 text-white rounded-md hover:bg-red-700 transition w-full"
          >
            Sign In
          </button>
          <div className="flex justify-between mt-4 text-gray-400 text-sm">
            <a href="/forgot-password" className="hover:underline">
              Forgot Password?
            </a>
            <a href="/signup" className="hover:underline">
              Sign Up Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;