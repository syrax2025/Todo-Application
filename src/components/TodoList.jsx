import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Todo } from "../components";
import { setTodoName, setTodos } from "../redux";
import { Button, InputBox } from "../ui";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const todoName = useSelector((state) => state.todo.todoName);
  const dispatch = useDispatch();

  const loginStatus = useSelector((state)=>{
      return state.userLoggedIn.loginStatus
    })

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(setTodos(newTodos)); 
    dispatch(setTodoName(""));
  };

  const addTodo = (todoName) =>{
    if (todoName.trim() !== "") {
      const newTodo = {
        id: todos.length + 1, 
        title: todoName,
        completed: false,
      };
      dispatch(setTodos([...todos, newTodo])); 
      dispatch(setTodoName(""))
    }
  }

  useEffect(()=>{
    if(!loginStatus)
    {
      navigate("/signin")
    }
  },[loginStatus]);



  return (
    <>
      <div>
        <div className="h-56 p-6 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center p-4">
            <InputBox 
              placeholder="Enter Todo"
              onChange={(e) => dispatch(setTodoName(e.target.value))}
              size="small"
              extraClasses="mr-4"
              value={todoName}
            />
            <Button
              label="Add"
              onClick={() => {
                addTodo(todoName);
              }}
              size="small"
            />
          </div>
        </div>
        <div className="p-4">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              completed={todo.completed}
              title={todo.title}
              buttonClick={() => handleButtonClick(todo.id)} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
