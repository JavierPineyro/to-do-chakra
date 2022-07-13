import { Button, Input, useColorMode, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { createUniqueID } from '../utils/utils'

export default function TaskForm ({ createTask, deleteCompletedTask, selectAllTasks }) {
  const [input, setInput] = useState('')
  const [textButton, setTextButton] = useState(true)

  // hooks
  const toast = useToast()
  const { colorMode } = useColorMode()

  // Change Select Button Content
  const text = textButton ? 'Select All' : 'Deselect All'

  const placeholderStyle = colorMode === 'light'
    ? { opacity: 1, color: 'gray.600' }
    : { opacity: 1, color: 'gray.400' }

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
    <>
      <form onSubmit={handleSubmit}>
        <Input
          as='input'
          paddingLeft={1}
          size='md'
          m={2}
          colorScheme='twitter'
          maxW={64}
          variant='flushed' onChange={handleChange} value={input} type='text'
          placeholder='Enter a task...'
          _placeholder={placeholderStyle}
        />
        <Button m={2} type='submit' color='white' size='sm' variant='solid' colorScheme='twitter'>
          Save Task
        </Button>
      </form>
      <Button m={2} as='button' color='white' size='sm' variant='solid' colorScheme='twitter' onClick={deleteCompletedTask}>
        Clean
      </Button>
      <Button m={2} w={24} as='button' color='white' size='sm' variant='solid' colorScheme='twitter' onClick={handleTextButton}>
        {text}
      </Button>
    </>
  )
}
