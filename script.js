const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Load from localStorage
window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => renderTask(task));
};

function renderTask(task) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = task.name;
  if (task.completed) span.classList.add("completed");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.addEventListener("change", () => {
    span.classList.toggle("completed");
    task.completed = checkbox.checked;
    saveTasks();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => {
    li.remove();
    removeTask(task);
    saveTasks();
  });

  li.append(checkbox, span, deleteBtn);
  taskList.appendChild(li);
}

function addTask() {
  const taskName = taskInput.value.trim();
  if (!taskName) return;

  const task = { name: taskName, completed: false };
  renderTask(task);
  saveTask(task);

  taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Save to localStorage
function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach(li => {
    const name = li.querySelector("span").textContent;
    const completed = li.querySelector("input").checked;
    tasks.push({ name, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task.name !== taskToRemove.name);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
