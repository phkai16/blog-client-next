import { Button } from "flowbite-react";
import React from "react";
import Card from "./Card";

const CardList = ({ listArticles }) => {
  console.log(listArticles);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-10 pb-20 mx-auto">
        <div className="flex flex-wrap -m-4">
          {listArticles.length === 0 && (
            <div className="flex flex-col items-center justify-center mx-auto">
              <h3 className="mb-10 text-lg font-normal text-gray-600">
                Oop, no articles available...
              </h3>
              <img src="empty-box.png" alt="empty-box" className="h-32" />
            </div>
          )}
          {listArticles.map((item) => {
            return <Card article={item} key={item._id} />;
          })}
        </div>
        {/* <div className="my-14">
          <Button className="mx-auto w-40">Load More</Button>
        </div> */}
      </div>
    </section>
  );
};

export default CardList;
