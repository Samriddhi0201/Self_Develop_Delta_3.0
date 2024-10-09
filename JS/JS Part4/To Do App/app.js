let todo = [];
let request = prompt("Please enter your request :");
while(true){
    if(request  == "quit"){
        console.log("Quitting App");
        break;
    }
    if(request == "list"){
        console.log("--------------------");
        for(let i =0 ; i < todo.length ; i++){
            console.log(i , todo[i]);
            console.log("--------------------");
        }
    }
    else if(request == "add"){
        let task = prompt("Please Enter the task you want to add");
        todo.push(task);
        console.log(`Task added ${todo}`);
    }
    else if(request == "delete"){
        let index = prompt("Please Enter the task index");
        todo.splice(index , 1 );
        console.log("Task deleted");
    }  
    else{
        console.log("Wrong Request");
    }
    request = prompt("Enter your request");
}