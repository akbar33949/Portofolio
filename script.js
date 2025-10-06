// script.js

// Efek ketik otomatis di header
const text = "Web Developer | UI Designer | Mahasiswa";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.querySelector("header p").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("header p").textContent = "";
  typeEffect();
});

// Tombol mode gelap
const toggle = document.createElement("button");
toggle.textContent = "🌙 Mode Gelap";
toggle.style.position = "fixed";
toggle.style.bottom = "20px";
toggle.style.right = "20px";
toggle.style.padding = "10px 15px";
toggle.style.border = "none";
toggle.style.borderRadius = "8px";
toggle.style.cursor = "pointer";
document.body.appendChild(toggle);

let darkMode = false;
toggle.addEventListener("click", () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? "#222" : "#f5f8ff";
  document.body.style.color = darkMode ? "#fff" : "#333";
  toggle.textContent = darkMode ? "☀️ Mode Terang" : "🌙 Mode Gelap";
});
