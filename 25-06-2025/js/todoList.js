var addTaskButton = document.getElementById("addTaskButton")
var taskInput = document.getElementById("taskInput")
var taskList = document.getElementById("taskList")

function addTask() {
    var taskText = taskInput.value.trim()
    if(taskText == "") {
        alert("Enter something. It cannot be empty");
        return
    }

    

    var listItem = document.createElement('li')
    var taskSpan = document.createElement('span')
    taskSpan.textContent = taskText;

    // var deleteButton = document.createElement('button')
    // deleteButton.textContent = taskText

    var deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete"

    listItem.appendChild(taskSpan)
    listItem.appendChild(deleteButton)

    taskList.appendChild(listItem)

    deleteButton.addEventListener('click',deleteTask)
    
    // console.log(taskText);
    
}
addTaskButton.addEventListener("click",addTask)

taskInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        addTask()
    }
})


function deleteTask(e) {
    console.log(e.target.parentNode.remove());
    
}

