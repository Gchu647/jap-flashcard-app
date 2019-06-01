import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flashcard">
        <div className="kanji"></div>
        <div className="def"></div>
        <div className="romaji"></div>
        <div className="speech-part"></div>
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
