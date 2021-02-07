// import React from 'react'
import { useDispatch } from "react-redux";
import taskActionAdd from '../store/taskActionAdd'

export default function CreateTask () {
  const dispatch = useDispatch()

  const inputTask = (event) => {
    event.preventDefault()
    let title = document.getElementById("title").value
    let category = document.getElementById("category").value
    // validation
    if (title == "") {
      alert("Title must be filled out");
      return false;
    }
    // initialize payload
    let payload = {
      title,
      category
    }
    // dispatch
    console.log('INPUT=', title, category);
    dispatch(taskActionAdd(
      'http://localhost:3000/tasks',
      payload
    ))
  }

  return (
    <div>
      <h2>Create Task</h2>
      <form>
        <input type="text" id="title" name="title" placeholder="Title"/><br/>
        <label>Choose a category:</label>
        <select name="category" id="category">
          <option value="backend">backend</option>
          <option value="frontend">frontend</option>
          <option value="mobile">mobile</option>
        </select><br/>
        <button onClick={inputTask}>Create Task</button>
      </form> 
    </div>
  )
}