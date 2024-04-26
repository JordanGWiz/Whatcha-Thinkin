function goBack() {
  window.location.replace("index.html");
}

document.addEventListener("DOMContentLoaded", function () {
  const headingOutBtn = document.getElementById("heading-out-btn");

  headingOutBtn.addEventListener("click", function () {
    goBack();
  });
});
