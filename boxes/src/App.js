import './App.css';
import boxes from './data/boxes';
import React from 'react';
import Box from './components/Box';

function App() {
  
  const [boxesArrary, setBoxesArray] = React.useState(boxes)

  /* const toggle = (id) => {
    let newBoxesArray = [...boxesArrary]
    newBoxesArray[id-1].on = !newBoxesArray[id-1].on 
    setBoxesArray(newBoxesArray)
  } */

  function toggle(id) {
    setBoxesArray(prevBoxesArray => {
      return prevBoxesArray.map(box => {
        return box.id === id ? {...box, on: !box.on} : box
      })
    })
  }

  const boxesArraryDiv = boxesArrary.map( box => {
    return(<Box key={box.id} on={box.on} toggle={() => toggle(box.id)} />)
  }
  )

  return (
    <main>
      <h1>Boxes will go here</h1>
      {boxesArraryDiv}
    </main>
  );
}

export default App;
