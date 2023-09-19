import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from '../context/TaskContext';
import Confetti from 'react-confetti';  // Importa el componente Confetti

function TaskList() {
  const { tasks } = useContext(TaskContext);
  const allTasksCompleted = tasks.every(task => task.completed);  // Comprueba si todas las tareas están completas

  if (tasks.length === 0) {
    return (
    <h1 className="text-indigo-500 text text-4xl font-bold text-center">
      No hay tareas aún
    </h1>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {allTasksCompleted && <Confetti />}  // Muestra confeti si todas las tareas están completas
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;


