import React, { useState } from "react";
import Title from "../components/Title";
import { json } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({});
  const [err, setErr] = useState({});
  console.log("🚀 ~ Login ~ err:", err);

  console.log("🚀 ~ Login ~ data:", data);

  function handleChange(e) {
    console.log("🚀 ~ handleChange ~ e:", e.target.value, e.target.name);
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const Err = validate();
    if (Object.keys(Err).length == 0) {
      axios.post("https://pm.alexondev.net/api/login", data);
    }
  }

  function validate() {
    const errObj = {};
    if (!data.email) errObj.email = "email is required";
    if (!data.password) errObj.password = "password is required";

    setErr(errObj);
    return errObj;
  }

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <Title text2={"Login"} />
      <div className=" flex flex-col gap-5 w-full items-center">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border-2 border-slate-900 w-full sm:w-1/3 h-8 "
          onChange={handleChange}
        />
        <span className="text-red-600">{err.email}</span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-2 border-slate-900 w-full sm:w-1/3 h-8 "
          onChange={handleChange}
        />
        <span className="text-red-600">{err.password}</span>

        <div>
          <span>Forgot your password?</span>
          <span>Create accouont</span>
        </div>
        <button className="bg-black text-white p-5 " type="submit">
          Sign in
        </button>
      </div>
    </form>
  );
};

export default Login;
