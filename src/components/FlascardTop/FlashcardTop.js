import React from 'react';
import './FlashcardTop.css';

const FlashcardTop = ({kanji, display}) => {
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