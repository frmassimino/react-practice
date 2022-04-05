import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [starWarsData, setstarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  /* console.log("Componenet rendered") */

  /* fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setstarWarsData(data)) */


  /* React.useEffect(function() {
    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setstarWarsData(data))
  }) */

  const handleButton = () => {
    console.log("Number increased")
    setCount(prevCount => prevCount+1)
  }

  React.useEffect(function() {
    console.log("Effect function ran")
    console.log(`https://swapi.dev/api/people/${count}`)
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setstarWarsData(data))
  }, [count]) /* Using [] so it run just once, the first time the app is loaded */


  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <p>The count is {count}</p>
      <button onClick={handleButton}>Add</button>
    </div>
  );
}

export default App;
