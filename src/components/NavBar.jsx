import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLoginStatus, setTodos } from "../redux";


const Navbar = () => {
  const navigate = useNavigate();
  const loginStatus = useSelector((state)=>{
    return state.userLoggedIn.loginStatus
  })
  const dispatch = useDispatch();
  const handleSignOut = (e) => {
    e.preventDefault(); 
    dispatch(setLoginStatus(false)); 
    dispatch(setTodos([]))
  };
  return (
    <nav className="p-4 shadow-md">
      {" "}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-gray-900 text-3xl font-semibold cursor-pointer" onClick={()=>{
          navigate("/")
        }}>To-Do App</h1>{" "}
        <div className="flex space-x-4">
          {!loginStatus ?<> <Link
            to="/signup"
            className="text-gray-900 hover:bg-gray-300 px-3 py-2 rounded-md text-lg"
          >
            SignUp
          </Link>
          <Link
            to="/signin"
            className="text-gray-900 hover:bg-gray-300 px-3 py-2 rounded-md text-lg"
          >
            SignIn
          </Link> </>: <><Link
            to="/signin"
            className="text-gray-900 hover:bg-gray-300 px-3 py-2 rounded-md text-lg"
            onClick={handleSignOut}
          >
            SignOut
          </Link></>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
