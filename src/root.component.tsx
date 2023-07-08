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
    <div className="flex justify-center items-center bg-orange-50 w-screen h-screen ">
      <div className={`w-3/5 flex h-3/5  shadow-sm`}>
        <div
          className={` ${
            signIn
              ? " translate-x-full rounded-se-md  rounded-ee-md "
              : " rounded-ss-md rounded-es-md"
          } duration-300 z-10 w-1/2  bg-blue-500`}
        >
          <Login props={signIn} passData={handlePassData} />
        </div>
        <div
          className={`${
            signIn
              ? "-translate-x-full  rounded-ss-md  rounded-es-md"
              : "rounded-se-md rounded-ee-md"
          } w-1/2 flex  duration-300 justify-around items-center bg-slate-200 `}
        >
          <Registro props={signIn} />
        </div>
      </div>
    </div>
  );
};

export default Root;
