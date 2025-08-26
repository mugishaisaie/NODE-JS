import { useState } from "react"



const App  =()=>{

  const [taskName,setTaskName] = useState("")
  const [taskDate,setTaskDate] = useState("")
  const [tasks, setTasks] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    console.log(taskName,taskDate);

    const newTask ={
      taskName, taskDate
    }
     
    setTasks([...tasks,newTask])

  }

  return(
    <div>
      <h2>Enter all your Daily Tasks</h2>

      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Task' onChange={(e)=>setTaskName(e.target.value)}/>
        <input type="date" onChange={(e)=>setTaskDate(e.target.value)}/>

        <button type="submit">Save</button>
      </form>

      {/* Task List */}

      <TaskList tasks={tasks}/>
    </div>
  )

}

function TaskList({tasks}){
  return (
    <div>
      <h2>List of Tasks</h2>

      <div>{tasks.map((task)=>{
        return(
          <div key={task.name}>
            <p style={{display:'inline-block',margin:'20px'}}>{task.taskName}</p>
            <p style={{display:'inline-block'}}>${task.taskDate}</p>
          </div>
        )
      })}</div>
    </div>
  )
}


export default App