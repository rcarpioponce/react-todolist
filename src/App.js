import React, { useState,useEffect } from "react";
import Container from "@material-ui/core/Container";
import AddForm from "./components/AddForm";
import ListTodo from "./components/ListTodo";

function App() {
  const [allTodos, setAllTodos] = useState([]);

  const addTodo = arrayTodos => {
    updateListTodo();
  };
  
  const updateTodo = (index, status) => {
    allTodos[index].status = status;
    updateListTodo();
  }
  
  const deleteTodo = index => {
    allTodos.splice(index,1);
    updateListTodo();
  }

  const updateListTodo = () => {
    let nuevoObjeto = [...allTodos];
    setAllTodos(nuevoObjeto);
    localStorage.setItem('TODOLIST', JSON.stringify(nuevoObjeto));
  }

  useEffect(() => {
    let nuevoObjeto = JSON.parse(localStorage.getItem('TODOLIST'));
    setAllTodos(nuevoObjeto);
  }, []);

  return (
    <Container maxWidth="sm">
      <h1>Todoist</h1>
      <AddForm allTodos={allTodos} addTodo={addTodo} />
      <ListTodo allTodos={allTodos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </Container>
  );
}

export default App;
