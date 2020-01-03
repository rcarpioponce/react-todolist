import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import "./Todo.scss";

export default function Todo(props) {
  const { todo } = props;

  const [done, setDone] = useState(false);

  const changeDone = () => {
    let newValDone = !done;
    setDone(newValDone);
  };

  const deleteTodo = () => {
    if (window.confirm(`¿estas seguro(a) de eliminar: ${todo}?`)) {
      console.log(`${todo} eliminado correctamente`);
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
          onClick={deleteTodo}
        >
          <Icon>delete</Icon>
        </Button>
      </div>
    </div>
  );
}
