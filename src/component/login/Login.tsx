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
      <h1>Welcome back!</h1>
      <p>fasda</p>
      <button
        className="bg-slate-600 p-3 px-8 rounded-full border-2 border-black  "
        onClick={handleSingInButton}
      >
        SIGN IN
      </button>
    </div>
  );
};

export default Login;
