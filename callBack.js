// callstack and eventloop

// const a = "a";
// const b = "b";
// const c = "c";

// console.log(a);
// console.log(b);
// console.log(c);

///Java script executes one by one

// function one() {
//   //1st call stack
//   console.log("one");
// }
// function two() {
//   setTimeout(function () {
//     //3rd eventloop --- settimeout and addeventlister  -- eventhrough 0 timing
//     console.log("two");
//   }, 0);
// }
// function three() {
//   //2nd call stack
//   console.log("three");
// }

// one();
// two();
// three();

// Sync - will execute who is faster

const posts = [
  { title: "post 1", body: "this is post one" },
  { title: "post 2", body: "this is post two" },
];

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000); //eventloop
//   //   console.log(posts);
// }

// function getPost() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach(function (post) {
//       output += `
//         <li>${post.title}</li>`;
//     });
//     console.log(posts);
//     document.body.innerHTML = output;
//   }, 1000);
// }
// createPost({ title: "post 3", body: "this is post three" });
// getPost();

// GetPostWontRun becuse of sync

//Async

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000); //eventloop
  //   console.log(posts);
}

function getPost() {
  setTimeout(function () {
    let output = "";
    posts.forEach(function (post) {
      output += `
            <li>${post.title}</li>`;
    });
    console.log(posts);
    document.body.innerHTML = output;
  }, 1000);
}
createPost({ title: "post 3", body: "this is post three" }, getPost);
