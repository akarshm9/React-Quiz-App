import { React } from 'react';
import Ques from './Quespage';
import "./App.jsx"
export default function LandingPage(props) {
    const End=()=>{
        document.getElementById('notification').innerHTML=`<p className="red" style="color:red;">Quiz Aborted! Unable to show results</p>`
        setTimeout(() => {
            document.getElementById('notification').innerHTML=``;
        }, 4000);
        document.write("Sorry you have aborted the Quiz")
    }
    const startNotification=()=>{
        
        document.getElementById('notification').innerHTML=`<p className="red" style="color:red;">Quiz started! Complete it in 5 minutes</p>`
      
        setTimeout(() => {
            document.getElementById('notification').innerHTML=``;
        }, 4000);
        setTimeout(() => {
            document.write("Sorry Time is Over")
          }, 300000)
    }
    return (
        <div id="page">
            <div className="buttons">
                <button id='start' onClick={startNotification}>Start</button>
                <button id='end' onClick={End}>Abort Quiz</button>
            </div>
     <div id="notification"></div>
        </div>
    )
}
