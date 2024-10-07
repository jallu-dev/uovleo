import React, { useState } from "react";
import heroImage from "./../assets/hero-image.jpg";
import img1 from "./../assets/img1.jpg";
import img2 from "./../assets/img2.jpg";
import img3 from "./../assets/img3.jpg";
import img4 from "./../assets/img4.jpg";
import img5 from "./../assets/img5.jpg";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Home = () => {
  const [images, setImages] = useState([img1, img2, img3, img4, img5]);

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
  return (
    <div>
      <div className="mt-5 relative">
        <div className="absolute z-50 w-full h-full flex justify-center items-center">
          <h1 className="text-amber-100 text-4xl md:text-6xl lg:text-8xl dancing-script text-center">
            Welcome to Leo Club
          </h1>
        </div>
        <div className="relative before:w-full before:h-full before:bg-black before:opacity-60 before:absolute before:inline-block">
          <img
            src={heroImage}
            alt="hero image"
            className="h-48 sm:h-auto mx-auto bg-white"
          />
        </div>
      </div>
      <div className="my-16 flex flex-col justify-between items-center gap-4">
        <div className="flex flex-col justify-between  items-center w-[90%] md:w-[60%] lg:w-[40%] p-4 border-t border-t-amber-600">
          <h1 className="text-center text-xl md:text-3xl mb-3">Vision</h1>
          <p className="inline-block w-full text-sm md:text-lg text-center">
            Empowering leaders to drive positive change
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-[90%] md:w-[60%] lg:w-[40%] p-4 border-b border-b-amber-600">
          <h1 className="text-center text-xl md:text-3xl mb-3">Mission</h1>
          <p className="inline-block w-full text-sm md:text-lg text-center">
            To nurture compassionate leaders through transformative experiences,
            empowering them to address real-world challenges, uplift
            communities, and inspire others to take action.
          </p>
        </div>
      </div>
      <div className="mt-16 px-3 flex justify-center items-center">
        <div className="w-1/4 aspect-video rounded-lg overflow-hidden ">
          <img
            src={images[0]}
            alt=""
            className="w-full  blur-[1px] aspect-video"
          />
        </div>
        <div className="w-1/2 aspect-video rounded-lg overflow-hidden relative ">
          <img src={images[1]} alt="" className="w-full aspect-video" />
        </div>
        <div className="w-1/4 aspect-video rounded-lg overflow-hidden ">
          <img
            src={images[2]}
            alt=""
            className="w-full blur-[1px]  aspect-video"
          />
        </div>
      </div>
      <div className="w-1/2 mx-auto p-3 flex justify-between">
        <FaChevronCircleLeft
          className="text-xl md:text-2xl  text-black hover:text-amber-600 cursor-pointer"
          onClick={onLeftClick}
        />
        <FaChevronCircleRight
          className="text-xl md:text-2xl  text-black hover:text-amber-600 cursor-pointer"
          onClick={onRightClick}
        />
      </div>
    </div>
  );
};

export default Home;
