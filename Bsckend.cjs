//import {Answers} from "./src/Questions.json"
const Answers = require('./src/Questions.json')

const express = require('express');
const port = 3000;
const bp = require('body-parser')
const cors = require('cors')
const app = express();

//app.use(bp.urlencoded({extended:true}));
app.use(cors())
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json()); // to support JSON-encoded bodies

app.get('/', (req, res) => {
    let a = Answers.questions[3].answer;
    res.send(a)
});
let rans = new Array;
rans[0] = Answers.questions[0].answer;
rans[1] = Answers.questions[1].answer;
rans[2] = Answers.questions[2].answer;
rans[3] = Answers.questions[3].answer;
rans[4] = Answers.questions[4].answer;
rans[5] = Answers.questions[5].answer;
rans[6] = Answers.questions[6].answer;
rans[7] = Answers.questions[7].answer;
rans[8] = Answers.questions[8].answer;

app.post('/', (req, res) => {
    let ans = new Array;
    let name=(req.body.uname)
    ans[0] = (req.body.answer1);
    ans[1] = (req.body.answer2);
    ans[2] = (req.body.answer3);
    ans[3] = (req.body.answer4);
    ans[4] = (req.body.answer5);
    ans[5] = (req.body.answer6);
    ans[6] = (req.body.answer7);
    ans[7] = (req.body.answer8);
    ans[8] = (req.body.answer9);
    console.log("Fetched\n" + ans);
    //Checking for attempted questions
    let count = 0;
    ans.forEach(() => {
        if (ans != "") {

            count++
        }
    })
    console.log(count)
    //Checking for wrong answers
    let right = 0,wrong=0;
    for (let index = 0; index < ans.length; index++) {
       
        if (ans[index] == rans[index]) {
            right=right+1;
            
            
        }
        if (ans[index]!=rans[index]) {
            wrong=wrong+1
        }
        
        
        
    }
    console.log(right)
    console.log(wrong)
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${name}s quiz summary</title>
        <style>
            body{
                background-color: black;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .card{
                display: flex;
                justify-items: baseline;
                align-items: center;
                width: 35vw;
                height: 25vh;
                background-color: white;
                border: 5px solid red;
                color: black;
                border-radius:25px;
            }
            span{
                border:1px solid black;
                text-decoration: underline;
            }
            @media screen and (max-width:550px) {
                .card{
                    width: auto;
                    height: 28vh;
                    padding: 7px;
                    display: flex;
                    justify-content: center;
                }
            }
        </style>
    </head>
    <body>
        <div class="card">
            Name : <span style="text-transform: capitalize;">${name}</span> <br>
            Total Attempted Questions:${count} <br>
            Wrong Answers: ${wrong}<br>
            Right Answers:${right}
        </div>
    </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.