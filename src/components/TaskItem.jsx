import { Checkbox, Stack, Text, useColorMode } from '@chakra-ui/react'

export default function TaskItem ({ task, handleToggle }) {
  const { colorMode } = useColorMode()
  const colorTaskDone = colorMode === 'light' ? '#666' : '#aaa'
  const backgroundStyle = colorMode === 'light' ? 'gray.200' : 'blackAlpha.400'

  return (
    <Stack
      backgroundColor={backgroundStyle}
      // backdropFilter='auto'
      // backdropInvert='10%'
      // backdropBlur='2px'
      // border='1px'
      p={5} justifyContent='space-between'
      borderRadius={10}
      alignItems='start' direction='row' gap={1}
      alignContent='baseline'
    >
      <Stack maxW={['lg', 'xl']} minW={['lg', 'xl']}>
        {
        task.done
          ? <Text fontSize='xl' textDecoration='line-through' color={colorTaskDone}>{task.content}</Text>
          : <Text fontSize='xl'>{task.content}</Text>
      }
      </Stack>
      <Stack>
        <Checkbox
          colorScheme='twitter'
          backgroundColor='gray.400'
          borderRadius={2}
          borderColor='gray.400'
          iconSize='3rem' size='lg'
          onChange={() => handleToggle(task)} isChecked={task.done}
        />
      </Stack>
    </Stack>
  )
}
