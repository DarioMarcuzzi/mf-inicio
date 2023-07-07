import React, { useState } from "react";

const Registro = (props) => {
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
    <div className="flex flex-col justify-around h-full">
      <h1>Create Accont</h1>
      <div className="flex">
        <p>Icon</p>
        <p>Icon</p>
        <p>Icon</p>
      </div>
      <form className="h-2/5 flex flex-col gap-4">
        <p className=""></p>
        <div className="h-full w-full relative">
          <input
            type="text"
            name="userName"
            className="w-full py-2 px-4 rounded-lg border-2 border-gray-400 focus:outline-none"
            onFocus={() => handleFocus("userName")}
            onBlur={(e) => handleBlur("userName", e)}
          />
          <label
            className={`absolute left-4 top-2 pointer-events-none transition-all duration-300 ${
              inputFocused.userName ? "text-sm text-gray-600 -top-4" : ""
            }`}
          >
            UserName
          </label>
        </div>
        <div className="h-full w-full relative">
          <input
            name="email"
            type="email"
            className="w-full py-2 px-4 rounded-lg border-2 border-gray-400 focus:outline-none"
            onFocus={() => handleFocus("email")}
            onBlur={(e) => handleBlur("email", e)}
          />
          <label
            className={`absolute left-4 top-2 pointer-events-none transition-all duration-300 ${
              inputFocused.email ? "text-sm text-gray-600  -top-4" : ""
            }`}
          >
            Email
          </label>
        </div>
        <div className="h-full w-full relative">
          <input
            name="password"
            type="password"
            className="w-full py-2 px-4 rounded-lg border-2 border-gray-400 focus:outline-none"
            onFocus={() => handleFocus("password")}
            onBlur={(e) => handleBlur("password", e)}
          />
          <label
            className={`absolute left-4 top-2  pointer-events-none transition-all duration-300 ${
              inputFocused.password ? "text-sm text-gray-600  -top-4" : ""
            }`}
          >
            Password
          </label>
        </div>
      </form>
      <button>SIGN UP</button>
    </div>
  );
};

export default Registro;
