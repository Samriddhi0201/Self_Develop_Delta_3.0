
// Activity Question 
// Show a Hello Message to the user in different colors. PAss 2 values as a props: userName and textColor

import React from 'react'

function MsgBox({userName , textColor}) {
    //let styles = {color :textColor};
  return (
    <div >
     
      <h1 style= {{color : textColor}}>Hello ,{userName}</h1>
    </div>
  )
}

export default MsgBox
