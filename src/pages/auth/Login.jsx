import { useDispatch } from "react-redux";
import React from "react";
import { useState } from "react";
import { useLoginMutation } from "../../features/applicationApi";
import { setState } from "../../features/authSlice";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await login(data).unwrap();
      dispatch(setState(res));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  const handleChange = (event) => {
    setData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className=" border flex flex-col items-center justify-center p-10 rounded-2xl shadow-2xl ">
        <h2 className="text-4xl font-bold mb-[70px] mt-[100px]"> Login Page</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-[250px]  justify-around items-center"
        >
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
            value={data.email}
            className="border border-gray-300 w-[500px] h-[50px] pl-10 rounded-xl shadow-md "
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={handleChange}
            value={data.password}
            className="border border-gray-300 w-[500px] h-[50px] pl-10 rounded-xl shadow-md"
            placeholder="Password"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-md bg-amber-300 w-[200px] h-[40px] font-bold"
          >
            {isLoading ? "Logging In" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
