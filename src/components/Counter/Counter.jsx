import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count,setCount] = useState(1) 
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={()=>{setCount(count+1)}}>Add</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={()=>{setCount(count-1)}}>Sub</button>
    </div>
  );
};

export default Counter;
