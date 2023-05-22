import React, { useState } from 'react'
import { addTask } from './taskSlice'
import { useDispatch } from 'react-redux'

const AddTask = () => {

  const dispatch = useDispatch()
  const [text, setText] = useState("")
  const [date, setDate] = useState("")
  const [priority, setPriority] = useState("")

  return (
    <div className="addtask">
      <hr />
      <h3>Add Task</h3>
      <input type="text" placeholder="Enter text..." onChange={(e) => setText(e.target.value)} />
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <select className="priority" defaultValue="placeholder"onChange={(e) => setPriority(e.target.value)}>
        <option value="placeholder" disabled>Set Priority...</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={() => dispatch(addTask({
        id: Math.floor(Math.random() * 1000),
        text: text,
        date: date,
        priority: priority,
        completed: false
        }))}>Add Task</button>
    </div>
  )
}

export default AddTask