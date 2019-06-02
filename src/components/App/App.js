import React from 'react';
import './App.css';
import JapData from '../../data/data';

function App() {
  return (
    <div className="App">
      <div className="flashcard-top">
        <div className="kanji-wrap">
          {JapData.map(vocab => (
            <div className="kanji">{vocab.kanji}</div>
          ))}
        </div>
      </div>
      <div className="flashcard-btm">
      <div className="def-wrap">
          <div className="def"></div>
        </div>
        <div className="romaji-wrap">
          <div className="romaji"></div>
        </div>
        <div className="speech-part-wrap">
          <div className="speech-part"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

// JSX syntax basics
{/* <header className="App-header">
<p>
  Edit <code>src/App.js</code> smoke test!
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}
