import React from "react";
import { useState } from "react";


export default function Joke(props) {

    const [isShown, setIsShown] = useState(false)

    const toggle = () => {
        setIsShown(isShown => !isShown)
        console.log(isShown)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>{isShown ? 'Hide' : 'Show'} Punchline</button>
            <hr />
        </div>
    )
}