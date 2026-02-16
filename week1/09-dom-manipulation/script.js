function addItem() {
    let list = document.getElementById("todo-list");
    let text =prompt("Enter the task to be added:");

    if (text!==null && text.trim()!=="") {
        let li = document.createElement("li");
        li.textContent = text;
        li.style.color = "purple";
        li.style.fontSize = "20px";
        li.style.fontFamily = "Arial, sans-serif";
        li.style.cursor = "pointer";
        list.appendChild(li);
    }
    else {
        alert("No task entered.");
    }
}

let list = document.getElementById("todo-list");
list.style.listStylePosition = "inside";
list.style.textAlign = "left";
list.style.width = "100%";
list.style.paddingLeft = "670px";
list.style.boxSizing = "border-box";

let heading=document.querySelector("h2");
heading.style.color="#ffffff";
heading.style.textShadow="2px 2px 4px #000000";
heading.style.fontFamily="Georgia, serif";
heading.style.marginBottom="10px";  


document.body.style.backgroundColor = "#2c94c4ff";
document.body.style.fontFamily = "Verdana, sans-serif";
document.body.style.textAlign = "center";   
document.body.style.color = "#333";
document.body.style.fontSize = "16px";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.margin = "0";
document.body.style.minHeight = "100vh";



