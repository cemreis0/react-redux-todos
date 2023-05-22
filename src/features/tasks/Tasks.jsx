import React from 'react'
import { useSelector } from 'react-redux'
import { taskSelect } from './taskSlice'
import Task from './Task'

const Tasks = () => {

  const tasks = useSelector(taskSelect)

  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default Tasks