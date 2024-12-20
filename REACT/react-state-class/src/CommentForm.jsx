import { useState } from "react"
import{useFormik} from "formik";

export default function CommentForm({addNewComment}){
    // let [formData , setFormData] = useState({
    //     username : "",
    //     rating : 5,
    //     remarks : "",
    // })
    const validate = values => {
        const errors = {};
        if (!values.userName) {
          errors.userName = 'Username cannot be empty';
        } 
      
    
        return errors;
      };
    const formik = useFormik({
        initialValues:{
            username : "",
            rating : 5,
            remarks : "",
        }, 
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
    })
    // let handleInputData = (event) =>{
    //     setFormData((currData) =>{
    //         return {...currData , [ event.target.name] : event.target.value}
    //      })
    // }

    // let handleSubmit =(event) =>{
    //     event.preventDefault();
    //     console.log(formData);
    //     addNewComment(formData)
    //     setFormData({
    //         username : "",
    //         rating : 5,
    //         remarks : "",
    //     })
    //   }


    return(
        <>
        <h1>Comment Form</h1>
        <h4>Give a Comment</h4>
        <form action="" onSubmit={formik.handleSubmit}>
            <label htmlFor="username">User Name : </label>
            <input type="text" placeholder="Enter UserName" name="username" value={formik.values.username} onChange={formik.handleChange} /><br/><br/>
            {formik.errors.userName ? <p style={{color:"red"}}>{formik.errors.userName}</p> : null}

            <label htmlFor="rating">Rating : </label>
            <input type="number" placeholder=" Rating" min={1} max={5} name="rating" value={formik.values.rating} onChange={formik.handleChange} /><br/><br/>
            <label htmlFor="remark">Remark: </label>
            <textarea name="remarks" id="" value={formik.values.remarks} onChange={formik.handleChange}>Give a Remarks</textarea><br/><br/>
            <button type="submit">Add Comment</button>

        </form>
        </>
    )
}