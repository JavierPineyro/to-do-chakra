import TaskItem from './TaskItem'

export default function TaskContent ({ tasks, handleToggle }) {
  return (
    <>
      {
        tasks.map(task =>
          <TaskItem task={task} handleToggle={handleToggle} key={task.id} />
        )
      }
    </>
  )
}
