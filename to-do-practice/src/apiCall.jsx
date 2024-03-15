import { useDispatch, useSelector } from "react-redux"
import { fetchTodo } from "./reduxPractice/todoSlice"
import { useState } from "react"

const ApiCall = () => {

const dispatch = useDispatch()
const state = useState((state)=> state)

if(state.todo.isloading){
  return <h1>...Loading</h1>
}

  return (
    <>
    <h2> Api calling using redux</h2>
    <button onClick={()=>dispatch(fetchTodo())}>fetch</button>
    {
       state.todo.data &&
      state.todo.data.map((data)=>{
        return <li> {data.title}</li>
      })
    }
    </>
  )
}

export default ApiCall