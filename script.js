const navItems = [...document.querySelectorAll("#sidebar ul li")];

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(el => el.classList.remove("active"));
    item.classList.add("active");
  });
});

function toggleMenu() {
  const menu = document.querySelector("#burger_menu ul");
  menu.classList.toggle("active");
}

// Collapse burger menu on navigation link click
document.querySelectorAll("#burger_menu ul li a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.querySelector("#burger_menu ul");
    menu.classList.remove("active");
  });
});
