import React from "react";
import ListItem from "./ListItem";

const List = ({ todoList }) => {
  const array = todoList.map((ele, i) => {
    return <ListItem key={i} todoList={ele.todo} id={ele.id} />;
  });
  return (
    <>
      <ul>{array}</ul>
    </>
  );
};

export default List;
