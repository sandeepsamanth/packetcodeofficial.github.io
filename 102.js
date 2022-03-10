const todoform=document.querySelector(".form-todo")
const todoinput=document.querySelector(".form-todo input[type='text']")
const todolist=document.querySelector(".todo-list")

todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodotext=(todoinput.value);
    console.log(newtodotext);
    const newli=document.createElement("li");
    const newliinnerhtml=`
    <span class="text">${newtodotext}</span>
    <div class="todo-button">
        <button class="todo-btn done">done</button>
        <button class="todo-btn remove">remove</button>
    </div>`;
    newli.innerHTML=newliinnerhtml;
    console.log(newli)
    todolist.append(newli);
    todoinput.value="";
})

todolist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        const targetedli=e.target.parentNode.parentNode;
        targetedli.remove()

    }
    if(e.target.classList.contains("done")){
        const lispan=e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration="Line-through"
        lispan.style.color="#FFF9C4";
        console.log(lispan)
        
    }
})

