import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { HiPhotograph, HiOutlineLogout } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { RiLinksFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

import { HiMenuAlt2 } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";

export default function AdminSidebar() {
  const router = useRouter();
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="fixed lg:hidden top-0 left-0 p-3 w-full backdrop-blur-lg">
        <HiMenuAlt2
          size={50}
          className="text-primary-color cursor-pointer"
          onClick={() => {
            setMenu(true);
          }}
        />
      </div>

      <div
        className={` ${
          !menu && "hidden lg:block"
        }  shadow-sm fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-white`}
      >
        <AiFillCloseCircle
          className="absolute text-primary-color top-2 right-2 lg:hidden cursor-pointer"
          size={34}
          onClick={() => {
            setMenu(false);
          }}
        />
        <div>
          <div className="p-2.5 mt-1 flex items-center">
            <h1 className="font-bold text-3xl text-gray-700 ml-3">DASHBOARD</h1>
          </div>
          <hr className="border border-gray-500 mb-6" />
        </div>
        <Link href="/admin/dashboard">
          <div
            className={`p-2.5 mt-1 flex items-center text-gray-600 rounded-md ${
              router.asPath === "/admin/dashboard" && "bg-dark-light-blue"
            }  hover:bg-gray-100 px-4 duration-300 cursor-pointer`}
          >
            <AiFillHome />
            <span className="text-[15px] ml-2  font-bold">Home</span>
          </div>
        </Link>
        <Link href="/admin/banner">
          <div
            className={`p-2.5 mt-1 flex items-center text-gray-600 rounded-md ${
              router.asPath === "/admin/banner" && "bg-dark-light-blue"
            }  hover:bg-gray-100 px-4 duration-300 cursor-pointer`}
          >
            <HiPhotograph />
            <span className="text-[15px] ml-2  font-bold">Banners</span>
          </div>
        </Link>
        <Link href="/admin/team">
          <div
            className={`p-2.5 mt-1 flex items-center text-gray-600 rounded-md ${
              router.asPath === "/admin/team" && "bg-dark-light-blue"
            }  hover:bg-gray-100 px-4 duration-300 cursor-pointer`}
          >
            <FaUsers />
            <span className="text-[15px] ml-2  font-bold">Team</span>
          </div>
        </Link>
        <Link href="/admin/testimonials">
          <div
            className={`p-2.5 mt-1 flex items-center text-gray-600 rounded-md ${
              router.asPath === "/admin/testimonials" && "bg-dark-light-blue"
            }  hover:bg-gray-100 px-4 duration-300 cursor-pointer`}
          >
            <MdReviews />
            <span className="text-[15px] ml-2  font-bold">Testimonials</span>
          </div>
        </Link>
        <Link href="/admin/socialLinks">
          <div
            className={`p-2.5 mt-1 flex items-center text-gray-600 rounded-md ${
              router.asPath === "/admin/socialLinks" && "bg-dark-light-blue"
            }  hover:bg-gray-100 px-4 duration-300 cursor-pointer`}
          >
            <RiLinksFill />
            <span className="text-[15px] ml-2  font-bold">Social Links</span>
          </div>
        </Link>
        <div className="p-2.5 mt-1 flex items-center text-gray-600 rounded-md hover:bg-gray-100 px-4 duration-300 cursor-pointer">
          <HiOutlineLogout />
          <span className="text-[15px] ml-2  font-bold">Logout</span>
        </div>
      </div>
    </>
  );
}
