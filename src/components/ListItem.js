import React from "react";

const ListItem = ({ todoList, id }) => {
  console.log(todoList);
  console.log(id);

  const ConsoleID = () => {
    console.log(todoList);
    console.log(id);
  };
  return (
    <div>
      <li>{todoList} </li>
      <button onClick={ConsoleID}>click</button>
    </div>
  );
};

export default ListItem;
