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
  const form = document.getElementById("emailForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" }
    })
      .then(response => {
        if (response.ok) {
          form.reset();
          document.getElementById("confirmation").style.display = "block";
        } else {
          alert("Greška pri slanju. Pokušajte ponovo.");
