import React from "react";
import Title from "../components/Title";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Title text2={"Login"} />
      <div className=" flex flex-col gap-5 w-full items-center">
        <input
          type="email"
          className="border-2 border-slate-900 w-full sm:w-1/3 h-8 "
        />
        <input
          type="password"
          className="border-2 border-slate-900 w-full sm:w-1/3 h-8 "
        />
        <div>
          <span>Forgot your password?</span>
          <span>Create accouont</span>
        </div>
        <button className="bg-black text-white p-5 ">Sign in</button>
      </div>
    </div>
  );
};

export default Login;
