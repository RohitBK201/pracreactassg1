import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../..";

const Task = (id) => {
  // NOTE: do not delete `data-testid` key value pair
  const {handleap} = useContext(AppContext)
  return (
    <li data-testid="task" className={styles.task} style={{display : "flex", alignItems : "center"}}>
      <input type="checkbox" data-testid="task-checkbox"  onClick={()=>{toggle(id.id); handleap();}}/>
      <div data-testid="task-text" style={{marginRight : "20px"}}>done</div>
      <Counter/>
      <button data-testid="task-remove-button" style={{marginLeft : "20px",marginRight : "20px"}} onClick={()=>{del(id.id);handleap();}}>Delete</button>
    </li>
  );
};

export default Task;

function toggle(id){

  axios({
    method : "PATCH",
    url : `http://localhost:8080/tasks/${id}`,
    data : { done : true }
  })

}

function del(id){

  axios({
    method : "DELETE",
    url : `http://localhost:8080/tasks/${id}`, 
  })

}