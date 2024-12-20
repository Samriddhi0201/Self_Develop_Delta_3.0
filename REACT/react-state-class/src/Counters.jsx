import { useEffect } from "react";
import { useState } from "react";

export default function Counters(){
   
    let [countx , setCountx] =useState(0); 
    let [county , setCounty] =useState(0); 
   
    const inCountx =() =>{
        setCountx((currCount) =>
             currCount + 1
          );
    }
    const inCounty =() =>{
        setCounty((currCount) =>
             currCount + 1
          );
    }


    useEffect(function sideEFfect(){
        console.log("This is the side Effect")
    },
    [countx]

)
    return (
    <div>
    <h1>Count = {countx}</h1>
        <button onClick={inCountx}>+1</button>

    <h1>Count = {county}</h1>
        <button onClick={inCounty}>+1</button>
    </div>
    )
}