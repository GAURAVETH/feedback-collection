import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import DarkMode from "../DarkMode";

const Sidebar = () => {
  return (
    <>
      <div className=" flex gap-4 absolute right-10 top-5">
        <h1>Dark Mode</h1>
        <DarkMode />
      </div>
      <div className="w-64 h-screen bg-white dark:bg-zinc-900 shadow-md">
        <div className="flex flex-col items-center py-5">


          <div className=" bg-purple-500 py-2 rounded-full transition-colors duration-500">
            <img src={Logo} alt="" className="h-10" />
          </div>

          <h1 className="  text-xl font-semibold hover:text py-5 transition-colors duration-500">
            DASHBOARD
          </h1>
        </div>
        <div className="my-10"></div>
        <ul className="flex flex-col items-center gap-8">
          <SidebarItem icon="fas fa-home" text="Home" to="/dashboard" />
          <SidebarItem icon="fas fa-user" text="User" to="/user" />
          <SidebarItem icon="fas fa-wallet" text="Product" to="/product" />
          <SidebarItem icon="fas fa-chart-bar" text="Client" to="/client" />
          <SidebarItem icon="fas fa-tasks" text="Website" to="/website" />
          <SidebarItem icon="fas fa-cog" text="Settings" to="/settings" />
          <SidebarItem icon="fas fa-question-circle" text="Help" to="/help" />
          <SidebarItem icon="fas fa-sign-out-alt" text="Log out" to="/logout" />
        </ul>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, text, to }) => {
  return (
    <li className="text-xl font-semibold hover:text-primary py-2 border-b-2 border-transparent hover:border-secondary transition-colors duration-500">
      <i className={icon}></i>
      <Link to={to}>{text}</Link>
    </li>
  );
};

export default Sidebar;
