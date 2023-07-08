import React, { useState } from "react";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";

const Registro = (props) => {
  console.log("props desde register", props);
  const [inputFocused, setInputFocused] = useState({
    userName: false,
    email: false,
    password: false,
  });
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (fieldName) => {
    setInputFocused((prevState) => ({
      ...prevState,
      [fieldName]: true,
    }));
  };

  const handleBlur = (fieldName, e) => {
    if (e.target.value === "") {
      setInputFocused((prevState) => ({
        ...prevState,
        [fieldName]: false,
      }));
    }
  };

  return (
    <div className="flex flex-col justify-between py-5 items-center h-full">
      {props.props ? (
        <h1 className="text-4xl mt-5 font-serif">Log in</h1>
      ) : (
        <h1 className="text-4xl mt-5 font-serif">Create Account</h1>
      )}

      <div className="flex gap-3">
        <TbBrandTwitterFilled className="text-5xl text-sky-500 cursor-pointer duration-300 hover:-translate-y-3" />
        <TbBrandFacebookFilled className="text-5xl text-blue-500 cursor-pointer duration-300 hover:-translate-y-3" />
        <FcGoogle className="text-5xl cursor-pointer duration-300 hover:-translate-y-3" />
      </div>
      <form className="h-2/5 flex flex-col gap-6 font-serif ">
        <h1 className="font-serif">Or enter an email and password</h1>
        {!props.props ? (
          <div className={`w-full relative`}>
            <input
              type="text"
              name="userName"
              className="w-full py-2 px-4 rounded-lg border-2 border-gray-400 focus:outline-none"
              onFocus={() => handleFocus("userName")}
              onBlur={(e) => handleBlur("userName", e)}
            />
            <label
              className={`absolute left-4 top-2 pointer-events-none transition-all duration-300 ${
                inputFocused.userName ? "text-sm text-gray-600 -top-5" : ""
              }`}
            >
              UserName
            </label>
          </div>
        ) : (
          <></>
        )}

        <div className=" w-full relative">
          <input
            name="email"
            type="email"
            className="w-full py-2 px-4 rounded-lg border-2 border-gray-400 focus:outline-none"
            onFocus={() => handleFocus("email")}
            onBlur={(e) => handleBlur("email", e)}
          />
          <label
            className={`absolute left-4 top-2 pointer-events-none transition-all duration-300 ${
              inputFocused.email ? "text-sm text-gray-600 -top-5" : ""
            }`}
          >
            Email
          </label>
        </div>
        <div className=" w-full relative">
          <input
            name="password"
            type="password"
            className="w-full py-2 px-4 rounded-lg border-2 border-gray-400 focus:outline-none"
            onFocus={() => handleFocus("password")}
            onBlur={(e) => handleBlur("password", e)}
          />
          <label
            className={`absolute left-4 top-2  pointer-events-none transition-all duration-300 ${
              inputFocused.password ? "text-sm text-gray-600  -top-5 " : ""
            }`}
          >
            Password
          </label>
        </div>
      </form>
      <button className="bg-slate-400 font-serif  duration-200 hover:-translate-y-3 hover:text-white hover:bg-blue-500 shadow-md hover:shadow-slate-100 p-3 px-8 rounded-full  border-black  ">
        SIGN UP
      </button>
    </div>
  );
};

export default Registro;
