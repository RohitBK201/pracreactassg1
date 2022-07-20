import React from "react";
import { useState } from "react";
import styles from "./addTask.module.css";
import axios from "axios"
import { useContext } from "react";
import { AppContext } from "../..";
import { useEffect } from "react";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair

  const [tsk,settsk] = useState("")
  const {handleap} = useContext(AppContext)
  const [flt,setFlt] = useState(null)

  useEffect(()=>{

    axios({
      method : "GET",
      url : "http://localhost:8080/tasks"
      }).then((res)=>{ setFlt(res.data) })

  },[])

 

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={(e)=>{settsk(e.target.value)}}/>
      <button data-testid="add-task-button" onClick={()=>{

                  

          if(tsk !== "" && chk(flt,tsk)===true )
          {
            addtsk(tsk);
            handleap();
          }
        

      }}>Add Task</button>
    </div>
  );
};

export default AddTask;

function addtsk(tsk){

  axios({
    method : "POST",
    url : "http://localhost:8080/tasks",
    data : {

      text : tsk,
      done : false,
      count : 1

    }
  })

}

function chk(dat,tsk){

  var count = 0
   
   dat?.forEach((e)=>{

     if(e.text === tsk)
     {
       count++;
     }

   })

   if(count==0)
   {
     return true;
   }
   else
   {
     return false;
   }

}