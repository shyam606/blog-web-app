import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/SingleBlog.css'
function SingleBlog() {
    const {id} = useParams();
    // console.log(useParams());
    let blogs = JSON.parse(localStorage.getItem('data'))
    const [single,setSingle] = useState(blogs);
    
    return (
        <>
        <h1>single blogs</h1>
        <div className='single_blog'>
            <h1>{single[id].title}</h1>
            <p>{single[id].content}</p>
         </div>      
        </>
    )
}

export default SingleBlog
