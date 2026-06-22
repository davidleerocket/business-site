// Replace this with the Google Form or checkout URL when it is ready.
const intakeUrl = "https://forms.gle/8YMxXpUrsb2k589m9";

document.querySelectorAll("[data-intake-link]").forEach((link) => {
  link.href = intakeUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
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
