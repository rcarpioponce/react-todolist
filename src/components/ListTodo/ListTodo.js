import React from "react";
import Todo from "../Todo";

import "./ListTodo.scss";

export default function ListTodo(props) {
  const { allTodos } = props;
  return (
    <div className="list-todo">
      <div class="list-header">
        <span>All: {allTodos.length}</span>
      </div>
      {allTodos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}
