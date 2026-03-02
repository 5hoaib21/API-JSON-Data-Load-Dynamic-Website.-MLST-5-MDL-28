const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPost(data));
};
//array of object
// const displayPost = (posts) => {
//   //1. get the container where child is append
//  const postContainer = document.getElementById("post-container")
//  postContainer.innerHTML = "";

// posts.forEach(element => {

//   //2. create html element
//   const li =  document.createElement("li");
//   li.innerText = element.title;

//   //3. add LI into container.
//   postContainer.appendChild(li)
//   });
// };

// {
//     "userId": 10,
//     "id": 94,
//     "title": "qui qui voluptates illo iste minima",
//     "body": "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
// }

const displayPost = (posts) => {
  //1. get the container and empty the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    //2. create element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
  <div class="post-card">
        <h2>${post.title}</h2>
        <p>
         ${post.body}
        </p>
      </div>
  `;

  //3. append the child to the container.
    postContainer.append(postCard)

  });
};


loadPost();