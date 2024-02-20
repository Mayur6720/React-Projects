import { useState } from "react";
import "./App.css";

let nextId = 0;

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isUpdateBtn, setIsUpdateBtn] = useState(false);
  const [editText, setEditText] = useState("");


  // add a todo
  const handleAddTodo = () => {
    if (!todo.trim()) {
      alert("Can't be empty at all");
    } else {
      setTodos([...todos, { id: nextId++, todo, isTaskComplete: false }]);
      setTodo("");
    }
  };

  // Updating a todo
  const editData = (data, index) => {
    setTodo(todos[index].todo);
    setIsUpdateBtn(true);
    setEditText(data);
  };

  // Update a List
  const updateList = () => {
    if (todo) {
      setTodos((prevTodos) =>
        prevTodos.map((item) =>
          item.id === editText.id
            ? { id: editText.id, todo, isTaskComplete: false }
            : item
        )
      );
      setTodo("");
      setIsUpdateBtn(false);
    } else {
      alert("Input can't be empty");
    }
  };

  // Mark down for complete task
  const lineThrough = (index) => {
    if (!index.isTaskComplete) {
      index.isTaskComplete = true;
      setTodos([...todos]);
    } else {
      index.isTaskComplete = false;
      setTodos([...todos]);
    }
  };

  // Delete todo
  const deleteTodo = (data) => {
    setTodos([...todos.filter((todo) => todo.id !== data.id)]);
  };

  return (
    <>
      <div className="w-3/4 mx-auto mt-10">
        <div className="w-2/4 mx-auto">
          <h3 className="text-2xl mb-8">To Do Notes</h3>
          <input
            className="border-2"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          {isUpdateBtn === false ? (
            <button
              className="ml-2 border-2 px-2 bg-slate-900 text-slate-200 active:bg-slate-500 active:text-slate-900"
              onClick={handleAddTodo}
            >
              Add Task
            </button>
          ) : (
            <button
              className="ml-2 border-2 px-2 bg-slate-900 text-slate-200 active:bg-slate-500 active:text-slate-900"
              onClick={updateList}
            >
              Update Task
            </button>
          )}

          <div className="list-none">
            {todos &&
              todos.map((data, index) => (
                <>
                  <div
                    className="p-2 flex flex-row items-center justify-between bg-slate-400 mb-1 rounded mt-2"
                    key={data.id}
                  >
                    <li
                      className={`text-slate-700 font-semibold ${
                        data.isTaskComplete ? "line-through" : ""
                      }`}
                      key={data.id}
                    >
                      {data.todo}
                    </li>
                    <div>
                      <button
                        onClick={() => lineThrough(data, index)}
                        className="border-2 px-3 mr-2  bg-slate-900 text-slate-200 active:bg-slate-500 active:text-slate-900"
                      >
                        Mark Done
                      </button>
                      <button
                        onClick={() => editData(data, index)}
                        className="border-2 px-3 mr-2  bg-slate-900 text-slate-200 active:bg-slate-500 active:text-slate-900"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTodo(data, index)}
                        className="border-2 px-3 mr-2  bg-slate-900 text-slate-200 active:bg-slate-500 active:text-slate-900"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
