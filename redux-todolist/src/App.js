import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions/index.js"


function App() {

  const myTasks = useSelector(state => state.taskHandler)
  const [newTask, setNewTask] = useState("")
  const dispatch = useDispatch()
  useEffect(() => { console.log(myTasks) })

  return (
    <div className="App">
      <h3>Redux To Do List</h3>
      <ul>
        {myTasks.map((key, index) =>
        (
          <div className="row" key={key}>
            <li id={index}>{myTasks[index]}</li>
            <button onClick={() => dispatch(actions.deleteTask(key))}>Delete</button>
            <button onClick={() => dispatch(actions.editTask(index))}>Edit</button>
          </div>
        ))}
      </ul>
      <input type="text" onChange={(e) => { setNewTask(e.target.value) }}></input>
      <button onClick={() => dispatch(actions.addTask(newTask))}>Add Task</button>
    </div>
  );
}

export default App;
