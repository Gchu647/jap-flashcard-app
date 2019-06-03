import React from 'react';
import './FlashcardBottom.css';

const FlashcardBottom = ({definition, romaji, speechPart, display}) => {
  if (display === false) {
    return (
      <div className="flashcard-btm"></div>
    );
  } 
  
  return (
    <div className="flashcard-btm">
      <div className="def-wrap">
        <div className="def">
          { definition }
        </div>
      </div>
      <div className="romaji-wrap">
        <div className="romaji">
          { romaji }
        </div>
      </div>
      <div className="speech-part-wrap">
        <div className="speech-part">
          { speechPart }
        </div>
      </div>
    </div>
  )
}

export default FlashcardBottom;