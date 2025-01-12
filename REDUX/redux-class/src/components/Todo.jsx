import { useDispatch, useSelector } from "react-redux"
import AddForm from "./AddForm";
import { deleteTodo, markAsDone   } from "../features/todo/todoSlice";


export default function Todo() {
    const todos =  useSelector((state)=> state.todos);
    const dispatch = useDispatch();
    // console.log(todos)


    const deleteHandler = (id) =>{
    
     dispatch(deleteTodo(id));
    }
    

    const markAsDoneHandler =(id) =>{
        console.log(id);
       dispatch(markAsDone(id));
    }
    return (
        <>
        <AddForm></AddForm>
        <h3>Todo List App</h3>
        <ul>
            {
                todos.map((todo) => (<li key={todo.id}>  
                <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
                    {todo.text}{todo.task}
                  </span>
                    <button onClick={() => deleteHandler(todo.id)}>Delete</button>
                    { (
            <button onClick={() => markAsDoneHandler(todo.id)}>Mark as Done</button>
          )}
                    </li>
                ))
            }
        </ul>
        </>
    )
} 