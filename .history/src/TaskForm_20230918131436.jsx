

function TaskForm() {
  return (
        <form>
            <input placeholder="Escribe tu tarea"
            onChange={function(e) {console.log(e.target.value)}}
            />
            <button>
                Guardar
            </button>
        </form>
      
   
  )
}

export default TaskForm
