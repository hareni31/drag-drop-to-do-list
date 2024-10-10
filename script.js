/* Custom Dragula JS */
dragula([
    document.getElementById("to-do"), 
    document.getElementById("doing"), 
    document.getElementById("done"), 
    document.getElementById("trash")
]);

/* Vanilla JS to add a new task */
function addTask() {
    var inputTask = document.getElementById("taskText").value;
    if (inputTask.trim() !== "") { // Check if task is not empty
        document.getElementById("to-do").innerHTML += "<li class='task'><p>" + inputTask + "</p></li>";
        document.getElementById("taskText").value = "";
    } else {
        alert("Task cannot be empty!");
    }
}

/* Vanilla JS to delete tasks in 'Trash' column */
function emptyTrash() {
    document.getElementById("trash").innerHTML = "";
}
