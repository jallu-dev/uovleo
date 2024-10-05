import React from "react";

const Activity = ({ date, heading, imgsArr, content }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-8">
      <div className="w-24 shrink-0">{date}</div>
      <div className="flex ">
        <div className="flex items-center flex-col  pt-1">
          <div className="h-4 w-4 bg-amber-600 shrink-0 rounded-full "></div>
          <div className="w-1 m-2 bg-black h-full bg-gradient-to-b from-amber-600 to-amber-100"></div>
        </div>
        <div className="flex flex-col w-4/5">
          <div className="ml-2 mb-5 lato-bold">{heading}</div>
          <div>
            <div className="flex h-40 mb-3">
              {imgsArr.map((img, ind) => {
                return (
                  <img
                    src={img}
                    key={ind}
                    alt=""
                    className="h-full aspect-auto mr-1"
                  />
                );
              })}
            </div>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
