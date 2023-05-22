import React from 'react'
import Header from './features/tasks/Header'
import Tasks from './features/tasks/Tasks'
import AddTask from "./features/tasks/AddTask"

import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Tasks />
      <AddTask />
    </div>
  )
}

export default App
