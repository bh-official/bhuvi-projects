function addItem() {
    let list = document.getElementById("todo-list");
    let text =prompt("Enter the task to be added:");

    if (text!==null && text.trim()!=="") {
        let li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
    }
    else {
        alert("No task entered.");
    }
}
