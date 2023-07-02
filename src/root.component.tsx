import "../dist/tailwind.css";
import "../styles.css";
import Login from "./component/login/Login";
import Registro from "./component/registro/Registro";

const Root = () => {
  return (
    <div className="w-screen h-screen justify-center flex items-center flex-col bg-slate-500">
      <div className="flex flex-col  items-center w-96 h-96 bg-slate-800 text-gray-400">
        <div className="flex w-full h-3/4">
          <Login />
        </div>
        {/* <Registro /> */}
        <div className="flex justify-around w-full h-1/4 items-center ">
          <button className="bg-slate-700 p-2 rounded-md text-xl  hover:bg-slate-300 hover:text-slate-800">
            Login
          </button>
          <button className="bg-slate-700 p-2 rounded-md text-xl  hover:bg-slate-300 hover:text-slate-800">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Root;
