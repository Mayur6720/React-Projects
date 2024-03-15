import {configureStore} from '@reduxjs/toolkit'
import ApiCallReducer from './apiSlice'

const Store = configureStore({
  reducer : {
      api : ApiCallReducer,
  }
})

export default Store