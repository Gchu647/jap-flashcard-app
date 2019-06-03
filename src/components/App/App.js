import React, { Component } from 'react';
import './App.css';
import JapData from '../../data/data';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      vocab: {}
    }

    this.quiz = this.quiz.bind(this);
  }

  quiz() {
    let vocabLength = JapData.length;
    let randomIndex = Math.floor(Math.random() * vocabLength);
    let vocabObj = JapData.find((element, index) => {
      return index === randomIndex;
    });

    console.log(randomIndex);
    this.setState({ vocab: vocabObj });
  }
  
  render() {
    return (
      <div className="App">
        <div className="flashcard-top">
          <div className="kanji-wrap">
            <div className="kanji">
              {this.state.vocab.kanji}
            </div>
          </div>
        </div>
        <div className="flashcard-btm">
        <div className="def-wrap">
            <div className="def">
              {this.state.vocab.def}
            </div>
          </div>
          <div className="romaji-wrap">
            <div className="romaji">
              {this.state.vocab.romaji}
            </div>
          </div>
          <div className="speech-part-wrap">
            <div className="speech-part">
              {this.state.vocab.speech_part}
            </div>
          </div>
        </div>
        <div className="btn" onClick={this.quiz}>Quiz</div>
      </div>
    );
  }
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
