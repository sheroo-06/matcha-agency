async function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');
  for (const el of includes) {
    const file = el.getAttribute('data-include');
    const resp = await fetch(file);
    if (resp.ok) {
      el.innerHTML = await resp.text();

      // Navbar functionality yahan bind karni hai
      const hamburger = el.querySelector("#hamburger");
      const menu = el.querySelector("#menu");
      const overlay = el.querySelector("#overlay");
      const closeBtn = el.querySelector("#closeBtn");

      if (hamburger && menu && overlay && closeBtn) {
        hamburger.addEventListener("click", () => {
          menu.classList.add("show");
          overlay.classList.add("show");
        });

        closeBtn.addEventListener("click", () => {
          menu.classList.remove("show");
          overlay.classList.remove("show");
        });

        overlay.addEventListener("click", () => {
          menu.classList.remove("show");
          overlay.classList.remove("show");
        });
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", includeHTML);
