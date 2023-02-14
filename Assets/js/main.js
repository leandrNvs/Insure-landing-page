const navbar = document.querySelector("nav");
const toggleButton = document.querySelector('button[aria-label="Toggle menu"]');

let isMenuOpen = 0;

toggleButton.addEventListener("click", function () {
  const img = this.querySelector("img");

  navbar.classList.toggle("active");

  if (isMenuOpen === 0) {
    img.src = "Assets/images/icon-close.svg";
    isMenuOpen = 1;
  } else {
    img.src = "Assets/images/icon-hamburger.svg";
    isMenuOpen = 0;
  }
});
