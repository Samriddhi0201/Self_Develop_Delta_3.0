import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import Form from './Form'
import CommentForm from './CommentForm'
import Comment from './Comment'
import Counters from './Counters'
import Joker from './Joker'

function App() {

 
  return (
    <>
      <h1>States in React</h1>
      <Counter/>
      <hr />
      <hr />

      <h1>Activity : Create Like Button</h1>
      <LikeButton/>

      <hr />
      <hr />
 
     <Form></Form>    

       <hr />
      <hr />
      <hr />
      <hr />
 
    <CommentForm></CommentForm>
    
    <hr />
      <hr />
      <hr />
      <hr />
      <Comment></Comment>


      <hr />
      <hr />
      <hr />
      <hr />
      {/* USeEffect used */}
      <Counters></Counters>
      <hr />
      <hr />
      <hr />
      <hr />
      <Joker></Joker>
    </>
  )
}

export default App
