// This event listener waits for the DOM content to be fully loaded before executing the code inside the arrow function.
document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the input field for new task descriptions by its id
  const newTaskDescription = document.getElementById("new-task-description");
  
  // Retrieve the unordered list where tasks will be listed by its id
  const theList = document.getElementById("tasks");
  
  // Retrieve the form element for creating new tasks by its id
  const createTaskForm = document.getElementById("create-task-form");

  // Add an event listener to the createTaskForm that listens for the form submission and calls createNewTask function
  createTaskForm.addEventListener("submit", createNewTask);

  // This function creates a new task when the form is submitted
  function createNewTask(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Create a new list item element to represent the new task
    const newTask = document.createElement("li");
    
    // Set the text content of the new task to the value entered in the new task description input field
    newTask.innerText = newTaskDescription.value;
    
    // Call the createButton function to create a delete button for the new task
    createButton(newTask);
    
    // Append the new task to the list of tasks
    theList.appendChild(newTask);
    
    // Reset the form after submitting
    event.target.reset();
  }

  // This function creates a delete button for a given task
  function createButton(task) {
    // Create a new button element
    const btn = document.createElement("button");
    
    // Set the text content of the button to "X"
    btn.innerText = "X";
    
    // Append the button to the task
    task.appendChild(btn);
    
    // Add an event listener to the button that listens for a click event and calls deleteTask function
    btn.addEventListener("click", deleteTask);
  }

  // This function deletes a task when its delete button is clicked
  function deleteTask(e) {
    // Retrieve the parent element of the clicked button, which is the task to be deleted
    const selectedTask = e.target.parentElement;
    
    // Remove the selected task from the list of tasks
    theList.removeChild(selectedTask);
  }
});