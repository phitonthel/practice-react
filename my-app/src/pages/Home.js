import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchTasks from '../store/taskActionFetch'

// components
import TaskCard from '../components/TaskCard'

export default function Home() {
  const tasks = useSelector(state => state.taskReducer.tasks)
  const [filteredTask, setFilteredTask] = useState(tasks)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTasks('http://localhost:3000/tasks'))
  }, [])

  useEffect(() => {
    console.log('>>> useEffect for synchronous filtered task RUNNING');
    setFilteredTask(tasks)
  }, [tasks])

  const filter = (event) => {
    console.log('changes=', event.target.value);
    // filter
    let tempTasks = []
    tasks.forEach(element => {
      if (element.category === event.target.value || 'all' === event.target.value) {
        tempTasks.push(element)
      }
    })
    setFilteredTask(tempTasks)
  }

  return (
    <div>
      <h2>Home</h2>
      <form>
        <label>Choose a category:</label>
        <select name="category" id="category" onChange={filter}>
          <option value="all">all</option>
          <option value="backend">backend</option>
          <option value="frontend">frontend</option>
          <option value="mobile">mobile</option>
        </select><br/>
      </form>
      <div className="row justify-content-center">
        {
          filteredTask.length > 0 ? filteredTask.map((task) => {
            return (
              <TaskCard task={task} key={task.id}/>
            )
          }) : <div>Not Found</div>
        }
      </div>
      
    </div>
  )
}