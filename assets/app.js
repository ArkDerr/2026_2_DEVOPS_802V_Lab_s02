document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("last-load");
  if (el) el.textContent = new Date().toLocaleTimeString("es-CL");
});
