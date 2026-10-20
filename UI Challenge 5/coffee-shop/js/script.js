const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const toast = document.querySelector(".toast");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

document.querySelectorAll(".buy-button").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.closest(".shake-card").querySelector("h3").textContent;
    showToast(`${product} added to your basket!`);
  });
});

document.querySelector(".search-button").addEventListener("click", () => {
  const query = window.prompt("What would you like to find?");
  if (query && query.trim()) {
    const match = [...document.querySelectorAll(".category-card h3, .shake-card h3, .blog-card h3")]
      .find((item) => item.textContent.toLowerCase().includes(query.trim().toLowerCase()));
    if (match) {
      match.scrollIntoView({ behavior: "smooth", block: "center" });
      showToast(`Found: ${match.textContent}`);
    } else {
      showToast(`No matching items for “${query.trim()}”`);
    }
  }
});
