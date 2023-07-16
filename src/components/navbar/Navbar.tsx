import Link from "next/link";
import React from "react";
const Links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Posts",
    url: "/posts",
  },
  {
    id: 4,
    title: "Create",
    url: "/",
  },
  {
    id: 5,
    title: "Notifications",
    url: "/",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 6,
    title: "Profile",
    url: "/:id",
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between shadow-lg shadow-violet-950">
      <Link href="/">
        <h1 className="text-2xl font-bold border-t-4 border-2 border-white rounded-tr-full  rounded-bl-full py-2 px-6 ">
          Connect
        </h1>
      </Link>
      <div>
        <ul className="flex flex-row">
          {Links.map((link) => (
            <Link key={link.id} href={link.url}>
              <li className="ml-7 text-lg  hover:cursor-pointer hover:text-white ">
                {link.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
