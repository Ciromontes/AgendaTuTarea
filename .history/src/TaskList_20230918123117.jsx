import {tasks} from './tasks'
import {useState} from 'react'
console.log(tasks)

function TaskList() {
    const[tasks, setTasks]= useState([]);
  return (
    <div>
      {tasks.map((task) => (
        <div>tarea</div>
      ))}
    </div>
  );
}

export default TaskList
