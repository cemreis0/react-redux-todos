import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTask, toggleCompleted } from './taskSlice'

const Task = ({ task }) => {

  const dispatch = useDispatch()

  return (
    <li key={task.id} className={task.priority}>
      <button className="delete-btn" onClick={() => dispatch(removeTask(task.id))}>x</button>
      <div className="data">
        <span>
          <h3>{task.text}</h3>
          <p>{task.date}</p>
        </span>
        <button className="completed" onClick={() => dispatch(toggleCompleted(task.id))} >Completed: {task.completed ? "✅" : "❌"}</button>
      </div>
    </li>
  )
}

export default Task