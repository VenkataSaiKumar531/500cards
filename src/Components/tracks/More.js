import React from 'react';
import {Link } from "react-router-dom";

const More =(props)=>{
    console.log("Finally Link props are",props)
    
    return(
        <>
        <h3> I am more Component</h3>
        <p> Thank you for visit Jithu!! Teacher</p>

        <Link to='/'>HOME</Link>

        </>
        
    )
}
export default More;