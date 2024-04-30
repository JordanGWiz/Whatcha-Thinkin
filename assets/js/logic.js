//  Set up an event listener for the 'DOMContentLoaded' event, which triggers once the entire HTML document is fully loaded.
document.addEventListener("DOMContentLoaded", function () {
  console.log("Document is ready!");
  const checkBox = document.querySelector('.switch input[type="checkbox"]');

  // Checks if 'darkMode' is stored in localStorage and is set to "true".
  if (localStorage.getItem("darkMode") === "true") {
    checkBox.checked = true;
    document.body.classList.add("dark-mode");
  }

  // Adds an event listener to the checkbox for the 'change' event.
  checkBox.addEventListener("change", function () {
    if (this.checked) {
      // If the checkbox is checked
      console.log("Switched to dark mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "true");
    } else {
      // If the checkbox is not checked
      console.log("Switched to light mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "false");
    }
  });
});
