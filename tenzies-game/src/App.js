import logo from './logo.svg';
import './App.css';
import Dice from './components/Dice';
import React from 'react';
import Confetti from 'react-confetti';

function App() {

  const [diceArray, setDiceArray] = React.useState(allNewDice())
  const [tenzies , setTenzies] = React.useState(false)

  React.useEffect(
    function() {
      const allHeld = diceArray.every(dice => dice.isHeld)
      const firstValue = diceArray[0].value
      const allSameValue = diceArray.every(dice => dice.value === firstValue)
      if (allHeld && allSameValue) {
        setTenzies(true)
      }
    }, [diceArray])

  function generateRandom() {
    return Math.floor(Math.random()*6)+1
  }

  function allNewDice() {
    const newArray = []

    for (let i = 0; i < 10; i++) {
      newArray.push({
        key: i,
        value: generateRandom(),
        isHeld: false
      })
      /* newArray.push(Math.ceil(Math.random()*6)) */
    }
    return newArray
  }

  function hold(id) {
    /* console.log(id) */
    setDiceArray(preArray => preArray.map(dice => {
      return dice.key === id ? 
        {...dice, isHeld: !dice.isHeld} :
        dice
    }))
  }
  
  const diceElements = diceArray.map(dice => {
    return (
      <Dice 
        key={dice.key} 
        number={dice.value} 
        isHeld={dice.isHeld}
        onClick={() => hold(dice.key)}
      />
    )
  })

  function rollDice() {
    /* setDiceArray(allNewDice()) */
    if (!tenzies) {
    setDiceArray(prevArray => prevArray.map(dice => {
      return dice.isHeld ? 
        dice : 
        {...dice, 
          value: generateRandom()
        }
    }))} else {
      setTenzies(false)
      setDiceArray(allNewDice())
    }
  }

  return (
        
        <main className='game-window'>
          { tenzies && <Confetti /> }
          <h1 className='title'>Tenzies</h1>
          <p className='instructions'>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </p>
          <div className='grid'>
            {diceElements}
          </div>
          <button 
            className='roll-dice' 
            onClick={rollDice}
          >
            {tenzies ? "New Game" : "Roll"}
          </button>
        </main>
  );
}

export default App;
