const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".Navbar ul");
toggle.addEventListener("click", () => menu.classList.toggle("open"));
