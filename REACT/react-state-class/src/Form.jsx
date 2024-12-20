import { useState } from "react"

export default function From(){
   let [formData , setFormData] = useState({
    fullName: "",
    userName: "",
    password:"",
   })

    // let handleNameChange = (event) =>{
    //     console.log(event.target.value)
    //     setFullName(event.target.value)
    // }
    // let handleUserName= (event) =>{
    //     console.log(event.target.value)
    //     setUserName(event.target.value)
    // }

    let handleInputChange = (event)=>{
        // let fieldName = event.target.name;
        // let newValue = event.target.value; 
        // //console.log(fieldName)
        setFormData((currData) =>{
           return {...currData , [ event.target.name] : event.target.value}
        })

    }

    let handleSubmit =(event) =>{
      event.preventDefault();
      console.log(formData)
      setFormData({
        fullName : "",
        userName: "",
        password:"",
      })
    }


   return  (
    <>
   <h1>Form Handling</h1>
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullname"> Full Name</label>
        <input type= "text" placeholder="enter your full name" value={formData.fullName} onChange={handleInputChange} id="fullname" name="fullName"/><br/><br/>
        <label htmlFor="username"> User Name</label>
        <input type= "text" placeholder="enter your user name" value={formData.userName} onChange={handleInputChange} id="username" name="userName"/>
        <br/><br/>
        <label htmlFor="password"> Password</label>
        <input type= "pasword" placeholder="enter your password" value={formData.password} onChange={handleInputChange} id="password" name="password"/><br/><br/>
        <button>Submit</button>
    </form>
    </>
   )
}