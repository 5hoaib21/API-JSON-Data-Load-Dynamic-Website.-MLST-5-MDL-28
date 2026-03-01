const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    //promise of response
    .then((res) => res.json())
    //promise of json data
    .then((data) => console.log(data));
};

// const loadPost = ()=>{
//   const url = "https://jsonplaceholder.typicode.com/posts"
//   fetch(url)
//   .then((res)=> res.json())
//   .then((data)=>console.log(data))
// }




const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayPost(json));
};


const displayPost = (posts)=>{
posts.forEach(post => {
  console.log(post);
});
}





