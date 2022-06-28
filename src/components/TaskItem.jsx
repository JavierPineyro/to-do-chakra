import { useColorMode } from '@chakra-ui/react'

export default function TaskItem ({ task, handleToggle }) {
  const { colorMode } = useColorMode()
  const colorTaskDone = colorMode === 'light' ? '#666' : '#aaa'
  return (
    <div>
      {
        task.done
          ? <span style={{ textDecoration: 'line-through', color: colorTaskDone }}>{task.content}</span>
          : task.content
      }
      <input onChange={() => handleToggle(task)} checked={task.done} type='checkbox' />
    </div>
  )
}
