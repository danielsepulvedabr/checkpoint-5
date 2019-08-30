import React from 'react';
import './App.css';
import Title from './Title'
import MyButton from './MyButton'
import Photo from './Photo'
import image from './checkpoint.jpg'
function App() {
  return (
    <div className="App"> 
   
    <Title style={{fontSize:"15px",color:"blue"}} title="Daniel Sepulveda"></Title>
    <Photo style={{height:"200px",width:"200px"}} src={image}/><br></br>
    
     <MyButton label="My Facebook" style={{backgroundColor:"blue",height:"40px",width:"80px"}} onSimpleClick={()=>{
       window.location = "https://www.facebook.com/profile.php?id=100011153613375"
      }}>My Facebook</MyButton> 

      <MyButton label="My LinkedIn" style={{backgroundColor:"blue",height:"40px",width:"80px"}} onSimpleClick={()=>{
       window.location = "https://www.linkedin.com/in/daniel-sepulveda-27aa70190/"
      }}></MyButton>
     
     
  </div>

    
  );
  }

export default App;
