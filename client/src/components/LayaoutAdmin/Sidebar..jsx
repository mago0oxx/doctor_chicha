import React, { useState } from "react";
import {
  RiLogoutCircleRLine,
  RiArrowRightLine,
  RiMenu3Line,
  RiCloseLine,
  RiCarFill,
  RiHome7Fill,
  RiMessage3Fill,
} from "react-icons/ri";
import logo from '../assets/logodoctor.png'
import { AiOutlineComment } from "react-icons/ai";

import { FaUsers, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Style from './Sidebar.module.css'
function Sidebar() {
  //overflow-y-scroll
  const { logout } = useAuth0();
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className={Style.container }
        // className={`xl:h-[100vh]  fixed xl:static w-[50%] md:w-[40%] lg:w-[30%] xl:w-auto h-full  top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50  ${
        //   showMenu ? "left-0" : "-left-full"
        // } transition-all`}
      >
        <div className={Style.logo}>
            <img src={logo} alt="logo-doctor chicha" />
        </div>
        <div >
            
          <h1 className="text-center text-4xl font-bold text-white mb-10">
            Admin<span className="text-primary  ">.</span>
          </h1>
          <ul className="list-unstyled">
            <li>
              <Link
                to="products"
                className="d-flex text-3xl align-items-center gap-4 py-2 px-4 rounded-lg hover-bg-secondary-900 w-100"
              >
                <FaShoppingBag className="text-primary " />
                <p className="text-white">Products</p>
              </Link>
            </li>

            

            <li>
              <Link
                to="users"
                className="d-flex text-2xl align-items-center gap-4 py-2 px-4 rounded-lg hover-bg-secondary-900 w-100"
              >
                <FaUsers className="text-primary" />
                <p className="text-white">Users</p>
              </Link>
            </li>
            <li>
              <Link
                to="messages"
                className="d-flex text-2xl align-items-center gap-4 py-2 px-4 rounded-lg hover-bg-secondary-900 w-100l"
              >
                <RiMessage3Fill className="text-primary" />
                <p className="text-white">Messages</p>
              </Link>
            </li>
            <li>
              <Link
                to="reviews"
                className="d-flex text-2xl align-items-center gap-4 py-2 px-4 rounded-lg hover-bg-secondary-900 w-100"
              >
                <AiOutlineComment className="text-primary" />
                <p className="text-white">Reviews</p>
              </Link>
            </li>
            {/* <li>
              <button
                onClick={() => setShowSubMenu(!showSubMenu)}
                className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 w-full"
              >
                <span className="flex items-center gap-4 text-2xl">
                  <FaUsers className="text-primary " /> Users
                </span>
                <RiArrowRightLine
                  className={`mt-1 ${
                    !showSubMenu && "rotate-90"
                  } transition-all`}
                />
              </button>

              <ul className={`my-2 ${showSubMenu && "hidden"}`}>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative
                   before:w-3 before:h-3 before:absolute before:bg-primary
                    before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2
                     before:border-secondary-100 before:border-4 hover:text-primary transition-colors 
                     rounded-lg hover:bg-secondary-900 text-lg"
                  >
                    Admin
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative
                   before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full
                    before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2
                     before:border-secondary-100 before:border-4 hover:text-primary transition-colors 
                     rounded-lg hover:bg-secondary-900 text-lg"
                  >
                    User
                  </Link>
                </li>
              </ul>
            </li> */}
            <li>
              <Link
                to="/home"
                className="d-flex text-2xl align-items-center gap-4 py-2 px-4 rounded-lg hover-bg-secondary-900 w-100"
              >
                <RiHome7Fill className="text-primary" />
                <p className="text-white">Back Home</p>
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <div className="flex flex-col">
            <Link
              to="#"
              onClick={() => logout({ returnTo: window.location.origin })}
              className="d-flex text-2xl align-items-center gap-4 py-2 px-4 rounded-lg hover-bg-secondary-900 w-100"
            >
              <RiLogoutCircleRLine className="align-items-center text-white  " />
              <p className=" text-white">Log Out</p>
            </Link>
          </div>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="fixed xl:hidden bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50 "
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
}

export default Sidebar;
