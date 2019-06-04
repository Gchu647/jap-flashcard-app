import React, { Component } from 'react';
import './App.css';
import JapData from '../../data/data';
import FlashcardTop from '../FlascardTop/FlashcardTop';
import FlashcardBottom from '../FlashcardBottom/FlashcardBottom';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      vocab: {},
      quizSteps: 'top',
      displayTop: false,
      displayBottom: false,
    }

    this.quiz = this.quiz.bind(this);
    this.pickWord = this.pickWord.bind(this);
  }

  quiz() { // procedures of the quiz
    switch(this.state.quizSteps) {
      case 'top':
        this.pickWord();
        this.setState({
          displayTop: true,
          quizSteps: 'bottom'
        });
        break;
      case 'bottom':
        this.setState({
          displayBottom: true,
          quizSteps: 'clear'
        });
        break;
      case 'clear':
        this.setState({
          displayTop: false,
          displayBottom: false,
          quizSteps: 'top'
        });
        break;
      default:
        break;
    }
  }

  pickWord() { // pick a word if the word list is longer than 0
    let vocabLength = JapData.length;

    if (vocabLength > 0) {
      let randomIndex = Math.floor(Math.random() * vocabLength);
      let vocabObj = JapData.splice(randomIndex, 1)[0];
  
      console.log(vocabLength);
      this.setState({ vocab: vocabObj });
    } else {
      let vocabObj = {kanji: 'END'}
      this.setState({ vocab: vocabObj });
    }
  }
  
  render() {
    return (
      <div className="App">
        <FlashcardTop 
          kanji = {this.state.vocab.kanji}
          display = {this.state.displayTop}
        />
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
