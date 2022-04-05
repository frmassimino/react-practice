import logo from './logo.svg';
import './App.css';
import React from 'react';
import Meme from './components/Meme';

function App() {

  const [memeData, setMemeData] = React.useState({
    topText: "",
    bottomText: "", 
    memeURL: "",
    memeImages: [],
  })

  console.log(memeData.memeImages)
  console.log(memeData.memeURL)

  /* React.useEffect(
    function(){
      fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeData(prevMemeData => ({
          ...prevMemeData,
          memeImages: data.data.memes
        })))
    },[]) */

    React.useEffect(() => {
      /* Example with async function */
      async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setMemeData(prevData => ({
          ...prevData,
          memeImages: data.data.memes
        }))
      }
      getMemes()
      /* Does not need to return a cleanup function because async
      already returns a promise */
    }, [])

  function handleChange(event) {
    const {name, value} = event.target
    setMemeData(prevMemeData => ({
      ...prevMemeData,
      [name] : value

    }))
  }

  function handleButton(event) {
    const memeImage = memeData.memeImages[Math.floor(Math.random() * memeData.memeImages.length)]
    setMemeData(prevMemeData => ({
      ...prevMemeData,
      memeURL: memeImage.url
    }))

  }

  return (
    <div className="App">

      <header>

        <p className='left-title'>Meme Generator</p>
        <p className='right-title'>React Course - Project 3</p>

      </header>

      <br />
      <div className='div-grid'>
        <input type="text" className='top-input' name="topText" onChange={handleChange}/>
        <input type="text" className='bottom-input'name="bottomText" onChange={handleChange}/>
        <button onClick={handleButton}>Get a new meme image</button>
      </div>
      <Meme topText={memeData.topText} bottomText={memeData.bottomText} url={memeData.memeURL}/>

    </div>
  );
}

export default App;
