/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function Todos({ todos }) {
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  return <div>
      
      {todos.map(function (todo) {
        return <div key={todo.id}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Mark as Complete"}
            </button>
          </div>
      })}
    </div>
}

