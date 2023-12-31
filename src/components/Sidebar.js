import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-2 m-2 w-60">
      <ul>
        <Link to="/">
          <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
            Home
          </li>
        </Link>
        <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
          Shorts
        </li>
        <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
          Subscriptions
        </li>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
          Library
        </li>
        <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
          History
        </li>
        <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
          Your Videos
        </li>
        <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
          Watch Later
        </li>
        <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
          Liked Videos
        </li>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="ml-2">Subscriptions</p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <p className="ml-2">Explore</p>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
          Settings
        </li>
        <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
          Report History
        </li>
        <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
          Help
        </li>
        <li className="flex hover:bg-gray-100 hover:rounded-lg p-2 cursor-pointer">
          Send feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
