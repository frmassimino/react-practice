import './App.css';
import React from 'react';
import Intro from './components/Intro';
import { nanoid } from 'nanoid';
import Question from './components/Question';
import Confetti from 'react-confetti';


function App() {

  const [questions, setQuestions] = React.useState()
  const [intro, setIntro] = React.useState(true)
  const [checked, setChecked] = React.useState(false)
  const [winner, setWinner] = React.useState(false)
  const [newGame, setNewGame] = React.useState(false)
  const [alert, setAlert] = React.useState(false)

  function formatText(questionText) {
    return questionText.replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&rdquo;/g,'`').replace(/&ndash;/g,'-')
  }

  function formatAnswers(correct, incorrect) {
    
    let answersArray = incorrect
    answersArray.push(correct)
    answersArray = new Set(answersArray)
    answersArray = Array.from(answersArray)
    
    /* Shuffles answers array */
    answersArray.sort(() => Math.random() - 0.5)

    return answersArray.map(answer => {
      return {
        answer: formatText(answer),
        id: nanoid(),
        isClicked: false,
        isChecked: false
      }
    })
  }

  function handleQuestions(questionsArray) {
    setQuestions(questionsArray.map(question => {
      return {
        question: formatText(question.question),
        correct: formatText(question.correct_answer),
        answers: formatAnswers(question.correct_answer, question.incorrect_answers),
        id: nanoid()
      }  
    }))
  }

  React.useEffect(function () {
    const data = fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => handleQuestions(data.results))
  }, [newGame])

  function showIntro() {
    setIntro(preValue => !preValue)
  }

  function clickAnswer(questionId, answerId) {
    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {
        return question.id === questionId ?
        {
          ...question,
          answers: question.answers.map(answer => {
            return answer.id === answerId ?
            {
              ...answer,
              isClicked: !answer.isClicked
            } : {...answer, isClicked:false}
          })
        } : {...question}
      })
    })

    setAlert(false)
  }

  const questionsArray = questions ? questions.map(question => {
    return (
      <>
        <Question
          key={question.id}
          id={question.id}
          question={question.question}
          answers={question.answers}
          isChecked={checked}
          correctAnswer={question.correct}
          clickAnswer={clickAnswer}
          />
      </>
    )
  }) : []

  

  function handleCheck() {

    const answerRequiredArray = questions.map(question => {
      return question.answers.filter(answer => answer.isClicked === true)[0] ? 
      true : false
    })

    /* Checks if the user slected 1 answer in all questions */

    if (answerRequiredArray.every(element => element === true)) {
      
      const checkArray = questions.map(question => {
        return question.correct === question.answers.filter(answer => answer.isClicked === true)[0].answer ? 
        true : false
      })
      
      /* Checks if the selected answers are correct, if so throws you confetti */

      if (checkArray.every(element => element === true)) {
        setWinner(true)
      }
  
      setChecked(true)
    } else {
      setAlert(true)
    }

    
  }

  function startNewGame() {
    setWinner(false)
    setIntro(true)
    setChecked(false)
    setNewGame(!newGame)
  }

  return (
    <div className="App">
      {intro && <Intro onClick={showIntro}/>}
      {winner && <Confetti />}
      {!intro && questionsArray}
      {alert && <p className='alert'>You must select an answer for all questions.</p>}
      {!intro && <button 
        className='check' 
        onClick={ checked ? startNewGame : handleCheck}
        >
          { checked ? "New Game" : "Check Answers"}
      </button>}
    </div>
  );
}

export default App;
