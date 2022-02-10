import React from "react";
import './App.css';
import  jeremy from'./pics/image-jeremy.png';
import work from './pics/icon-work.svg';
import play from './pics/icon-play.svg';
import study from './pics/icon-study.svg';
import exercise from './pics/icon-exercise.svg';
import social from './pics/icon-social.svg';
import self from './pics/icon-self-care.svg';

function App() {
  return (
    <div className="App">
      <div className="flex-container">
    <div className="Div">
        <img  src={jeremy} alt="img"></img>
        <p>report for</p>
        <h1>Jeremy <br/>
             Robson</h1>
             <p>
        <p>daily</p>
        <p>weekly</p>
        <p>Monthly</p> </p>
      </div>
      <div className="smalldivs">
<div className="alldivs">
    <img src={work} alt="img1"></img>
    <p>Work</p> 
        <h1> 32hrs</h1>
        <p>Last week - 36hrs</p> </div>
    

<div className="alldivs">
    <img src={play} alt="img2"></img>
    <p>Play</p>
        <h1> 10hrs</h1>
        <p>Last week - 8hrs</p>
    
</div>
<div className="alldivs">
    <img src={study} alt="img3"></img>
    <p>study</p> 
        <h1> 4hrs</h1>
        <p>Last week - 7hrs</p>
    
</div>

<div className="alldivs">
    <img src={exercise} alt="img4"></img>
    <p>Exercise</p> 
        <h1> 4hrs</h1>
        <p>Last week - 5hrs</p>
    
</div>
<div className="alldivs">
    <img src={social} alt="img5"> </img>
    <p>Social</p> 
        <h1> 5hrs</h1>
        <p>Last week - 10hrs</p>
    
</div>

<div className="alldivs">
    <img src={self} alt="img6"></img>
    <p>Self Care</p>
        <h1> 2hrs</h1>
        <p>Last week - 2hrs</p>
    
</div> </div></div>
    </div>
  );
}

export default App;
