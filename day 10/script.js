// Get the task form and input from the page
const taskForm = document.querySelector(".task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.querySelector(".task-list");
const taskCount = document.getElementById("task-count");

console.log(taskList);
console.log(taskList.children.length);

// Listen for form submission
taskForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the page from refreshing

    const taskText = taskInput.value; // Get what the user typed

    if (taskText === "") {
        return;
    }

    const taskItem = document.createElement("li"); // Create a new list item

    taskItem.textContent = taskText; // Put the task text inside it

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    taskItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        taskItem.remove();

        taskCount.textContent =taskList.children.length;
    });

    taskItem.addEventListener("click", function () {
        taskItem.classList.toggle("completed");
    });
    taskList.appendChild(taskItem); // Add the task to the page

    taskCount.textContent = taskList.children.length;

    taskInput.value = "";
});