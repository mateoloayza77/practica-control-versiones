// ===== Año dinámico en el footer =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Menú de navegación responsive =====
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

// Cerrar el menú al hacer clic en un enlace (móvil)
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("is-open"));
});

// ===== Contador de interacciones =====
let clicks = 0;
const counterHint = document.getElementById("counterHint");

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    clicks++;
    counterHint.textContent = `Has interactuado ${clicks} ${
      clicks === 1 ? "vez" : "veces"
    } con el sitio.`;
  });
});

// ===== Formulario de contacto =====
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();

  if (name === "") {
    formMessage.textContent = "Por favor, escribe tu nombre.";
    return;
  }

  formMessage.textContent = `¡Hola, ${name}! Gracias por probar VersionLab. 🎉`;
  form.reset();
});

// ===== Mensaje de bienvenida en consola =====
console.log("%c¡Bienvenido a VersionLab!", "color:#58a6ff; font-size:16px; font-weight:bold;");
console.log("Práctica de control de versiones — edita estos archivos y haz tu primer commit.");
