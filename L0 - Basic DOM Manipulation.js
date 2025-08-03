const ul = document.querySelector("#myList");
const button = document.querySelector("#addBtn");

button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";

  const currentCount = ul.children.length + 1;

  if (currentCount % 2 === 1) {
    // Odd - bold and blue
    newItem.style.fontWeight = "bold";
    newItem.style.color = "blue";
  } else {
    // Even - italic and red
    newItem.style.fontStyle = "italic";
    newItem.style.color = "red";
  }

  ul.appendChild(newItem);
});
