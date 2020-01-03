import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import AddForm from "./components/AddForm";
import ListTodo from "./components/ListTodo";

function App() {
  const [allTodos, setAllTodos] = useState([]);

  const addTodo = arrayTodos => {
    setAllTodos(arrayTodos);
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
