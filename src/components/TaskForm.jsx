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
    input
      ? createTask({ id: uuid, content: input, done: false })
      : showMessageEmptyInput()
    setInput('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange} value={input} type='text'
          placeholder='Enter a task...'
        />
        <button>Save Task</button>
      </form>
      <button onClick={deleteCompletedTask}>Clean</button>
    </>
  )
}
