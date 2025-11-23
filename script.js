window.addEventListener("load", () => {
  setTimeout(() => {
    const popup = document.getElementById("popup");
    if (popup) popup.style.display = "block";
  }, 3000);
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function showEmailForm() {
  document.getElementById("emailForm").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document