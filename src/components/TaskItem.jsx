import { Checkbox, Stack, Text, useColorMode } from '@chakra-ui/react'

export default function TaskItem ({ task, handleToggle }) {
  const { colorMode } = useColorMode()
  const colorTaskDone = colorMode === 'light' ? '#666' : '#aaa'
  return (
    <Stack alignContent='center' direction='row' gap={4}>
      {
        task.done
          ? <Text fontSize='2xl' textDecoration='line-through' color={colorTaskDone}>{task.content}</Text>
          : <Text fontSize='2xl'>{task.content}</Text>
      }
      <Checkbox size='lg' onChange={() => handleToggle(task)} checked={task.done} />
    </Stack>
  )
}
