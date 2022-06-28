import TaskForm from './components/TaskForm'
import TaskContent from './components/TaskContent'
import IconMode from './components/IconMode'
import './App.css'

import { useState, useEffect } from 'react'
import { Container, Heading } from '@chakra-ui/react'
import {
  changeTaskDone,
  cleanDoneTask,
  storageGetItem,
  storageSetItem
} from './utils/utils'

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
    <Container maxWidth='container.md' alignSelf='center' className='App'>
      <IconMode />
      <Heading>To-Do App</Heading>
      <TaskForm deleteCompletedTask={deleteCompletedTask} createTask={createTask} />
      <TaskContent handleToggle={handleToggle} tasks={tasks} />
    </Container>
  )
}

export default App
