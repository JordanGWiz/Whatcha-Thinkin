document.addEventListener("DOMContentLoaded", function () {
  console.log("Document is ready!");
  const checkBox = document.querySelector('.switch input[type="checkbox"]');

  if (localStorage.getItem("darkMode") === "true") {
    checkBox.checked = true;
    document.body.classList.add("dark-mode");
  }

  checkBox.addEventListener("change", function () {
    if (this.checked) {
      console.log("Switched to dark mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      console.log("Switched to light mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  });
});
