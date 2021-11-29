import './App.css';
import React,{useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import Albums from './Components/Albums';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Posts from './Components/Posts';


function App() {

  const [posts, setPosts] = useState([]);

  function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json=>setPosts(json))
    .catch(err=>console.error(err))  
  }

  useEffect(() => {
    getPosts()
  }, [])


  return (
    <div className="App">
     <Nav />
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<Posts postList={posts}/>} /> 
        <Route path="/albums" element={<Albums/>} />

     </Routes>

        
    </div>
  );
}

export default App;
