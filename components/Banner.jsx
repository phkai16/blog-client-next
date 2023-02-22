import { Carousel } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <div className=" h-[15rem] sm:h-[20rem] xl:h-[25rem] 2xl:h-[30rem]">
      <Carousel>
        <div className="flex h-full items-center justify-center dark:text-white bg-no-repeat bg-center bg-[url('/banner-04.jpg')]">
          <h1 className="text-4xl uppercase font-semibold">
            {" "}
            Share your posts
          </h1>
        </div>
        <div className="flex h-full items-center justify-center dark:text-white bg-no-repeat bg-center bg-[url('/banner-06.jpg')]">
          <h1 className="text-4xl uppercase font-semibold">
            {" "}
            Read many good articles
          </h1>
        </div>
        <div className="flex h-full items-center justify-center dark:text-white bg-no-repeat bg-center bg-[url('/banner-07.jpg')]">
          <h1 className="text-4xl uppercase font-semibold">
            {" "}
            Many good genres
          </h1>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
