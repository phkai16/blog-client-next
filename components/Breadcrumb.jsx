import { Breadcrumb } from "flowbite-react";
import React from "react";
import { HiHome } from "react-icons/hi";
const Breadcrumbs = ({ category, title }) => {
  return (
    <div className="container pt-5 mx-auto">
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className=" py-3 px-5 dark:bg-gray-900"
      >
        <Breadcrumb.Item href="/" icon={HiHome}>
          Home
        </Breadcrumb.Item>

        <Breadcrumb.Item className="capitalize">{category}</Breadcrumb.Item>
        <Breadcrumb.Item className="capitalize">{title}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
