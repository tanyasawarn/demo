import { useState } from "react";
import { useNavigate } from "react-router-dom";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import classes from  "./dasboard.module.css";

const dUMMY_Task = [{
     
    id: 'T1',
    title: 'Buy groceries',
    completed: false
  },
  {
    id: 'T2',
    title: 'Do laundry',
    completed: true
  },
  {
    id: 'T3',
    title: 'Finish project',
    completed: false
}];

 

const Dashboard = ()=>{

    const [showDropdown, setShowDropdown] = useState(false);
    const [newTask, setNewTask] = useState("");
   const navigate = useNavigate();
   
    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
      };

      const addNewTask = () => {
        const newTaskObj = {
          id: `T${dUMMY_Task.length + 1}`,
          title: newTask,
          completed: false
        };
    
        setNewTask("");
        dUMMY_Task.push(newTaskObj);
      };

    const todoItems = dUMMY_Task.map((task) => {
        return (
          <div key={task.id}>
            <input type="checkbox" checked={task.completed} />
            <label>{task.title}</label>
          </div>
        );
      });

       const logoutHandler = () =>{
        navigate('/');
       };
     
    return (
        <div className={classes.dashboard}>
        <h2 onClick={toggleDropdown}>My Todo List
        <FontAwesomeIcon icon={faAngleDown} />
        </h2>
        {showDropdown && (
        <div>
          <ul>
            {todoItems}
          </ul>
        </div>
      )}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button onClick={addNewTask}>Add Goal</button>
      </div>
      <button onClick={logoutHandler}>Logout</button>
         </div>
    );
};

export default Dashboard;