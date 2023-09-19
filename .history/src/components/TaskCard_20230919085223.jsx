import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext);
    return (
        <div className='bg-indigo-800 text-white p-4 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <h1 className='text-2xl font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-300 text-sm'>{task.description}</p>
            <button 
            className='bg-green-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'  
            onClick={() => deleteTask(task.id)}>
                Eliminar Tarea
            </button>
        </div>
    );
}

export default TaskCard;
