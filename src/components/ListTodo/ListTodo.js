import React from "react";
export default function ListTodo(props) {
  const { allTodos } = props;
  return (
    <div>
      <ul>
        {allTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
