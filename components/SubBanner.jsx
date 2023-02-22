import React from "react";

const SubBanner = () => {
  return (
    <div className=" h-[15rem] sm:h-[20rem] xl:h-[25rem] 2xl:h-[30rem]">
      <div className="flex h-full items-center justify-center bg-no-repeat bg-top bg-[url('/sub-banner.jpg')]">
        <h1 className="text-4xl uppercase font-semibold">
          {" "}
          read interesting things
        </h1>
      </div>
    </div>
  );
};

export default SubBanner;
