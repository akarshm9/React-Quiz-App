import { React,useState } from "react";
const Ques=(props)=>{
    const [box, setbox] = useState(0)
    return(
        <div id="area">
        <div id="q">
            <h4>{props.question}</h4>
        </div>
        
    </div>
    )
}
export default  Ques; 