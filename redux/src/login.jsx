import React from "react";
import {useDispatch} from "react-redux"
import { login,logout } from "./features/user";


const Login=()=>{
    const dispatch=useDispatch();
    return(
        <div>
            <button onClick={()=> dispatch(login({name:"Bharath" , age:22 , email:"bharath@gmail.com"}))}>Login</button>
            <button onClick={()=> dispatch(logout())}>logout</button>
        </div>
    )
}
export default Login;