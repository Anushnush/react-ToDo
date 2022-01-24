import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Registr from './Components/Registr';
import Button from './Components/Button';

function App() {
  const [isOpen, setIsOpen]=useState(false)

  //mount
  useEffect(()=> {
    console.log("mount");
  }, [])

  //update
  useEffect (()=>{
    console.log("update");
  },[isOpen])

  //unmount
  useEffect(()=> {
  return ()=> {
    console.log("hello");
  }

  }, [])
  const handleOpen= ()=> {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Nav/>
      <Button isOpen={isOpen} handleOpen={handleOpen} />
      <Registr/>
    </>
  );
}
export default App;
