import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();     
        createTask({
            title,
            description,
        });
        setTitle('')
        setDescription('')

    }

    return (
        <div className="max-w-md-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
            <input
                placeholder="Escribe tu tarea"
                onChange={(e) => setTitle(e.target.value)}
                value = {title}
                autoFocus
            />
            <textarea placeholder="Escribe la descripciónde la tarea"
                onChange={(e) => setDescription(e.target.value)}
                value = {description}
                
            ></textarea>

            <button>
                Guardar
            </button>
        </form>
        </div>
    );
}

export default TaskForm;
