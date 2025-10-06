// Efek fade in saat scroll
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
});
// --- Toggle Tema Terang / Gelap ---
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Cek tema tersimpan di localStorage
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleBtn.textContent = "☀️";
} else {
  toggleBtn.textContent = "🌙";
}

// Ganti tema saat tombol diklik
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");

  toggleBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
