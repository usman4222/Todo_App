import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HandleApi";



function App() {

  const [todos, setTodo] = useState([])
  const [text, setText] = useState("")
  const [isUpdate, setUpdate] = useState(false)
  const [todoId, setTodoId] = useState("")


  useEffect(() => {
    getAllTodo(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setUpdate(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="add"

            onClick={isUpdate
              ? () => updateTodo(text, todoId, setTodo, setText, setUpdate)
              : () => addTodo(text, setText, setTodo)}>
            {isUpdate ? "update" : "Add"}
          </div>
        </div>
        <div className="list">
        {Array.isArray(todos) && todos.length > 0 ? (
          todos.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteTodo={() => deleteTodo(item._id, setTodo)}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;
