import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-32 bg-zinc-900 mt-10 flex flex-col justify-center items-center text-white gap-3">
      <div className="flex justify-center gap-3">
        <a
          href="https://www.facebook.com/profile.php?id=61553609166490&mibextid=ZbWKwL"
          target="_blank"
        >
          <FaFacebook className="text-2xl text-sky-600" />
        </a>
        <a href="https://www.instagram.com/uov_leos" target="_blank">
          <FaInstagram className="text-2xl text-rose-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/leo-club-of-university-of-vavuniya-7544a32a0"
          target="_blank"
        >
          <FaLinkedin className="text-2xl text-sky-600" />
        </a>
      </div>
      <h1 className="text-amber-200">
        Copyright &copy; 2024 Leo Club of University of Vavuniya.
      </h1>
    </div>
  );
};

export default Footer;
