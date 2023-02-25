import { Carousel } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <div className=" h-[15rem] sm:h-[20rem] xl:h-[25rem] 2xl:h-[30rem]">
      <Carousel>
        <div className="flex h-full items-center justify-center dark:text-white bg-no-repeat bg-center bg-[url('/banner-04.jpg')]">
          <h1 className="text-4xl capitalize font-semibold text-gray-800">
            Share your posts
          </h1>
        </div>
        <div className="flex h-full items-center justify-center dark:text-white bg-no-repeat bg-center bg-[url('/banner-06.jpg')]">
          <h1 className="text-4xl capitalize font-semibold text-gray-800">
            Read many good articles
          </h1>
        </div>
        <div className="flex h-full items-center justify-center dark:text-white bg-no-repeat bg-center bg-[url('/banner-07.jpg')]">
          <h1 className="text-4xl capitalize font-semibold text-gray-800">
            Many good genres
          </h1>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
