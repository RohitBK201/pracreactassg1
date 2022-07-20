import React from "react";
import { useState,useEffect } from "react";
import styles from "./taskHeader.module.css";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../..";



const TaskHeader = () => {
  // sample values to be replaced

  const {ap} = useContext(AppContext)
  const [data,setData] = useState(null)

  useEffect(()=>{

    axios({
      method : "GET",
      url : "http://localhost:8080/tasks"
    }).then((res)=>{setData(res.data)})
  

  },[ap])

  let cnt = 0;
  let ucnt = 0;

  { data?.forEach((e) => {

    cnt++;

    if(e.done!==true)
    {
      ucnt++;
    }
    
  });}

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">To be Completed : {ucnt}</b>
      <br />
      <br />
      <b data-testid="header-total-task">Total : {cnt}</b>
    </div>
  );
};

export default TaskHeader;
