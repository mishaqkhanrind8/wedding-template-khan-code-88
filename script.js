// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const openBtn = document.getElementById("respond-by");
  const closeBtns = document.querySelectorAll(".close-modal");

  // 🔹 Hide modal by default
  modal.style.display = "none";

  // 🔹 Open modal when "RSVP Now" button is clicked
  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // 🔹 Close modal when any button with .close-modal is clicked
  closeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });

  // 🔹 Optional: close modal when user clicks outside of it
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
