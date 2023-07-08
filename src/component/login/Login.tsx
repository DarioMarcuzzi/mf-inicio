import React, { useState } from "react";

const Login = ({ passData, props }) => {
  const [propValue, setPropValue] = useState(props);
  const handleSingInButton = () => {
    const newPropValue = !propValue;
    setPropValue(newPropValue);
    passData(newPropValue);
  };

  return (
    <div className="flex w-full h-full flex-col items-center justify-around">
      <h1 className="text-4xl font-serif">Welcome back!</h1>
      <p className="font-serif">fasda</p>
      <button
        className="bg-white font-serif  duration-200 hover:-translate-y-3  hover:bg-slate-200 shadow-md hover:shadow-slate-100 p-3 px-8 rounded-full  border-black  "
        onClick={handleSingInButton}
      >
        SIGN IN
      </button>
    </div>
  );
};

export default Login;
