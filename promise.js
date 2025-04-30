//Promise the alternative for callBackFunc

const posts = [{ title: "post-1" }, { title: "post-2" }];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((e) => {
      console.log(e);
      output += `<li>${e.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
createPost({ title: "post-3" })
  .then(getPost)
  .catch((err) => console.log(err));
