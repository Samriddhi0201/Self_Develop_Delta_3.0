import React from 'react'
import Product from './Product';
import "./Product.css"

function ProductTab(){
    //let options = ["hi-tech","durable", "fast"];
   // let options2 = { a :"hi-tech" , b : "durable" , c: "fast"}
   let styles = {
    display: "flex", 
    flesWrap :"wrap",
    justifyContent: "center",
    alignItems: "center",
}
  return (
    <div >
    {/* <Product title ="phone" price={35000}  />
    <Product title="laptop" price={40000}/>
    <Product title="pen" price = {1} /> */}
{/* Activity Start  */}
 
    <div style = {styles}>
    
    <Product   title = "Logitech MX Master" idx= {0} />
    <Product  title = "Apple Pencil (2nd Gen)" idx= {1}/>
    <Product title = "Zebronics Zeb-transformer" idx= {2} />
    <Product title = "Petronics Toad 23" idx= {3}/>
    </div>
    </div>
  )
}

export default ProductTab