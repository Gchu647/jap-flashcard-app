import React, { Component } from 'react';
import './App.css';
import JapData from '../../data/jap1500';
import FlashcardTop from '../FlascardTop/FlashcardTop';
import FlashcardBottom from '../FlashcardBottom/FlashcardBottom';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      vocab: {},
      vocabList: [],
      quizSteps: 'top',
      displayTop: false, // FlashcardTop
      displayBottom: false, // FlashcardBottom
      learnCount: 0, // when to stop pickLearnWord method
      startId: 1481, // start of our vocab list
      endId: 1500, // end of our vocab list
    }

    this.quiz = this.quiz.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.pickQuizWord = this.pickQuizWord.bind(this);
    this.pickLearnWord = this.pickLearnWord.bind(this);
  }

  changeHandler(event) { // determines the startId and endId of our vocab list
  //   switch(event.target.name) {
  //     case 'startId':
  //       this.setState({ startId: event.target.value });
  //       break;
  //     case 'endId':
  //       this.setState({ endId: event.target.value });
  //       break;
  //     default:
  //       break;
  //   }

  //   // create vocabList here, but need asynchronous function
  }

  componentDidMount() { // create a clone of japData and store it to our state
    this.setState((prevState) => { // proper way to increment
      // this needs to be changed when working with jap 200 and above
      return {vocabList: JapData.slice(prevState.startId-1401, prevState.endId-1400)}
    });
  }

  quiz() { // procedures of the quiz
    // console.log(this.state.quizSteps);
    // console.log('start: ' + this.state.startId + ' end: '+ this.state.endId); // test changeHandler

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
    let vocabLength = this.state.vocabList.length;

    if (vocabLength > 0) {
      let randomIndex = Math.floor(Math.random() * vocabLength);
      let vocabObj = this.state.vocabList.splice(randomIndex, 1)[0];
      console.log('id: ', vocabObj.id); // test id
  
      this.setState({ vocab: vocabObj });
    } else {
      let vocabObj = {kanji: 'END'}
      this.setState({ vocab: vocabObj });
    }
  }

  pickLearnWord() { // still needs a proper way to end method
    let vocabLength = this.state.vocabList.length;
    console.log(this.state.vocabList);

    if (this.state.learnCount < vocabLength) {
      let vocabObj = this.state.vocabList[this.state.learnCount];
      console.log('id: ', vocabObj.id); // test id

      this.setState({ // set state for the new vocab word
        vocab: vocabObj,
        displayTop: true,
        displayBottom: true, // change to false for studying
      });
      this.setState((prevState) => { // proper way to increment
        return {learnCount: prevState.learnCount + 1}
      });
    }

  }
  
  render() {
    return (
      <div className='App'>
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
        <div className='ctrl-panel'>
          <form className=''>
            <input 
              type='number'
              name='startId' 
              className='start-id'
              placeholder={this.state.startId}
              onChange={this.changeHandler}
            />
            <label> to </label>
            <input type='number' 
              name='endId' 
              className='end-id'
              placeholder={this.state.endId}
              onChange={this.changeHandler}
            />
          </form>
          <div className='btn-wrap'>
            <div className='btn btn-quiz' onClick={this.quiz}>Quiz</div>
            <div className='btn btn-learn' onClick={this.pickLearnWord}>Learn</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
