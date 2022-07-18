import { useState, useEffect } from 'react'
import { useToast, Container, Heading, Stack, useColorMode } from '@chakra-ui/react'
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
  const { colorMode } = useColorMode()

  useEffect(() => {
    if (storageGetItem()) setTasks(JSON.parse(storageGetItem()))
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
    <Container backgroundColor={colorMode === 'light' ? 'gray.50' : 'blackAlpha.100'} maxH='100vh' minH='100vh' minWidth='container.sm' maxWidth='container.md' className='App'>
      <Stack gap={4} w='100%' alignItems='center' direction='column'>
        <Stack>
          <IconMode />
        </Stack>
        <Stack>
          <Heading
            bgGradient='linear(to-l, twitter.500, twitter.400)'
            bgClip='text'
            fontSize={['8xl', '6xl']}
            fontWeight='extrabold'
          >To-Do App
          </Heading>
        </Stack>
        <Stack>
          <TaskForm selectAllTasks={selectAllTasks} deleteCompletedTask={deleteCompletedTask} createTask={createTask} />
        </Stack>
        <Stack>
          <TaskContent handleToggle={handleToggle} tasks={tasks} />
        </Stack>
      </Stack>
    </Container>
  )
}

export default App
