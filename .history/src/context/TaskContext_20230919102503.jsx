import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()
export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...tasks,
             {
            title: task.title,
            id: tasks.length,
            description: task.description,
            completed: false  // Agrega esta línea
        }])
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    function completeTask(taskId) {
        setTasks(tasks.map(task => task.id === taskId ? {...task, completed: true} : task));
    }

    useEffect(() => {
        setTasks(data)
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, createTask, deleteTask, completeTask }}>
            {props.children}
        </TaskContext.Provider>
    );
}
