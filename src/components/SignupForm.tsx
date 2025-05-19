import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signupUser } from "../services/api";
import { User } from "../types/user";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const formik = useFormik<User>({
    initialValues: {
      name: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      username: Yup.string()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: async (values) => {
      try {
        const data = await signupUser(values);
        alert(data.message || "Signup successful");
        navigate("/home");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          alert(error.response?.data?.message || "Something went wrong");
        }
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="border p-2 w-full"
        />
        {formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}
      </div>
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          className="border p-2 w-full"
        />
        {formik.errors.username && <p className="text-red-500">{formik.errors.username}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className="border p-2 w-full"
        />
        {formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Signup
      </button>
    </form>
  );
};

export default SignupForm;
