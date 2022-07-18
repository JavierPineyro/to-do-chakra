import { Stack } from '@chakra-ui/react'
import TaskItem from './TaskItem'

export default function TaskContent ({ tasks, handleToggle }) {
  return (
    <Stack maxW='2xl' gap={4} direction='column'>
      {
        tasks.map(task =>
          <TaskItem task={task} handleToggle={handleToggle} key={task.id} />
        )
      }
    </Stack>
  )
}
