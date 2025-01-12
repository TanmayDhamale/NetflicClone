//import Input from "@/components/Input";

const Auth = () => {
  return (
    <div className="min-h-screen h-full w-full bg-[url('/images/hero1.png')] bg-no-repeat bg-cover bg-fixed bg-center">
      <div className="bg-black bg-opacity-50 w-full h-full ">
      <nav className="px-5 py-0 flex items-center  justify-center ">
        <img src="/images/logo.png" alt="Logo" className="h-12" w-auto />
         </nav>
         <div className="flex justify-center items-center min-h-[calc(100%-4rem)]">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full ">
          <h2 className="text-4xl text-white mb-8 font-semibold ">Sign In
          </h2>
          <div className ="flex flex-col space-y-4">
          <input type="email" placeholder="Email" className="bg-white px-4 py-2 rounded-md" />
          </div>
          </div>
         </div>
      </div>
    </div>
  );
};

export default Auth;