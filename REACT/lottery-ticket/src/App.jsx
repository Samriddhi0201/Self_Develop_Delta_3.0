
import Ticket from './Ticket'
import './App.css'
import Lottery from './Lottery'

function App() {
  let winCondition =(ticket) =>{
    return ticket[0] === 0;
  }

  return (
    <>
    <Lottery n={3} winCondition= {winCondition}></Lottery>
      {/* <Ticket ticket ={[0,1 ,2]}></Ticket> */}
      
      
    </>
  )
}

export default App
