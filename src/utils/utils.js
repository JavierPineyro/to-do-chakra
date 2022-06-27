export const changeTaskDone = (state, task) => {
  return state.map(
    item => item.id === task.id
      ? { ...item, done: !item.done }
      : item
  )
}

export const cleanDoneTask = (state) => {
  return state.filter(item => item.done === false)
}

export const storageSetItem = (state) => {
  localStorage.setItem('tasks', JSON.stringify(state))
}

export const storageGetItem = () => {
  return localStorage.getItem('tasks')
}

export const createUniqueID = () => {
  return crypto.randomUUID()
}

export const showMessageEmptyInput = () => {
  alert('Debes Ingresar una Tarea')
}
