function addElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todoInput").value;
    if (inputValue === '') {
        alert("You must write something!");
        return;
    }

    li.textContent = inputValue; // Set text content directly
    document.getElementById("todoList").appendChild(li);
    document.getElementById("todoInput").value = "";

    // Create a checkbox and prepend it to each list item
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "taskCheckbox";
    checkbox.onclick = function() {
        if (this.checked) {
            this.parentElement.classList.add('checked');
        } else {
            this.parentElement.classList.remove('checked');
        }
    };

    li.prepend(checkbox); // Add the checkbox before the task text
}

// Allow adding items with the "Enter" key
document.getElementById("todoInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.querySelector("button").click();
    }
});
