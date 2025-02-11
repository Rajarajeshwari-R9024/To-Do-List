function addTask() {
  var taskInput = document.getElementById("taskinput");
  var taskList = document.getElementById("tasklist");
  var taskValue = taskInput.value.trim(); // Trim whitespace

  if (taskValue === "") {
    alert("Please enter the task");
    return;
  }

  var listItem = document.createElement("li");
  listItem.textContent = taskValue;

  var buttonContainer = document.createElement("div");
  buttonContainer.className = "task-button";

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    taskList.removeChild(listItem);
  };

  var completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.onclick = function () {
    listItem.classList.contains("complete"); // Ensure CSS matches 'complete'
  };

  buttonContainer.append(deleteButton, completeButton);
  listItem.append(buttonContainer);
  taskList.appendChild(listItem);

  c;
}
