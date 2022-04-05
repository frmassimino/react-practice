import React from "react";


export default function Meme (props) {
    


    return(
        <div className='meme'>
            <img src={props.url}/>
            <p className='top-text'>{props.topText}</p>
            <p className='bottom-text'>{props.bottomText}</p>
        </div>
    )
}