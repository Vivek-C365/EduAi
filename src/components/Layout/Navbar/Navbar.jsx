import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import B_logo_black from "../../../assets/eduai.png"; // Ensure correct import
import { Link, NavLink } from "react-router-dom";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  const menuItems = [
    { label: "Overview", link: "#" },
    { label: "My Tasks", link: "/blog" },
    { label: "A.I Buddy", link: "#" },
    { label: "Calender", link: "#" },
    { label: "Analytics", link: "#" },
    { label: "About EDUAI", link: "#" },
  ];

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menuItems.map((item, index) => (
        <Typography
          key={index}
          as="li"
          variant="small"
          color="blue-gray"
          className="flex items-center gap-x-2 p-1 font-medium"
        >
          <NavLink to={item.link}>{item.label}</NavLink>
        </Typography>
      ))}
    </ul>
  );

  return (
    <Navbar className="backdrop-saturate-200 dark:bg-transparent dark:border-none dark:backdrop-blur-[164px] dark:text-white sticky top-2 z-40 mx-auto max-w-[1450px] px-4 py-2 lg:px-8 lg:py-4 text-dimblack">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to={"/"}>
          {/* Corrected class for dark mode inversion */}
          <img
            src={B_logo_black}
            alt="Brand Logo"
            className="w-10 filter invert dark:invert-0"
          />
        </Link>
        <div className="hidden lg:block flex bg[#1F1F1F] w-50%">{navList}</div>
        <div className="flex items-center gap-x-3">
          <NavLink to="/Login">
            <Button
              variant="text"
              size="sm"
              className="hidden dark:text-white lg:inline-block"
            >
              <span>Log In</span>
            </Button>
          </NavLink>
          <NavLink to="/SignUp">
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Sign up</span>
            </Button>
          </NavLink>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center justify-center gap-x-1 dark:text-white">
            <NavLink to="/Login">
              <Button fullWidth variant="text" size="sm">
                <span>Log In</span>
              </Button>
            </NavLink>
            <NavLink to="/SignUp">
              <Button fullWidth variant="gradient" size="sm">
                <span>Sign Up</span>
              </Button>
            </NavLink>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarDefault;
