const usernameEl = document.querySelector("#username");
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#textarea");
const submitButton = document.querySelector("#submit");
let postCollection = JSON.parse(localStorage.getItem("post")) || [];

document
  .getElementById("post-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (
      usernameEl.value === "" ||
      titleEl.value === "" ||
      contentEl.value === ""
    ) {
      alert("Please fill out your username, title, and blog text");
    } else {
      const blogPost = {
        username: usernameEl.value,
        title: titleEl.value,
        content: contentEl.value,
      };
      postCollection.push(blogPost);

      localStorage.setItem("post", JSON.stringify(postCollection));

      window.location.replace("blog.html");
    }
  });
