import { Button, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { createUniqueID, showMessageEmptyInput } from '../utils/utils'

export default function TaskForm ({ createTask, deleteCompletedTask }) {
  const [input, setInput] = useState('')
  const handleChange = (evt) => {
    setInput(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const uuid = createUniqueID() // genera ID unica
    input && input.trim()
      ? createTask({ id: uuid, content: input, done: false })
      : showMessageEmptyInput()
    setInput('')
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
        />
        <Button m={2} type='submit' color='white' size='sm' variant='solid' colorScheme='twitter'>Save Task</Button>
      </form>
      <Button m={2} as='button' color='white' size='sm' variant='solid' colorScheme='twitter' onClick={deleteCompletedTask}>Clean</Button>
    </>
  )
}
