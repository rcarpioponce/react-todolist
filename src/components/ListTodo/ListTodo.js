import React from "react";
import Todo from "../Todo";

import "./ListTodo.scss";

export default function ListTodo(props) {
  const { allTodos,updateTodo,deleteTodo } = props;
  
  const getTodosByStatus = status => {
    let filterTodos = allTodos.filter((todo) => {
      return todo.status === status;
    });
    return filterTodos.length;
  }

  return (
    <div className="list-todo">
      <div className="list-header">
        <span>All: {allTodos.length}</span> 
        <span>Done: {getTodosByStatus(true)}</span> 
        <span>Todo: {getTodosByStatus(false)}</span>
      </div>
      {allTodos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
