import React from "react";

const SubBanner = () => {
  return (
    <div className=" h-[10rem] sm:h-[15rem] xl:h-[20rem] 2xl:h-[25rem]">
      <div className="flex h-full items-center justify-center bg-no-repeat bg-top bg-cover bg-[url('/sub-banner.jpg')]">
        <h1 className="text-4xl capitalize font-semibold text-gray-900">
          read interesting things
        </h1>
      </div>
    </div>
  );
};

export default SubBanner;
