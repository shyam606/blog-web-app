import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import '../css/Blog.css';

//get data from localStorage
function getData(){
      let list = localStorage.getItem('data');
        if(list){
            return JSON.parse(localStorage.getItem('data'));
        }else{
            return []
        }
}
// MAIN component
function Blog(props) {
    const [local,setLocal] = useState(getData())  //for storage data
    const [msg,setmsg] =  useState("");  // for data add or note
    const [blog,setBlog] = useState({       // input field data
        title:"",
        content:"",
    });
// set data in localStorage
   useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(local))
   },[local])
// localStorage.clear("data")

// onChange
    const InputEvent=(event)=>{
        const {value,name} = event.target;
        setBlog((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }
    
// onkeyChange
const keyboardClick = (event)=>{
    //it triggers by pressing the enter key
    if (event.keyCode === 13) {
        addBlog();
    }
}
// AddData button
    const addBlog=()=>{
        if(blog.title==="" || blog.content==="" ){
            setmsg("add title or content")
        }
        else{
            props.data(blog);
            setBlog({
                title:"",
                content:"",
            })
            setmsg("Blog Add.. check All blog section")
            //stateChnage local storage data 
            setLocal((preData)=>{
                return [...preData,blog]
             
            })
         
        }

    }  
    return (<>
                    <h2 className='blog_h2'>{msg}</h2>
                <div className="add_blogs">
                <form>
                    <input 
                    type="text" 
                    placeholder="Title" 
                    value={blog.title}  
                    name="title"
                    onChange={InputEvent} 
                    autoComplete="off"/>
                    <textarea
                    rows="" 
                    column="" 
                    value={blog.content}
                    name="content"
                    onChange={InputEvent}
                    placeholder="Write a Blog..">
                    </textarea>
                    <Button onClick={addBlog} onKeyPress={keyboardClick}><AddIcon className="circle_btn"/></Button>
                </form>
                </div>
            
                </>)
}

export default Blog;
