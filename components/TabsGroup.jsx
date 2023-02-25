import { Tabs } from "flowbite-react";
import React from "react";
import CardList from "./CardList";

const TabsGroup = ({ categoryList, articleList }) => {
  return (
    <div className="container px-4 mx-auto">
      <Tabs.Group
        aria-label="Tabs with underline"
        style="underline"
        className="container mx-auto pt-5"
      >
        {categoryList &&
          categoryList.map((item, index) => {
            return (
              <Tabs.Item
                active={index === 0 && true}
                title={item.name}
                key={item._id}
              >
                <CardList
                  listArticles={articleList.filter((i) =>
                    i.categories.includes(item.name)
                  )}
                />
              </Tabs.Item>
            );
          })}
      </Tabs.Group>
    </div>
  );
};

export default TabsGroup;
