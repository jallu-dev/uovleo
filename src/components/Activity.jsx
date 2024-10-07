import React, { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

const Activity = ({ date, heading, imgsArr, content }) => {
  const [images, setImages] = useState([]);
  const [largeImg, setLargeImg] = useState(null);

  useState(() => {
    setImages(imgsArr);
    setLargeImg(null);
  }, []);

  const onImgClick = (img) => {
    setLargeImg(img);
  };

  const onLeftClick = () => {
    let newArr = [...images];
    const lastElement = newArr.pop();
    newArr.unshift(lastElement);
    setImages(newArr);
  };

  const onRightClick = () => {
    let newArr = [...images];
    const firstElement = newArr.shift();
    newArr.push(firstElement);

    setImages(newArr);
  };

  const onBackgroundClicked = (e) => {
    if (e.target.classList.contains("fixed")) {
      setLargeImg(null);
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row mb-8`}>
      <div className="w-24 shrink-0">{date}</div>
      <div className="flex ">
        <div className="flex items-center flex-col  pt-1">
          <div className="h-4 w-4 bg-amber-600 shrink-0 rounded-full "></div>
          <div className="w-1 m-2 bg-black h-full bg-gradient-to-b from-amber-600 to-amber-100"></div>
        </div>
        <div className="flex flex-col w-full md:w-4/5">
          <div className="ml-2 mb-5 lato-bold">{heading}</div>
          <div>
            <div className="hidden md:flex h-40 mb-3">
              {images.map((img, ind) => {
                return (
                  <img
                    src={img}
                    key={ind}
                    alt=""
                    className="h-full aspect-auto mr-1 cursor-pointer"
                    onClick={() => onImgClick(img)}
                  />
                );
              })}
            </div>
            {largeImg ? (
              <div
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-20 backdrop-blur-sm"
                onClick={(e) => {
                  onBackgroundClicked(e);
                }}
              >
                <img src={largeImg} className="max-h-[90%]" />
              </div>
            ) : (
              ""
            )}
            <div className="w-[100%] inline-block  md:hidden aspect-video rounded-lg overflow-hidden relative mb-2">
              <img src={images[0]} alt="" className="w-full aspect-video" />
            </div>
            <div className="w-1/2 mx-auto flex md:hidden justify-between mb-2">
              <FaChevronCircleLeft
                className="text-xl md:text-2xl  text-black hover:text-amber-600 cursor-pointer"
                onClick={onLeftClick}
              />
              <FaChevronCircleRight
                className="text-xl md:text-2xl  text-black hover:text-amber-600 cursor-pointer"
                onClick={onRightClick}
              />
            </div>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
