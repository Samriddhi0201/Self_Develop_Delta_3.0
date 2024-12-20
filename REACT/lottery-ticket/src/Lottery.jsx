import { useState } from "react";

import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";


//export default function Lottery(){
export default function Lottery({n=3 , winCondition}){
    //let [ticket , setTicket] = useState(genTicket(3));
    let [ticket , setTicket] = useState(genTicket(n));
   // let isWinning = sum(ticket) === 15;
   let isWinning = winCondition(ticket);

    let buyTicket = () => {
        //setTicket(genTicket(3))
        setTicket(genTicket(n))
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            {/* <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div> */}
            <Ticket ticket={ticket} ></Ticket>
        
            <button onClick= {buyTicket}>Buy New  Ticket</button>
            <h3>{isWinning && "Congratulations, you win"}</h3>
        </div>
    )
}