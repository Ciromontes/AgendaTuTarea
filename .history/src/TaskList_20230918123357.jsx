import {tasks} from './tasks'
import {useState} from 'react'
console.log(tasks);

function TaskList() {
    const[tasks, setTasks]= useState([]);

    if (tasks.length === o){
        return <h1>Noy hay tareas aún</h1> 
       }


  return (
    <div>
      {tasks.map((task) => (
        <div>tarea</div>
      ))}
    </div>
  );
}

export default TaskList
