import { Checkbox, CloseButton, Stack, Text, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function TaskItem ({ task, handleToggle, deleteSingleTask }) {
  const { colorMode } = useColorMode()

  const colorTaskDone = colorMode === 'light' ? '#666' : '#aaa'
  const backgroundStyle = colorMode === 'light' ? 'gray.200' : 'blackAlpha.400'
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  const deleteTask = () => {
    deleteSingleTask(task.id)
  }

  return (
    <Stack
      as={motion.div}
      initial='hidden'
      animate='visible'
      exit='hidden'
      layoutId={task.id}
      variants={variants}
      backgroundColor={backgroundStyle}
      p={4} justifyContent='space-between'
      borderRadius={10}
      alignItems='center' direction='row' gap={1}
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
      <Stack>
        <CloseButton onClick={deleteTask} size='md' />
      </Stack>
    </Stack>
  )
}
