import React, { useEffect, useState } from 'react';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Allblog from './Components/Allblog';
import Navbar from './Components/Navbar';
import Blog from './Components/Blog';
import Login from './Components/Login';
import SingleBlog from './Components/SingleBlog';
import Error from './Components/Error';
function App() {
    const [adData,setAdData] = useState([]);
   
    console.log(adData);
    const func=(blog)=>{
        setAdData((preVal)=>{
            return [...preVal,blog]
        });
    } 
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Blog data={func}/>}/>
            <Route path='/allblogs' element={<Allblog/>}/>
            <Route path='/blog/:id' element={<SingleBlog/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App
