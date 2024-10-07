import React from "react";
import leoLogoGray from "./../assets/leo-logo-gray.png";

const MemberCard = ({ img, position, name, email, tel, style, large }) => {
  return (
    <div
      className={`flip-card ${
        large
          ? "md:w-48 md:h-48 lg:w-56 lg:h-56"
          : "md:w-40 md:h-40 lg:w-48 lg:h-48"
      } h-64 rounded-2xl w-[90%] ${style}`}
    >
      <div className="flip-card-inner h-full w-full flex flex-col md:flex-row justify-center relative shadow-md md:shadow-2xl rounded-2xl  md:rounded-none md:border-0 py-2 md:py-0 bg-gradient-to-b from-amber-50 to-amber-100 md:bg-none">
        <div className="flip-card-front h-32 md:h-full w-full md:bg-black flex rounded-3xl md:border-2 md:border-amber-600">
          <img
            src={img}
            className="h-full aspect-square mx-auto bg-black overflow-hidden rounded-full md:rounded-2xl md:border-2 md:border-amber-600"
          />
        </div>
        <div className="hidden md:inline-block uppercase md:absolute md:bottom-0 bg-black bg-opacity-60 text-white front-title w-full p-1 text-center rounded-b-3xl text-sm">
          {position}
        </div>
        <div
          className={`flip-card-back ${
            large ? "md:h-48 lg:h-56" : "md:h-40 lg:h-48"
          } w-full h-full md:w-60 rounded-2xl md:border-2 md:border-amber-600 py-3 bg-transparent md:bg-amber-100`}
        >
          <img
            src={leoLogoGray}
            className="hidden md:inline-block w-16 mx-auto"
            alt=""
          />

          <h1 className="lato-bold uppercase">{position}</h1>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm">{email}</p>
          <p className="text-sm">{tel || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
