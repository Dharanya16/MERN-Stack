const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyState = document.getElementById("emptyState");

const searchInput = document.getElementById("searchInput");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

const modalOverlay = document.getElementById("modalOverlay");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const confirmModalBtn = document.getElementById("confirmModalBtn");

const themeBtn = document.getElementById("themeBtn");

const STORAGE_KEY = "todo_app_v1";

let tasks = [];
let draggedId = null;

// -----------------------------
// Local Storage
// -----------------------------
function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// -----------------------------
// Helpers
// -----------------------------
function uid() {
  return Date.now().toString() + Math.random().toString(16).slice(2);
}

function updateEmptyState() {
  const visibleTasks = [...taskList.children].filter(li => li.style.display !== "none");
  emptyState.style.display = visibleTasks.length === 0 ? "block" : "none";
}

function normalize(str) {
  return str.trim().toLowerCase();
}

// -----------------------------
// Render
// -----------------------------
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "task";
    li.dataset.id = task.id;
    li.draggable = true;

    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <div class="task-left">
        <span class="task-text"></span>
      </div>

      <div class="task-actions">
        <button class="icon-btn complete" title="Complete">✓</button>
        <button class="icon-btn delete" title="Delete">✕</button>
      </div>
    `;

    li.querySelector(".task-text").textContent = task.text;

    // Drag events
    li.addEventListener("dragstart", () => {
      draggedId = task.id;
      li.classList.add("dragging");
    });

    li.addEventListener("dragend", () => {
      draggedId = null;
      li.classList.remove("dragging");
      [...taskList.children].forEach(x => x.classList.remove("over"));
      saveToStorage();
    });

    li.addEventListener("dragover", (e) => {
      e.preventDefault();
      li.classList.add("over");
    });

    li.addEventListener("dragleave", () => {
      li.classList.remove("over");
    });

    li.addEventListener("drop", (e) => {
      e.preventDefault();
      li.classList.remove("over");

      const targetId = li.dataset.id;
      if (!draggedId || draggedId === targetId) return;

      const draggedIndex = tasks.findIndex(t => t.id === draggedId);
      const targetIndex = tasks.findIndex(t => t.id === targetId);

      const [draggedTask] = tasks.splice(draggedIndex, 1);
      tasks.splice(targetIndex, 0, draggedTask);

      saveToStorage();
      renderTasks();
      applyFilter(); // keep filter after reorder
    });

    taskList.appendChild(li);
  });

  applyFilter();
  updateEmptyState();
}

// -----------------------------
// Add Task
// -----------------------------
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = taskInput.value.trim();
  if (!text) return;

  tasks.unshift({
    id: uid(),
    text,
    completed: false
  });

  taskInput.value = "";
  saveToStorage();
  renderTasks();
});

// Enter key support (already works with submit)
// but keeping this for safety
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // form submit handles it
  }
});

// -----------------------------
// Complete / Delete (Event Delegation)
// -----------------------------
taskList.addEventListener("click", (e) => {
  const li = e.target.closest(".task");
  if (!li) return;

  const id = li.dataset.id;

  // Complete
  if (e.target.classList.contains("complete")) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    task.completed = !task.completed;
    saveToStorage();
    renderTasks();
  }

  // Delete
  if (e.target.classList.contains("delete")) {
    tasks = tasks.filter(t => t.id !== id);
    saveToStorage();
    renderTasks();
  }
});

// -----------------------------
// Live Search Filter
// -----------------------------
function applyFilter() {
  const q = normalize(searchInput.value);

  [...taskList.children].forEach(li => {
    const id = li.dataset.id;
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const match = normalize(task.text).includes(q);
    li.style.display = match ? "" : "none";
  });

  updateEmptyState();
}

searchInput.addEventListener("input", applyFilter);

// -----------------------------
// Clear Completed (Modal)
// -----------------------------
function openModal() {
  modalOverlay.classList.remove("hidden");
}

function closeModal() {
  modalOverlay.classList.add("hidden");
}

clearCompletedBtn.addEventListener("click", () => {
  const hasCompleted = tasks.some(t => t.completed);
  if (!hasCompleted) return;

  openModal();
});

cancelModalBtn.addEventListener("click", closeModal);

confirmModalBtn.addEventListener("click", () => {
  tasks = tasks.filter(t => !t.completed);
  saveToStorage();
  renderTasks();
  closeModal();
});

// Click outside modal to close
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});

// Escape key close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
    closeModal();
  }
});

// -----------------------------
// Theme Toggle (CSS Variables)
// -----------------------------
function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);

  if (isDark) {
    themeBtn.textContent = "☀️ Light";
    localStorage.setItem("todo_theme", "dark");
  } else {
    themeBtn.textContent = "🌙 Dark";
    localStorage.setItem("todo_theme", "light");
  }
}

themeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  setTheme(!isDark);
});

// -----------------------------
// Init
// -----------------------------
(function init() {
  // Load tasks
  tasks = loadFromStorage();

  // Load theme
  const savedTheme = localStorage.getItem("todo_theme");
  setTheme(savedTheme === "dark");

  renderTasks();
})();
