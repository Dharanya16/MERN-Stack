// Easy 1
document.getElementById("header-title").textContent = "My Awesome Page";

// Easy 2
document.querySelectorAll(".product-card").forEach(card => {
  card.style.border = "2px solid red";
  card.style.padding = "10px";
  card.style.marginTop = "8px";
  card.style.borderRadius = "10px";
});

// Easy 3
document.querySelectorAll("ul.menu li").forEach(li => {
  li.style.backgroundColor = "lightblue";
  li.style.marginTop = "6px";
  li.style.padding = "6px";
  li.style.borderRadius = "8px";
});

// Easy 4
const newBtn = document.createElement("button");
newBtn.textContent = "Click me!";
document.getElementById("controls").appendChild(newBtn);

// Medium 5
const cart = document.getElementById("cart");

const itemDiv = document.createElement("div");
itemDiv.className = "item";

const span = document.createElement("span");
span.textContent = "Apple";

const removeBtn = document.createElement("button");
removeBtn.textContent = "Remove";

itemDiv.appendChild(span);
itemDiv.appendChild(removeBtn);
cart.appendChild(itemDiv);

// Medium 6
const firstAvatar = document.querySelector("img.avatar");
firstAvatar.src =
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80";

// Medium 7
document.querySelectorAll(".article-body > p").forEach(p => {
  p.classList.add("highlight");
});

// Medium 8
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Medium 9
document.querySelectorAll('button[data-action="delete"]').forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) card.remove();
  });
});

// Medium-Hard 10 Todo List
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

addTodoBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.textContent = text;

  const del = document.createElement("button");
  del.textContent = "Delete";

  del.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(del);
  todoList.appendChild(li);

  todoInput.value = "";
});

// Hard 11 Event Delegation
document.getElementById("users-list").addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  console.log("Clicked user ID:", li.dataset.userId);
});

// Hard 12 Counter (not below 0)
let count = 0;
const countSpan = document.getElementById("count");

document.getElementById("plus").addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});

document.getElementById("minus").addEventListener("click", () => {
  if (count > 0) count--;
  countSpan.textContent = count;
});

// Hard 13 Live Filter
document.getElementById("search").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();

  document.querySelectorAll(".country").forEach(li => {
    const name = li.textContent.toLowerCase();
    li.style.display = name.includes(query) ? "" : "none";
  });
});

// Hard 14 Color Picker
document.querySelectorAll(".swatch").forEach(swatch => {
  swatch.addEventListener("click", () => {
    document.body.style.backgroundColor = swatch.dataset.color;
  });
});

// Hard 15 Drag & Drop Sortable
let draggedItem = null;

document.querySelectorAll("#sortable li").forEach(li => {
  li.addEventListener("dragstart", () => {
    draggedItem = li;
  });

  li.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  li.addEventListener("drop", () => {
    if (draggedItem && draggedItem !== li) {
      const parent = li.parentNode;

      const draggedIndex = [...parent.children].indexOf(draggedItem);
      const targetIndex = [...parent.children].indexOf(li);

      if (draggedIndex < targetIndex) {
        parent.insertBefore(draggedItem, li.nextSibling);
      } else {
        parent.insertBefore(draggedItem, li);
      }
    }
  });
});

// Hard 16 Modal
document.getElementById("open-modal").addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <h2>Modal Title</h2>
    <p>This is a modal created from scratch using JS.</p>
    <button id="close-modal">Close</button>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  function closeModal() {
    overlay.remove();
  }

  // overlay click close
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // close button click close
  modal.querySelector("#close-modal").addEventListener("click", closeModal);
});
