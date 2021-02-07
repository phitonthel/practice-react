import React from 'react'
import { useDispatch } from 'react-redux'
import deleteTask from '../store/taskActionDelete'

export default function TaskCard (props) {
  const dispatch = useDispatch()

  const deleteTaskButton = (id) => {
    console.log('>>> deleteTask ID=', id);
    dispatch(deleteTask(
      id,
      `http://localhost:3000/tasks/${id}`
    ))
  }

  return (
    <div className="card" style={{"width": "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">Title: {props.task.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Category: {props.task.category}</h6>
        <button className="btn btn-danger" onClick={() => {deleteTaskButton(props.task.id)}}>Delete</button>
      </div>
    </div>
  )
}