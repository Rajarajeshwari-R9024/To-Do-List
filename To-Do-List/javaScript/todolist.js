function addTask() {
  var taskinput = document.getElementById("taskinput").value;
  var taskList = document.getElementById("tasklist");
  if (taskinput == "") {
    alert("Please enter the task");
    return;
  }

  var listItems = document.createElement("li");
  listItems.innerText = taskinput;
  taskList.appendChild(listItems);

  var buttoncontainer = document.createElement("div");
  listItems.appendChild(buttoncontainer);
  buttoncontainer.className = "task-button";

  var deleteButton = document.createElement("button");
  buttoncontainer.appendChild(deleteButton);
  deleteButton.innerText = "Delete";
  deleteButton.onclick = function () {
    taskList.removeChild(listItems);
  };

  var completeButton = document.createElement("button");
  buttoncontainer.appendChild(completeButton);
  completeButton.innerText = "Complete";
  completeButton.onclick = function () {
    listItems.classList.toggle("Complete");
  };
  taskinput = document.getElementById("taskinput");
  taskinput.value = "";
}
