import { Stack } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import TaskItem from './TaskItem'

export default function TaskContent ({ tasks, handleToggle, deleteSingleTask }) {
  return (
    <Stack maxW='2xl' gap={4} direction='column'>
      {
        tasks.map(task =>
          <AnimatePresence key={task.id}>
            <TaskItem key={task.id} task={task} deleteSingleTask={deleteSingleTask} handleToggle={handleToggle} />
          </AnimatePresence>
        )
      }
    </Stack>
  )
}
