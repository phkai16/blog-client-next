import { Tabs } from "flowbite-react";
import React from "react";
import CardList from "./CardList";

const TabsGroup = ({ categoryList, articleList }) => {
  return (
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
              className="capitalize"
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
  );
};

export default TabsGroup;
