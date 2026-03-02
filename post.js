const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPost(data));
};
//array of object
const displayPost = (posts) => {
  //1. get the container where child is append
 const postContainer = document.getElementById("post-container")
//  console.log(postContainer);


posts.forEach(element => {
  // console.log(element.title);
  
  //2. create html element 
  const li =  document.createElement("li");
  li.innerText = element.title;
  // console.log(li);


  //3. add LI into container.
  postContainer.appendChild(li)
  });
};
