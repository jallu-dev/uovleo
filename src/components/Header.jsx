import React, { useEffect } from "react";
import leoLogo from "./../assets/leo-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/") {
      setActiveTab("home");
    } else {
      setActiveTab(location.pathname.split("/")[1]);
    }
  }, [location]);

  const onLinkClick = (e) => {
    setActiveTab(e.target.id);

    if (e.target.id == "home") {
      navigate("/");
    } else {
      navigate("/" + e.target.id);
    }
  };

  return (
    <div>
      <div className="sm:h-40 px-10 flex flex-col sm:flex-row justify-between items-center bg-gradient-to-b sm:bg-gradient-to-r from-amber-50 to-yellow-600">
        <img src={leoLogo} alt="leo-ouv" className="h-24 sm:h-full" />
        <h1 className="uppercase text-xl sm:text-4xl text-center font-semibold text-black lato-bold">
          leo club of university of vavuniya
        </h1>
      </div>

      <div className="bg-black text-amber-100 font-semibold tracking-wide flex">
        <div
          className={`${
            activeTab == "home" ? "bg-amber-300 text-black " : ""
          } hover:bg-amber-300 cursor-pointer py-2 transition-colors hover:text-black lato-regular w-28 text-center text-sm md:text-lg`}
          id="home"
          onClick={(e) => onLinkClick(e)}
        >
          Home
        </div>
        <div
          className={`${
            activeTab == "members" ? "bg-amber-300 text-black " : ""
          } hover:bg-amber-300  cursor-pointer py-2 transition-colors hover:text-black lato-regular w-28 text-center text-sm md:text-lg`}
          id="members"
          onClick={(e) => onLinkClick(e)}
        >
          Members
        </div>
        <div
          className={`${
            activeTab == "activities" ? "bg-amber-300 text-black " : ""
          } hover:bg-amber-300  cursor-pointer py-2 transition-colors hover:text-black lato-regular w-28 text-center text-sm md:text-lg`}
          id="activities"
          onClick={(e) => onLinkClick(e)}
        >
          Activities
        </div>{" "}
        <div
          className={`${
            activeTab == "contact" ? "bg-amber-300 text-black " : ""
          } hover:bg-amber-300 cursor-pointer  py-2 transition-colors hover:text-black lato-regular w-28 text-center text-sm md:text-lg`}
          id="contact"
          onClick={(e) => onLinkClick(e)}
        >
          Contact
        </div>
      </div>
      <div
        // style={{ height: "3px" }}
        className="border-y-4 border-b-yellow-600 border-t-amber-300"
      ></div>
    </div>
  );
};

export default Header;
