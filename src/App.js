import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import AddForm from "./components/AddForm";
import ListTodo from "./components/ListTodo";

function App() {
  const [allTodos, setAllTodos] = useState([]);

  const addTodo = arrayTodos => {
    let nuevoObjeto = [...arrayTodos];
    setAllTodos(nuevoObjeto);
  };

  return (
    <Container maxWidth="sm">
      <h1>Todoist</h1>
      <AddForm allTodos={allTodos} addTodo={addTodo} />
      <ListTodo allTodos={allTodos} />
    </Container>
  );
}

export default App;
