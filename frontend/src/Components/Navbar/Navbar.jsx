import React from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "../DarkMode";
import { Link } from "react-router-dom";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/home",
  },
  {
    id: 2,
    name: "Feedback",
    link: "/feedbackforms",
  },
  {
    id: 3,
    name: "Admin Login",
    link: "/login",
  },
  {
    id: 4,
    name: "Logout",
    link: "/login",
  },
 
];
const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className="relative z-[9] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="" className="h-10" />
            <p className="text-3xl">
              Zidio Development <span className="font-bold">Group - 6</span>
            </p>
          </div>
          {/* Desktop Menu section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => {
                return (
                  <li key={id} className="py-4">
                    <Link
                      to={link}
                      className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              {/* Darkmode feature */}
              <DarkMode />
            </ul>
          </nav>

          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer "
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
