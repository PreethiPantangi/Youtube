import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2 p-3 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          src="https://blog.hubspot.com/hs-fs/hubfs/What%20is%20a%20Hamburger%20Button.png?width=338&name=What%20is%20a%20Hamburger%20Button.png"
          alt="menu"
          className="h-7 cursor-pointer"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
          className="h-7 ml-5 cursor-pointer"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 p-2 border border-solid border-gray-400 rounded-l-full"
        />
        <button className="bg-gray-200 p-3.5 font-bold cursor-pointer rounded-r-full">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              className="stroke-current"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
      <div className="col-span-1">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt="user-icon"
          className="h-7 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
