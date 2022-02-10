// section input
const todoInput = document.querySelector("#input-todos");
const todoBTN = document.querySelector("#button-todos");
const todoList = document.querySelector(".todo-list");





// eventlistenr
todoBTN.addEventListener("click", addTodo);
function addTodo(event) {
  event.preventDefault();

  if (todoInput.value === "") {
    alert("Input tidak boleh kosong!");
  } else {

    let b = [];
    b = JSON.parse(localStorage.getItem('mantap')) || [];
    let panjang = (b.length + 1).toString();
    b.push({id:`${panjang}`,name: `${todoInput.value}`, value: `false`});
    localStorage.setItem('mantap', JSON.stringify(b));
    
    // create div
    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.classList.add("mt-2");

    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    newTodo.classList.add(`${panjang}`);
    todo.append(newTodo);

    // create done button
    const doneBTN = document.createElement("button");
    doneBTN.innerText = "Done";
    doneBTN.classList.add("done-btn");
    todo.append(doneBTN);

    // create delete button
    const deleteBTN = document.createElement("button");
    deleteBTN.innerText = "Delete";
    deleteBTN.classList.add("delete-btn");
    todo.append(deleteBTN);

    // tambahkan todo ke todo list
    todoList.append(todo);

    // clear todo input
    todoInput.value = "";
  }
}

todoList.addEventListener("click", doneAndDelete);
function doneAndDelete(event) {
  const btn = event.target;
  const todo = btn.parentElement;


  

let b = [];
b = JSON.parse(localStorage.getItem('mantap')) || [];

  if (btn.innerText === "Done") {
    const nama = btn.previousSibling;
    let indeks_kelas = nama.classList.item(1)-1;
    b[indeks_kelas].value = b[indeks_kelas].value === "true" ? "false" : "true";
    localStorage.setItem('mantap', JSON.stringify(b));
    todo.classList.toggle("done-todo");
    // btn.remove();

  } else if (btn.innerText === "Delete") {
    // const nama = btn.previousSibling.previousSibling;
    // let indeks_kelas = nama.classList.item(1)-1;
    // b.splice(indeks_kelas,1)
    // localStorage.setItem('mantap', JSON.stringify(b));
    todo.classList.add("remove");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
}


function checkStorage(){
    // get the key
    let b = [];
    b = JSON.parse(localStorage.getItem('mantap')) || [];

    console.log(b, "<<<<");
    if (localStorage.length != 0) {
        for (let i = 0; i <b.length; i++) {
 
            const todo = document.createElement("div");
            todo.classList.add("todo");
            todo.classList.add("mt-2");
            if (b[i].value == "true") {
                todo.classList.add("done-todo");
            }
        
            // create li
            const newTodo = document.createElement("li");
            let kunci = i.toString();
            newTodo.innerText = b[i].name;
            newTodo.classList.add("todo-item");
            newTodo.classList.add(`${b[i].id}`);

            todo.append(newTodo);
        
            // create done button
            const doneBTN = document.createElement("button");
            doneBTN.innerText = "Done";
            doneBTN.classList.add("done-btn");

            todo.append(doneBTN);
        
            // create delete button
            const deleteBTN = document.createElement("button");
            deleteBTN.innerText = "Delete";
            deleteBTN.classList.add("delete-btn");
            todo.append(deleteBTN);
        
            // tambahkan todo ke todo list
            todoList.append(todo);
        
        }
    }
}
checkStorage();
