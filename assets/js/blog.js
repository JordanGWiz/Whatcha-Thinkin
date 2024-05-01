function goBack() {
  window.location.replace("index.html");
}

document.addEventListener("DOMContentLoaded", function () {
  const headingOutBtn = document.getElementById("heading-out-btn");

  headingOutBtn.addEventListener("click", function () {
    goBack();
  });
});

const postList = document.querySelector("#postsContainer");
let posts = [];

function renderPosts() {
  postList.innerHTML = "";
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];

    const article = document.createElement("article");

    const h2 = document.createElement("h2");
    h2.className = "title";
    h2.textContent = post.title;

    const p = document.createElement("p");
    p.className = "content";
    p.textContent = post.content;

    const footer = document.createElement("footer");
    footer.className = "author";
    footer.textContent = "Posted by: " + post.username;

    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(footer);

    postList.appendChild(article);
  }
}

function init() {
  const storedPosts = JSON.parse(localStorage.getItem("post"));

  if (storedPosts !== null) {
    posts = storedPosts;
  }

  renderPosts();
}

init();
