import React, { useState, useEffect } from "react";
import "../dist/tailwind.css";
import "../styles.css";
import Login from "./component/login/Login";
import Registro from "./component/registro/Registro";

const Root = () => {
  const [signIn, setSignIn] = useState(false);

  const handlePassData = (signInValue) => {
    console.log(signIn);
    console.log(signInValue);
    setSignIn(signInValue);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black">
      <div className={`w-3/5 flex h-3/5`}>
        <div
          className={` ${
            signIn ? " translate-x-full" : ""
          } duration-300 z-10 w-1/2  bg-red-500`}
        >
          <Login props={signIn} passData={handlePassData} />
        </div>
        <div
          className={`${
            signIn ? "-translate-x-full" : ""
          } w-1/2 flex  duration-300 justify-around items-center bg-blue-500`}
        >
          <Registro props={signIn} />
        </div>
      </div>
    </div>
  );
};

export default Root;
