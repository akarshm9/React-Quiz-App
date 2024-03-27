
import { React } from "react";
import './App.css'
import "./index.css"
import Navbar from "./Nav";
import LandingPage from "./Page.jsx";
import Questions from "./Questions.json"
import Ques from "./Quespage.jsx"


function App() {

  let name = "Akarsh"
  let ques = [];
  ques[0] = Questions.questions[0].question;
  ques[1] = Questions.questions[1].question;
  ques[2] = Questions.questions[2].question;
  ques[3] = Questions.questions[3].question;
  ques[5] = Questions.questions[5].question;
  ques[6] = Questions.questions[6].question;
  ques[7] = Questions.questions[7].question;
  ques[8] = Questions.questions[8].question;
  ques[9] = Questions.questions[9].question;



  let start = document.getElementById('start');
  return (
    <>
      <Navbar />

      <LandingPage />
      <div className="block">

        <div className="container"> <Ques question={ques[0]} className="que" /></div>
        <div className="container"> <Ques question={ques[1]} className="que" /></div>
        <div className="container"> <Ques question={ques[2]} className="que" /></div>
      </div>

      <div className="block">
        <div className="container"> <Ques question={ques[3]} className="que" /></div>
        <div className="container"> <Ques question={ques[5]} className="que" /></div>
        <div className="container"> <Ques question={ques[6]} className="que" /></div>
      </div>

      <div className="block">
        <div className="container"> <Ques question={ques[7]} className="que" /></div>
        <div className="container"> <Ques question={ques[8]} className="que" /></div>
        <div className="container"> <Ques question={ques[9]} className="que" /></div>
      </div>


      <div className="answerBlock">
        <form action="http://localhost:3000/" method="POST" onSubmit={async (ans) => {
          let site = "http://localhost:3000/";
          let t = await fetch(site, { method: "post", body: JSON.stringify(ans) })
          let result = await t.json();
          console.log(result + "\nData saved");
          // alert("Data saved!!")
          // let m=resp.text()
          // console.log(m)
        }}>
          <div>
            <input type="text" name="uname" placeholder="Enter your name"/>
          </div>
          <div>
            <input type="text" name="answer1" className="box" placeholder="Enter the answer" />
            <input type="text" name="answer2" className="box" placeholder="Enter the answer" />
            <input type="text" name="answer3" className="box" placeholder="Enter the answer" />
          </div>
          <div>
            <input type="text" name="answer4" className="box" placeholder="Enter the answer"/>
            <input type="text" name="answer5" className="box" placeholder="Enter the answer"/>
            <input type="text" name="answer6" className="box" placeholder="Enter the answer"/>
          </div>
          <div>
            <input type="text" name="answer7" className="box" placeholder="Enter the answer"/>
            <input type="text" name="answer8" className="box" placeholder="Enter the answer"/>
            <input type="text" name="answer9" className="box" placeholder="Enter the answer"/>
          </div>
          <button>Submit</button>
        </form>
      </div>
      {
        document.body.style.background = "black"
       

      }
      {
         
      }





    </>)
}

export default App;
