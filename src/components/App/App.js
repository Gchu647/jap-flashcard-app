import React, { Component } from 'react';
import './App.css';
import JapData from '../../data/data';
import FlashcardBottom from '../FlashcardBottom/FlashcardBottom';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      vocab: {},
      quizSteps: 'set',
      displayBottom: false
    }

    this.quiz = this.quiz.bind(this);
    this.pickWord = this.pickWord.bind(this);
  }

  quiz() { // procedures of the quiz
    switch(this.state.quizSteps) {
      case 'set':
        this.pickWord();
        this.setState({ quizSteps: 'bottom'});
        break;
      case 'bottom':
        this.setState({ displayBottom: true});
        this.setState({ quizSteps: 'set'});
        break;
      default:
        break;
    }
  }

  pickWord() {
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
        <FlashcardBottom 
          definition = {this.state.vocab.def}
          romaji = {this.state.vocab.romaji}
          speechPart = {this.state.vocab.speech_part}
          display = {this.state.displayBottom}
        />
        <div className="btn" onClick={this.quiz}>Quiz</div>
      </div>
    );
  }
}

export default App;
