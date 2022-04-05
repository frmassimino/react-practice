import React from "react";


export default function Answer(props) {

    const styles = {
        backgroundColor: !props.isChecked ? 
            props.isClicked ? "#D6DBF5" : "white" :
            props.isClicked ? 
            props.answer === props.correctAnswer ? "#94D7A2" : "#F8BCBC" :
            props.answer === props.correctAnswer ? "#94D7A2" : "white",
        pointerEvents: !props.isChecked ? "auto" : "none"

    }

    return(
        <button 
            className="answer" 
            /* onClick={() => props.clickAnswer(props.questionId, props.id)} */
            onClick={props.onClick}
            style={styles}
        >
            {props.answer}
        </button>
    )
}