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
      // learnCount: 0
    }

    this.quiz = this.quiz.bind(this);
    this.pickQuizWord = this.pickQuizWord.bind(this);
    this.picklearnWord = this.pickLearnWord.bind(this);
  }

  quiz() { // procedures of the quiz
    switch(this.state.quizSteps) {
      case 'top':
        this.pickQuizWord();
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

  pickQuizWord() { // pick a random word for the quiz
    let vocabLength = JapData.length;

    if (vocabLength > 0) {
      let randomIndex = Math.floor(Math.random() * vocabLength);
      let vocabObj = JapData.splice(randomIndex, 1)[0];
  
      this.setState({ vocab: vocabObj });
    } else {
      let vocabObj = {kanji: 'END'}
      this.setState({ vocab: vocabObj });
    }
  }

  pickLearnWord() {
    // let vocabLength = JapData.length;
    // console.log(vocabLength);
    // console.log(this.state.learnCount);
    
    // if (this.state.learnCount < vocabLength) {
    //   let vocabObj = JapData[this.state.learnCount];
    //   this.setState({
    //     vocab: vocabObj,
    //     learnCount: this.state.learnCount++
    //   });
    // }
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
        <div className="btn" onClick={this.pickLearnWord}>Learn</div>
      </div>
    );
  }
}

export default App;
