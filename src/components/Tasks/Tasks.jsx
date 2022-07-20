import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../..";
import Task from "../Task/Task";
import styles from "./tasks.module.css";



const Tasks = () => {
  
  const [data,setData] = useState(null);

  const {ap} = useContext(AppContext)
  const {handleap} = useContext(AppContext)

  useEffect(()=>{

    axios({
      method : "GET",
      url : "http://localhost:8080/tasks"
    }).then((res)=>{setData(res.data)})
  

  },[ap])
  
  

  return (
    <>
      {data?.length!==0?       <ul data-testid="tasks" className={styles.tasks}>
        
        { data?.map((e)=>(
          <div key={e.id}>
             
             <div style={{display : "flex"}}>
             <h3 style={{ marginRight : "20px"}}>No. {e.id}</h3>
             <h3 style={{ marginRight : "20px"}}>Task : {e.text}</h3>
             <h3 style={{ marginRight : "20px"}}>Status : {e.done? <button onClick={()=>{ntoggle(e.id); handleap() }}>Done</button> : <button onClick={()=>{toggle(e.id); handleap() }}>Not Done</button>}</h3>
             <Task id={e.id}/>
             <h3 style={{display : "flex"}}>count : {e.count} </h3>
             </div>

          </div>
        ))}
      </ul>
    :  
    
    <div data-testid="tasks-empty" className={styles.empty}>
      
      NO task to do

    </div>

    }

     
      
    </>
  );
};

export default Tasks;



 function toggle(id){

  axios({
    method : "PATCH",
    url : `http://localhost:8080/tasks/${id}`,
    data : { done : true }
  })

}

function ntoggle(id){

  axios({
    method : "PATCH",
    url : `http://localhost:8080/tasks/${id}`,
    data : { done : false }
  })

}