import React from "react";
import Answer from "./Answer";


export default function Question(props) {

    const answersArray = props.answers.map(answer => {
        return(
            <Answer 
                key={answer.id} 
                answer={answer.answer} 
                isClicked={answer.isClicked}
                isChecked={props.isChecked}
                correctAnswer={props.correctAnswer}
                onClick={() => props.clickAnswer(props.id, answer.id)}
            />
        )
    })

    return(
        <>
            <p className="question">{props.question}</p>
            <div className="answers-box">
                {answersArray}
            </div>
            <hr />
        </>
    )
}