import "./App.css"
import Product from "./Product.jsx"
import ProductTab from "./ProductTab.jsx"
import Title from "./Title.jsx"
import MsgBox from "./MsgBox.jsx"
import Button from "./Button.jsx"
import Form from "./Form.jsx"


function App() {


  return  (
    <>
    <h3>BlockBuster Deals on Computer Accessories |Shop Now</h3>
   <ProductTab/>
  <div>
   {/* Activity part start */}
   <h1>Actvity 1</h1>
    <MsgBox userName = "Samriddhi Mishra" textColor="pink"/>
   <MsgBox userName = "Mohit Sharma" textColor="red"/>
   <MsgBox userName = "Shraddha Khapra" textColor="blue"/> 
   
   {/* Activity part end */}
   </div>
   
   <h2>Event Handler</h2>
  <Button/><br></br>
  <Form/>
</>
  ) 
}



export default App
