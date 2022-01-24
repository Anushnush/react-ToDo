import React,{useState} from "react";

function Button({isOpen,handleOpen}){
    return(
        <>
        <button onClick={handleOpen}>Click</button>
            {isOpen && <h2>Hello</h2>} 
        </>
    )
}

export default Button