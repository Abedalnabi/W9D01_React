import React from "react";

const List = (props) => {
  console.log(props);
  const { todoList } = props;
  return (
    <>
      <div className="todoList">
        <ul>
          {todoList.map((ele, i) => {
            return <li></li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default List;
