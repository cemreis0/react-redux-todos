import { createSlice } from "@reduxjs/toolkit"

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: [
    ]
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload)
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(item => item.id !== action.payload)
    },
    toggleCompleted: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      task.completed = !task.completed
    }
  }
})

export const taskSelect = state => state.task.tasks

export const { addTask, removeTask, toggleCompleted } = taskSlice.actions

export default taskSlice.reducer