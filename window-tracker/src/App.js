import logo from './logo.svg';
import './App.css';
import React from 'react';
import WindowTracker from './components/WindowTracker';

function App() {

  const [show, setShow] = React.useState(true)

  function toggle () {
    setShow(preValue => !preValue)
  }


  return (
    <div className="App">
      <button onClick={toggle}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker windowWidth="390"/>}
    </div>
  );
}

export default App;
