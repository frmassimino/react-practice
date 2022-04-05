import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke';
import jokesData from './data/jokesData';

function App() {

  const jokes = jokesData

  const jokesDiv = jokes.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <div className="jokes">
      {jokesDiv}
    </div>
  );
}

export default App;
