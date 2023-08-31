// Dropdown Menu - Also works for mobile menu
function createMenu() {
  const numLinks = 3;
  const mainContent = document.querySelector(".main-content");
  const dropdownDiv = document.createElement("div");
  const dropdownBtn = document.createElement("button");
  const dropdownContentDiv = document.createElement("div");

  dropdownBtn.textContent = "Hover Me";

  dropdownDiv.classList.add("dropdown");
  dropdownBtn.classList.add("dropdownBtn");
  dropdownContentDiv.classList.add("dropdown-content");

  mainContent.appendChild(dropdownDiv);
  dropdownDiv.appendChild(dropdownBtn);
  dropdownDiv.appendChild(dropdownContentDiv);

  for (i = 0; i < numLinks; i++) {
    const l = document.createElement("a");
    l.href = "#";
    l.textContent = `Link ${i + 1}`;
    dropdownContentDiv.appendChild(l);
  }
}

createMenu();
