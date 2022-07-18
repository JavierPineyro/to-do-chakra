import { Button, Input, Stack, useColorMode, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { createUniqueID } from '../utils/utils'

export default function TaskForm ({ createTask, deleteCompletedTask, selectAllTasks }) {
  const [input, setInput] = useState('')
  const [textButton, setTextButton] = useState(true)

  // hooks
  const toast = useToast()
  const { colorMode } = useColorMode()

  const placeholderStyle = colorMode === 'light'
    ? { opacity: 1, color: 'twitter.500' }
    : { opacity: 1, color: 'twitter.500' }

  // Functions
  const handleChange = (evt) => {
    setInput(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const uuid = createUniqueID() // genera ID unica
    input && input.trim()
      ? createTask({ id: uuid, content: input, done: false })
      : toast({
        title: 'OOPS Empty Input!',
        position: 'bottom-left',
        description: 'You must add a task',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    setInput('')
  }
  const handleTextButton = () => {
    selectAllTasks(textButton)
    setTextButton(prev => !prev)
  }
  return (
    <Stack gap={2} w={[450, 350]} minW={120}>
      <form onSubmit={handleSubmit}>
        <Stack alignItems='center' gap={1} direction='row'>
          <Input
            paddingLeft={2}
            size={['lg', 'md']}
            colorScheme='twitter'
            variant='outline' onChange={handleChange} value={input} type='text'
            placeholder='Enter a task...'
            _placeholder={placeholderStyle}
          />
          <Button m={2} type='submit' color='white' size={['lg', 'sm']} variant='solid' colorScheme='twitter'>
            Add
          </Button>
        </Stack>
      </form>
      <Stack gap={2} justifyContent='start' direction='row'>
        <Button color='white' size={['lg', 'sm']} variant='solid' colorScheme='twitter' onClick={deleteCompletedTask}>
          Clean
        </Button>
        <Button color='white' size={['lg', 'sm']} variant='solid' colorScheme='twitter' onClick={handleTextButton}>
          {textButton ? 'Select' : 'Deselect'}
        </Button>
      </Stack>
    </Stack>
  )
}
