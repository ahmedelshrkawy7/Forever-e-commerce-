import React from "react";
import Title from "../components/Title";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { QueryClient, useMutation } from "react-query";

const Login2 = () => {
  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "this is is too short")
      .max(10, "too long")
      .required("Required"),
  });

  const postData = async (newData) => {
    console.log("postData");

    const { data } = await axios.post(
      "https://pm.alexondev.net/api/login",
      newData
    );
    return data;
  };

  const mutation = useMutation(postData, {
    onSuccess: (r) => {
      console.log("🚀 ~ Login2 ~ r:", r);
      const queryclient = new QueryClient();
      queryclient.invalidateQueries(["products", "hamada"]);

      // Invalidate and refetch data
      // queryClient.invalidateQueries('data');
      console.log("first");
    },
  });
  console.log("🚀 ~ Login2 ~ mutation:", mutation);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (v) => {
      // fetch("https://pm.alexondev.net/api/login", {
      //   method: "post",
      //   headers: {
      //     "content-type": "application/json",
      //     accept: "application/json",
      //   },
      //   body: JSON.stringify(v),
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     console.log(res.data.user.token);
      //     Cookies.set("hamada", res.data.user.token); // jwt
      //   });
      console.log("ffffffff");

      mutation.mutate(v);
    },
  });

  console.log("🚀 ~ Login2 ~ formik:", formik.values);
  console.log("🚀 ~ Login2 ~ formik:", formik);
  return (
    <div>
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
            value={formik.values.email}
          />
          <span className="text-red-600">{formik.errors.email}</span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-2 border-slate-900 w-full sm:w-1/3 h-8 "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <span className="text-red-600">{formik.errors.password}</span>

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

export default Login2;
