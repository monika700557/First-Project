import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { alphaNumericPattern , emailrgx} from "../../assets/constant";
import * as yup from "yup";
import axios from "axios";
import {  useNavigate } from "react-router-dom";



export default function RegisterPage() {



  const schema = yup
  .object({
    register_name: yup
      .string()
      .matches(alphaNumericPattern, "Please enter a valid name")
      .required("Please enter your name"),
    register_number: yup
      .number()
      .min(10, "Mobile number must be at least 10 digits")
      .required("Mobile number is required"),
    register_email: yup
      .string()
      .matches(emailrgx, "Please enter a valid email")
      .required("Email is required")
      .trim(),
    register_password: yup
      .string()
      .min(6, "Password must be exactly 6 characters")
      .max(6, "Password must be exactly 6 characters")
      .required("Password is required")
      .trim(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('register_password'), null], 'Passwords must match') // Check if passwords match
      .required("Confirm Password is required")
      .trim(),
  })
  .required();

  const navigate = useNavigate();

  const inputValues = {
    register_name: "",
    register_email: "",
    register_number: "",
    register_password: "",
    confirmPassword: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: inputValues,
  });

  const submitForm = async (data) => {
    console.log("Form data to be submitted: ", data); // Debug point 1
    try {
      const response = await axios.post(
        "http://localhost:8081/api/auth/signup",
        data
      );
      console.log("Response from server: ", response); // Debug point 2

      if (response.data.status) 
        {
          console.log("registration successfully ")
        navigate("/login");
      } else {
        console.log("Registration failed: ", response.data.msg);
      }
    } catch (error) {
      console.error("Error during registration: ", error);
    }

    reset();
    console.log("form reset");
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white px-10 py-10 rounded-3xl w-full max-w-md shadow-lg"  >
        <h1 className="text-2xl font-semibold text-black text-center">
          Register
        </h1>
        <p className="font-medium text-lg text-black mt-2 text-center">
        Access to our dashboard
        </p>

        <form onSubmit={handleSubmit(submitForm)}>
        <div className="mt-4">
        <div>
            <label className="text-xs text-gray-500 font-bold">
             Name
            </label>
            <input   {...register("register_name")}
              type="text"
              className="w-full border-2 border-gray-200 p-2 mt-1 bg-transparent rounded"
            />
             <p className="text-red-600 mt-1">
                      {errors.register_name?.message}
                    </p>
          </div>


          <div>
            <label className="text-xs text-gray-500 font-bold">
         Mobile Number 
            </label>
            <input   {...register("register_number")}
              type="text"
              className="w-full border-2 border-gray-200 p-2 mt-1 bg-transparent rounded"
             
            />
              <p className="text-red-600 mt-1">
                      {errors.register_number?.message}
                    </p>
          </div>

          <div>
            <label className="text-xs text-gray-500 font-bold">
              Email Address
            </label>
            <input {...register("register_email")}
              type="email"  
              className="w-full border-2 border-gray-200 p-2 mt-1 bg-transparent rounded"
            />
             <p className="text-red-600 mt-1">
                      {errors.register_email?.message}
                    </p>
          </div>
          <div className="mt-3">
            <label className="text-xs text-gray-500 font-bold">Password</label>
            <input   {...register("register_password")}
              type="password"
              className="w-full border-2 border-gray-200 p-2 mt-1 bg-transparent rounded"
              
            />
              <p className="text-red-600 mt-1">
                      {errors.register_password?.message}
                    </p>
          </div>
          <div className="mt-3">
            <label className="text-xs text-gray-500 font-bold">Confirm Password</label>
            <input    {...register("confirmPassword")}
              type="password"
              className="w-full border-2 border-gray-200 p-2 mt-1 bg-transparent rounded"
              
            />
              <p className="text-red-600 mt-1">
                      {errors.confirmPassword?.message}
                    </p>
          </div>

          <div className="mt-8 flex flex-col gap-y-4 font-medium text-base text-violet-500">
            <button    type="submit"     className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-600 text-white text-lg font-bold">
              Register
            </button>

            <div className="mt-4 flex justify-between items-center">
              <span className="block w-full border-t border-gray-300"></span>
              <span className="px-4 text-gray-400 font-medium">OR</span>
              <span className="block w-full border-t border-gray-300"></span>
            </div>

            <button className="flex rounded-xl py-3 items-center justify-center gap-2 text-gray-500">
              Login with
              <img
                className="w-8"
                src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/social-facebook-icon.png"
                alt="Facebook"
              />
              <img
                className="w-8"
                src="https://static.vecteezy.com/system/resources/previews/021/514/894/non_2x/google-symbol-logo-white-design-illustration-with-red-background-free-vector.jpg"
                alt="Google"
              />
            </button>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base text-gray-500">
            Already have an accoun?{" "}
            </p>
            <button className="text-black text-base font-medium ml-2">
              Login
            </button>
          </div>
        </div>

        </form>

     


      </div>
    </div>
  );
}