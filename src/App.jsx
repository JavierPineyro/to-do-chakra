import TaskForm from './components/TaskForm'
import TaskContent from './components/TaskContent'
import IconMode from './components/IconMode'
import { useState, useEffect } from 'react'
import {
  changeTaskDone,
  cleanDoneTask,
  storageGetItem,
  storageSetItem
} from './utils/utils'
import './App.css'

function App () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (storageGetItem()) setTasks(JSON.parse(storageGetItem()))
  }, [])

  useEffect(() => {
    storageSetItem(tasks)
  }, [tasks])

  const createTask = newTask => {
    setTasks([...tasks, newTask])
  }
  const handleToggle = task => {
    setTasks(changeTaskDone(tasks, task))
  }
  const deleteCompletedTask = () => {
    setTasks(cleanDoneTask(tasks))
  }

  return (
    <div className='App'>
      <IconMode />
      <h1>To-Do App</h1>
      <TaskForm deleteCompletedTask={deleteCompletedTask} createTask={createTask} />
      <TaskContent handleToggle={handleToggle} tasks={tasks} />
    </div>
  )
}

export default App
