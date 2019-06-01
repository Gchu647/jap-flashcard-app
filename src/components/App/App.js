import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flashcard">
        <div className="kanji-wrap">
          <div className="kanji">使う</div>
        </div>
        <div className="def-wrap">
          <div className="def">Use, make use of</div>
        </div>
        <div className="romaji-wrap">
          <div className="romaji">[Tsukau]</div>
        </div>
        <div className="speech-part-wrap">
          <div className="speech-part">VERB</div>
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
