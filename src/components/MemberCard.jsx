import React from "react";
import leoLogoGray from "./../assets/leo-logo-gray.png";

const MemberCard = ({ img, position, name, email, tel, style, small }) => {
  return (
    <div
      className={`flip-card ${
        small
          ? "w-24 h-24 md:w-32 md:h-32 lg:w-42 lg:h-42"
          : "w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
      }  rounded-2xl  ${style}`}
    >
      <div className="flip-card-inner h-full w-full flex justify-center relative  shadow-2xl">
        <div className="flip-card-front h-full w-full bg-black flex rounded-3xl border-2 border-amber-600">
          <img
            src={img}
            className="h-full aspect-square bg-black overflow-hidden rounded-2xl border-2 border-amber-600"
          />
        </div>
        <div className="uppercase absolute bg-black bg-opacity-60 text-white front-title w-full bottom-0 p-1 text-center rounded-b-3xl text-sm">
          {position}
        </div>
        <div
          className={`flip-card-back ${
            small ? "h-24  md:h-32 lg:h-42" : "h-32 md:h-40 lg:h-48"
          } w-60 h-48 rounded-2xl border-2 border-amber-600 py-3 bg-amber-100`}
        >
          {small ? (
            ""
          ) : (
            <img src={leoLogoGray} className="w-16 mx-auto" alt="" />
          )}

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
