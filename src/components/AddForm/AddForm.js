import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

import "./AddForm.scss";

export default function AddForm(props) {
  const { allTodos, addTodo } = props;

  const [todo, setTodo] = useState("");

  const onChange = event => {
    setTodo(event.target.value);
  };

  const onAdd = event => {
    event.preventDefault();
    if (todo !== "" && allTodos) {
      let arrTodos = [];
      arrTodos = allTodos;
      arrTodos.push(todo);
      addTodo(arrTodos);
      setTodo("");
    }
  };

  return (
    <form
      className="form"
      noValidate
      autoComplete="off"
      onChange={onChange}
      onSubmit={event => onAdd(event)}
    >
      <TextField id="input-add-todo" label="Todo" value={todo} />
      <Button
        className="button-add"
        variant="contained"
        color="primary"
        type="submit"
      >
        ADD
      </Button>
    </form>
  );
}
