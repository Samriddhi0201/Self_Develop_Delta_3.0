 import { useState } from "react";
 import {v4 as uuidv4} from "uuid";
  
 export default function TodoList() {
    let [todos, setTodos] = useState([{task : "sample-task" , id: uuidv4(), isDone: false}]);
    let [newTodo , setNewTodo] = useState("");
   

    let addNewTask = () =>{
        console.log("Wehave to add new task in todo");
        setTodos((prevTodos)=>{
           return [...prevTodos , {task : newTodo , id : uuidv4(), isDone: false}]
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) =>{
        //console.log(event.target.value);
        setNewTodo(event.target.value);
    }

    let deleteTodo =(id) =>{
        // console.log(id)
        // console.log("Task deleted")
        setTodos((prevTodos) => (todos.filter((prevTodos) => prevTodos.id != id)));   
    }

    
     
    let markAllDone = () =>{
     
        setTodos((prevTodos)=>
            prevTodos.map((todo) =>{
                return{
                    ...todo,
                   isDone: true,
                 
                 };
       //console.log(todo.toUpperCase())
        }));
    }
    let markAsDone= (id) =>{
        setTodos((prevTodos)=>
            prevTodos.map((todo) =>{
                if(todo.id === id){
                    return{
                        ...todo,
                       isDone: true,
                    };
                }
                else{
                    return todo;
                }
                
       //console.log(todo.toUpperCase())
        }));
    }


    return (
        
        <div>
             <h1>Activity</h1>
           
            <input type="text" placeholder="Add a Task" value ={newTodo} onChange={updateTodoValue}/>
            <br /><br />
            <button onClick={addNewTask}>Add</button>
            <br /><br /><br />
             <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) =>(
                        <li key={todo.id}>
                            <span style= {todo.isDone ?{textDecorationLine: "line-through"} : {}}>
                                {todo.task}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick ={()=>deleteTodo(todo.id)}> Delete</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button> 
                        </li>
                    ))
                }
            </ul>

            <br /><br />
                <button onClick={markAllDone}>Mark All as Done</button>
                  
        </div>
    )
 }