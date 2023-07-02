import React from "react";

const Login = () => {
  return (
    <div className="w-full bg-black p-2 flex justify-center">
      <form className=" w-full h-full flex items-center justify-center bg-slate-50">
        <h1>Welcome! to your News page</h1>
        <label>
          Email
          <input type="text" />
        </label>
      </form>
    </div>
  );
};

export default Login;
