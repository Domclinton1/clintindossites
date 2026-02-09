const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const backdrop = document.getElementById("menuBackdrop");

if (hamburger && menu && backdrop) {
  function closeMenu() {
    menu.classList.remove("active");
    backdrop.classList.remove("active");
  }

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
    backdrop.classList.add("active");
  });

  backdrop.addEventListener("click", closeMenu);

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}
