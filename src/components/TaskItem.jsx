export default function TaskItem ({ task, handleToggle }) {
  return (
    <div>
      {
        task.done
          ? <span style={{ textDecoration: 'line-through', color: '#555' }}>{task.content}</span>
          : task.content
      }
      <input onChange={() => handleToggle(task)} checked={task.done} type='checkbox' />
    </div>
  )
}
