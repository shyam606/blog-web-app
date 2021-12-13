import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/AllBlog.css';

//
function Allblog() {
  let data = JSON.parse(localStorage.getItem('data'))
  const [blogs,allBlogs] = useState(data);
  return(<>
    <h1>Add blogs from home section</h1>
  {
    blogs.map((val,ind)=>{
      return(<>
      <div className="all_blog" key={ind}>
        <h2>{val.title}<Link to={`/blog/${ind}`}>View..</Link></h2>
    </div> 
      </>)
    })
  }
 
    
  </>
  )
}
export default Allblog;
