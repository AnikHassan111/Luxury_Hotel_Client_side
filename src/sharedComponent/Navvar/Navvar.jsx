import { useContext, useEffect, useState } from "react";
import { ContextApi } from "../../AuthProvider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navvar = () => {
  let { user, logOut, loading } = useContext(ContextApi);
  let [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    if (user) {
      setPhotoUrl(user.photoURL);
    }
  }, [user]);
  // console.log(user.photoURL);

  const NavvarLi = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <div className="flex ">
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>Register</NavLink>
          </li>
        </div>
      )}
      <li>
        <NavLink to={"/room"}>Hotel Room</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to={"/mybooking"}>My Booking</NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavvarLi}
          </ul>
        </div>
        <div>
          <div>
            <img
              src="https://i.pinimg.com/originals/fa/80/08/fa8008a02be1c977476ef629f8f12466.gif"
              alt=""
              className="w-48"
            />
          </div>
        </div>
      </div>
      <div className="navbar-center items-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavvarLi}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex flex-col-reverse items-center md:flex-row ">
            {loading ? "" : <p className="m">{user?.displayName}</p>}
            <div>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={photoUrl} />
                </div>
              </label>
            </div>
          </div>
        ) : (
          ""
        )}
        {user ? (
          <button
            className="py-2 px-4 rounded-lg btn-active  font-semibold"
            onClick={() => {
              logOut();
            }}
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/login"}
            className="py-2 px-4 rounded-lg btn-active  font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navvar;
