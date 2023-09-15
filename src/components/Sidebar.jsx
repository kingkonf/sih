import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.jpeg";
import { UilSignOutAlt } from "@iconscout/react-unicons"; // You have already imported it here
import { SidebarData } from "../Data/Data";
import { motion } from "framer-motion";
import { UilEstate, UilClipboardAlt, UilUsersAlt, UilChart } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  };

  const SidebarData = [
    {
      icon: UilEstate,
      heading: "Dashboard",
    },
    {
      icon: UilClipboardAlt,
      heading: "About Us",
    },
    {
      icon: UilUsersAlt,
      heading: "Contact US",
    },
    {
      icon: UilChart,
      heading: 'Analytics',
    },
  ];

  return (
    <>
      {/* <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
        <UilBars />
      </div> */}
      <motion.div className='sidebar' variants={sidebarVariants} animate={window.innerWidth <= 768 ? `${expanded}` : ''}>
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        <div className="menu">
  {SidebarData.map((item, index) => {
    return (
      <Link
        to={`/${item.heading.toLowerCase().replace(" ", "")}`}
        className={selected === index ? "menuItem active" : "menuItem"}
        key={index}
        onClick={() => setSelected(index)}
      >
        
        <item.icon />
        <span>{item.heading}</span>
      </Link>
    );
  })}
  {/* signoutIcon */}
  <div className="menuItem">
    <UilSignOutAlt />
  </div>
</div>
      </motion.div>
    </>
  );
};

export default Sidebar;
