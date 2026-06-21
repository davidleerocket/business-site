// Replace this with the Google Form or checkout URL when it is ready.
const intakeUrl = "mailto:team@thinkfastsolutions.com?subject=Start%20My%20Job%20Search%20Makeover";

document.querySelectorAll("[data-intake-link]").forEach((link) => {
  link.href = intakeUrl;
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("is-open", !isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
    });
  });
}
