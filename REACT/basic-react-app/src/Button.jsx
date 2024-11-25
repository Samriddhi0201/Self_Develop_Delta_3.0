import React from 'react'

function doSomething(event){
    console.log("Button was Clicked");
    console.log(event);
}
function para(){
    console.log("Bye")
}
function handleHover(){
    console.log("hover out")
}
function printSomething(){
    console.log("This is para")
}
function handledbClick(){
    console.log("You doubled Click")
}
export default function Button() {
  return (
    <div>
      <button onClick={doSomething}>Click Me!</button>
      <p onClick={para}>This Para is for event demo</p>
      <button onMouseOut={handleHover}>Hover Out Me!</button>
      <p onMouseOver={printSomething}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, rem quibusdam qui iste tenetur voluptate cum fugit ipsum maiores nisi distinctio blanditiis ut officiis excepturi minus inventore libero saepe. Iste.
      Neque magnam quae exercitationem esse at, tenetur porro ullam quia totam, deserunt qui 
     </p>
     <button onDoubleClick={handledbClick}>Doublle Click Me!</button>
    </div>
  )
}


