import {tasks} from './tasks'
import { useState, useEffect } from 'react'
console.log(tasks);

function TaskList() {
    const[tasks, setTasks]= useState([]);

    useEffect(() =>{
        setTasks(tasks)
    },[])

    if (tasks.length === 0){
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
