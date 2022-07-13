import { useState, useEffect } from 'react'
import { useToast, Container, Heading } from '@chakra-ui/react'
import {
  changeTaskDone,
  cleanDoneTask,
  selectAll,
  storageGetItem,
  storageSetItem
} from './utils/utils'
import TaskForm from './components/TaskForm'
import TaskContent from './components/TaskContent'
import IconMode from './components/IconMode'
import './App.css'

function App () {
  const [tasks, setTasks] = useState([])
  const toast = useToast()

  useEffect(() => {
    if (storageGetItem()) setTasks(JSON.parse(storageGetItem()))
    /* Quedaria mejor asi?
    const response = storageGetItem()
    if(response) setTasks(JSON.parse(response))

    */
  }, [])

  useEffect(() => {
    storageSetItem(tasks)
  }, [tasks])

  const createTask = newTask => {
    setTasks([...tasks, newTask])
    toast({
      title: 'Done',
      position: 'bottom-left',
      description: 'Task created',
      status: 'success',
      duration: 5000,
      isClosable: true
    })
  }
  const handleToggle = task => {
    setTasks(changeTaskDone(tasks, task))
  }
  const deleteCompletedTask = () => {
    setTasks(cleanDoneTask(tasks))
    toast({
      title: 'Done',
      position: 'bottom-left',
      description: 'Task deleted',
      status: 'success',
      duration: 5000,
      variant: 'subtle',
      isClosable: true
    })
  }
  const selectAllTasks = (value = true) => {
    setTasks(selectAll(tasks, value))
  }

  return (
    <Container maxWidth='container.md' alignSelf='center' className='App'>
      <IconMode />
      <Heading>To-Do App</Heading>
      <TaskForm selectAllTasks={selectAllTasks} deleteCompletedTask={deleteCompletedTask} createTask={createTask} />
      <TaskContent handleToggle={handleToggle} tasks={tasks} />
    </Container>
  )
}

export default App
