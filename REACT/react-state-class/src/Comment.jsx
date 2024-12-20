import { useState } from "react"
import "./Comment.css"
import CommentForm from "./CommentForm";


export default function Comment(){

     let [comments , setComments] = useState([{
        username : "@sam",
        rating : 5,
        remarks: "good",
     }])

     let addNewComment = (comment) =>{
        setComments((currComments) =>[...currComments,comment])
     };

    return (
        <>
        <h1>All Comments</h1>
        {
            comments.map((comment , idx) =>(
                <div className="comment" key={idx}>
                <span>{comment.remarks}</span>&nbsp;
                <span>(rating = {comment.rating})</span>
                <p>-{comment.username}</p>
            </div>
            ))
        }
         
    

        <hr /><hr />
        <CommentForm addNewComment={addNewComment}></CommentForm>
        </>
    )

}