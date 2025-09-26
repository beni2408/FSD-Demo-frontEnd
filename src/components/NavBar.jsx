import { useDispatch } from "react-redux";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAuth } from "../features/authSlice";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearAuth());
    navigate("/");
  };
  //   const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <nav>
      <div className="flex flex-row items-center justify-between">
        <Link to={"/"} className="text-lg font-semibold ">
          SJCU Portal
        </Link>

        <div className="w-[200px]  flex flex-row justify-between mr-10">
          {user ? (
            <>
              <Link to={"/tasks"} className="text-sm">
                Tasks
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to={"/login"} className="text-sm">
                Login
              </Link>

              <Link to={"/register"} className="text-sm">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
