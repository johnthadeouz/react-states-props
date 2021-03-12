import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav';
import Tweets from './components/Tweets';

function App() {

  //js code
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementer = () => {
    setCounter(prev => prev + 1);
  }
  const toggleElement = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <h1>
        FAKE TWITTER
      </h1>
      <h2>Counter:{counter}</h2>
      <button onClick={incrementer}>Summarize Counter</button>
      <button onClick={toggleElement}>Toggle Tweets</button>
      <div className="home">
        <Nav />
        <Tweets hidden={toggle} />
      </div>
    </div>
  );
}


export default App;
