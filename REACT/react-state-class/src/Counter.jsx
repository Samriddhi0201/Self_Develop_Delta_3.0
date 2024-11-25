import { useState } from "react";


function init (){
    console.log("init was executed")
    return Math.random();
}
export default function Counter(){
   
    let [count , setCount] =useState(init); // initialization

  
     console.log("Component is rendered");
    // console.log(`count = ${count}`);
   


   let increaseCount =() =>{
    setCount((currCount) =>{
      return  currCount + 1;
    });
    setCount((currCount) =>{
       return  currCount + 1;
     });
     
    
   // console.log(` Component is rendered ,count ${count}`);
    }

    return (
    <div>
    <h3>Count = {count}</h3>
        <button onClick={increaseCount}>Increase Count</button>
    </div>
    )
}