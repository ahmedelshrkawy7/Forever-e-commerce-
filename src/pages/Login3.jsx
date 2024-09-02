import React from "react";
import Title from "../components/Title";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login3 = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(2, "too short").required("Required"),
  });

  const formik = useFormik({
    initialValues: {},
    validationSchema: schema,
    onSubmit: () => {},
  });

  console.log("🚀 ~ Login3 ~ formik:", formik);
  return (
    <div>
      {" "}
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={formik.handleSubmit}
      >
        <Title text2={"Login"} />
        <div className=" flex flex-col gap-5 w-full items-center">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="border-2 border-slate-900 w-full sm:w-1/3 h-8 "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="text-red-600">
            {formik.touched.email && formik.errors.email}
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-2 border-slate-900 w-full sm:w-1/3 h-8 "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span className="text-red-600">
            {formik.touched.password && formik.errors.password}
          </span>

          <div>
            <span>Forgot your password?</span>
            <span>Create accouont</span>
          </div>
          <button className="bg-black text-white p-5 " type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login3;
