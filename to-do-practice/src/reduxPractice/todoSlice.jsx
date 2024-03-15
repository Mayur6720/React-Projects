import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";

export const fetchTodo = createAsyncThunk( "fetchTodos" , async ()=> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")
  return  response.json()
} )


const todoSlice = createSlice({
  name : "todo",
  initialState : {
    data : null,
    isLoading : false,
    isError : false
  },
  extraReducers : (builder) => {
    builder.addCase(isRejected , (state, action)=> {
      state.isLoading = false;
      state.isError = true;
    })
    builder.addCase(isPending , (state, action)=> {
      state.isLoading = true;
    })
    builder.addCase(isFulfilled , (state, action)=> {
      state.data = action.payload;
      state.isLoading = false;
    })
  }
})

export default todoSlice.reducer