import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './Home.css';





const Home = () => {
    const [posts, setPosts] = useState([]);
     console.log(posts);

     useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));

     },[]);
    return (
        <div>
               <h1>Home</h1>
               <h1>Post:{posts.length}</h1>
             {
                 posts.map(post =><Post post={post}></Post>)
             }
              
        </div>
    );
};

export default Home;