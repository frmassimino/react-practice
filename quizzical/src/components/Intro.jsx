import React from "react";


export default function Intro(props) {
    
    return(
        <div className="intro">
            <h1>Quiz!</h1>
            <p className="get-ready">Get ready...</p>
            <button onClick={props.onClick} className="button-start">Start quiz</button>
        </div>
    )
}