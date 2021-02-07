import { applyMiddleware, combineReducers, createStore } from 'redux'
import taskReducer from './taskReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers ({
  taskReducer
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store