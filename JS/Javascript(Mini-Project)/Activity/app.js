let button = document.querySelector("button");
let input  = document.querySelector("input");
let ul     = document.querySelector("ul");


button.addEventListener("click" , function(){
    
    let item = document.createElement("li")
    item.innerText = input.value;
    ul.appendChild(item);
    input.value =""
    

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
});


ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted")
    }  
})


//it will not delete the element which are added newly
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click" , function(){
//         //console.log("delete");
//         let par = this.parentElement;
//         console.log(par)
//         par.remove();
//     })
// }
