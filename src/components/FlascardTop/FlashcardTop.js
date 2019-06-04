import React from 'react';
import './FlashcardTop.css';

const FlashcardTop = ({kanji, display}) => {
  if (display === false) {
    return (
      <div className="flashcard-top"></div>
    );
  } 

  return (
    <div className="flashcard-top">
      <div className="kanji-wrap">
        <div className="kanji">
          { kanji }
        </div>
      </div>
    </div>
  );
}

export default FlashcardTop;