// Select and store elements into variables for easier access.
const usernameEl = document.querySelector("#username");
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#textarea");
const submitButton = document.querySelector("#submit");
let postCollection = JSON.parse(localStorage.getItem("post")) || [];

document
  .getElementById("post-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Checks if the username, title, or content are empty.
    if (
      usernameEl.value === "" ||
      titleEl.value === "" ||
      contentEl.value === ""
    ) {
      alert("Please fill out your username, title, and blog text");
    } else {
      // Create an object to represent the new blog post.
      const blogPost = {
        username: usernameEl.value,
        title: titleEl.value,
        content: contentEl.value,
      };

      // Add the new blog post to the collection of posts.
      postCollection.push(blogPost);
      // Update the 'post' item in localStorage with the new collection of posts.
      localStorage.setItem("post", JSON.stringify(postCollection));
      // Redirect the user to 'blog.html' after submission.
      window.location.replace("blog.html");
    }
  });
