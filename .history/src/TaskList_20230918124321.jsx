import {tasks as data} from './tasks'
import { useState, useEffect } from 'react'


function TaskList() {
    const[tasks, setTasks]= useState([]);

    useEffect(() =>{
        setTasks(data)
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
