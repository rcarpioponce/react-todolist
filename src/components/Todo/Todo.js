import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import "./Todo.scss";

export default function Todo(props) {
  const { todo: {todo, status}, index, updateTodo, deleteTodo } = props;

  const [done, setDone] = useState(status);

  const changeDone = () => {
    let newStatus = !done;
    setDone(newStatus);
    updateTodo(index,newStatus);
  };

  const onDeleteTodo = () => {
    if (window.confirm(`¿estas seguro(a) de eliminar: ${todo}?`)) {
      deleteTodo(index);
    }
  };

  return (
    <div className="todo">
      {!done && <span className="todo-text">{todo}</span>}
      {done && <span className="todo-text tachado">{todo}</span>}
      <div className="actions">
        <Button
          className="button-action"
          color="primary"
          variant="outlined"
          onClick={changeDone}
        >
          {!done && <Icon>check</Icon>}
          {done && <Icon>undo</Icon>}
        </Button>
        <Button
          className="button-action"
          color="secondary"
          variant="outlined"
          onClick={onDeleteTodo}
        >
          <Icon>delete</Icon>
        </Button>
      </div>
    </div>
  );
}
