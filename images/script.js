const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
    navbar.style.backgroundColor = "rgba(72, 61, 139, 0.98)";
  } else {
    navbar.classList.remove("shadow-lg");
    navbar.style.backgroundColor = "darkslateblue";
  }

  let current = "";
  sections.forEach((section) => {
    if (pageYOffset >= section.offsetTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) link.classList.add("active");
  });
});

window.addEventListener("load", () => {
  const targets = [".jumbotron img", ".display-4", ".lead", ".action-btn"];
  targets.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => el.classList.add("element-visible"));
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("element-visible");
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll("section, .card").forEach((el) => {
  el.classList.add("element-hidden");
  revealObserver.observe(el);
});

const galleryCards = document.querySelectorAll(".gallery-card");
const modalImage = document.getElementById("modalImage");

galleryCards.forEach((card) => {
  card.addEventListener("click", function () {
    const imgSrc = this.getAttribute("data-img");
    modalImage.setAttribute("src", imgSrc);
  });
});

const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = this.querySelector("button");
  btn.innerHTML = "Mengirim...";
  setTimeout(() => {
    alert("Pesan Terkirim!");
    this.reset();
    btn.innerHTML = "Kirim";
  }, 1500);
});
