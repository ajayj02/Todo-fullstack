import { useEffect, useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  
  return (
    <>
      <AddTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
