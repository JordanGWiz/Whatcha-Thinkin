document.addEventListener("DOMContentLoaded", function () {
  console.log("Document is ready!");
  const checkBox = document.querySelector('.switch input[type="checkbox"]');

  checkBox.addEventListener("change", function () {
    if (this.checked) {
      console.log("Switched to dark mode");
      document.body.classList.add("dark-mode");
    } else {
      console.log("Switched to light mode");
      document.body.classList.remove("dark-mode");
    }
  });
});
