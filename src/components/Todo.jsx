import React from "react";
import { Button } from "../ui";

const Todo = ({ title, completed,buttonClick }) => {
  return (
    <div className={`flex items-center justify-between  p-2 border-b `}>
      <h1 className={`text-2xl ${completed ? "line-through text-gray-500" : ""}`}>{title}</h1>
      <Button label={"Done"}size="small" onClick={buttonClick}/>
    </div>
  );
};

export default Todo;
