import React, { useState } from 'react'

let nextId = 0;

const ToDoApp = () => {

const [todo, setTodo] = useState('')
const [todos, setTodos] = useState([])
const [editTodoItem, setEditTodoItem] = useState("")
const [isUpdateBtn, setIsUpdateBtn] = useState(false)

  const addTodo = () => {
    setTodos([...todos, {id : nextId++, todo : todo}])
    setTodo('')
    console.log(todos)
  }

  const editTodo = (item) => {
      setTodo(item.todo)
      setEditTodoItem(item)
      setIsUpdateBtn(true)
  }

  const updateTodo = () => {
      setTodos((prevtodo) => prevtodo.map((data)=> data.id === editTodoItem.id ? {id : editTodoItem.id , todo} : data))
      setTodo('')
      setIsUpdateBtn(false)
  }
  const deleteTodo = (item) => {
    setTodos(todos.filter((data)=> data.id !== item.id))
  }


  return (
    <>
    <div className="container">
      <div className="box">
        <h2>To-Do application</h2>
          <input 
          type="text"
          value={todo}
          onChange={(e)=>setTodo(e.target.value)}
          />
          { isUpdateBtn ? <button onClick={updateTodo}>Update</button> : <button onClick={addTodo}>Add</button>}

          <div className='all-To-Do'>
            {
            todos.map((item,index) => {
              return <>
                        <li key={index}>{item.todo}</li>
                        <button onClick={()=>editTodo(item)}>Edit</button>
                        <button onClick={()=>deleteTodo(item)}>Delete</button>
              </>
              
            })
            }
          </div>
      </div>

    </div>
    </>
  )
}

export default ToDoApp