import { useState } from "react";

export function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <input 
      id="title" 
      type="text" 
      placeholder="title"
      onChange={function(e) {
         const value = e.target.value;
         setTitle(value);
      }}
      ></input> <br />
      <input
        id="description"
        type="text"
        placeholder="description"
        onChange={function(e) {
            const value = e.target.value;
            setDescription(value);
         }}
      ></input>
      <br />
      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
                "Content-type": "application/json"
            }
          }).then(async function (res) {
            const json = await res.json();
            alert("todo added");
          });
        }}
      >
        Add a task
      </button>
    </>
  );
}
