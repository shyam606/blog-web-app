import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../css/Login.css';
function Login() {
    const[form,setForm] = useState({
        user:"",
        mail:"",
    })
    const inputEvent=(event)=>{
        const{value,name} = event.target;
        setForm((preVal)=>{
            console.log(preVal);
            return{
                ...preVal,
                [name]:value,
            }
        })
    }
    return (
        <>  <div className='login'>
                    <h2>LogIn Form</h2>
                <form>
                    <input type="text" name ="user" value={form.user} placeholder='Enter Username' onChange={inputEvent}/>
                    <input type="email" name="mail" value={form.mail} placeholder='Enter Email' onChange={inputEvent}/>
                    <Button className='log_btn'>LogIn</Button>
                </form>
            </div>
       
        </>
    )
}

export default Login
