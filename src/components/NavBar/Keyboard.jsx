import React from "react";
import style from "./keyboard.module.css";
import { letters } from "../../utils/arrayLetters";

const Keyboard = ({ setLetterKeyboard, input, setInput, handleSubmit }) => {
  const handleLetter = (lett) => {
    setLetterKeyboard(input + lett);
  };

  const deleteWord = () => {
    setInput(input.slice(0, -1));
  };

  const submit = (e) => {
    handleSubmit(e);
  };

  return (
    <div className={style.contentLetter}>
      {letters.map((letter) => (
        <p
          className={style.letter}
          onClick={() => handleLetter(letter.letter)}
          key={letter.id}
        >
          {letter.letter}
        </p>
      ))}
      <p
        onClick={deleteWord}
        className={`${style.letter} ${style.letterSpecial} fa-solid fa-arrow-left`}
      ></p>
      <p
        onClick={submit}
        className={`${style.letter} ${style.letterSpecial}    fa-solid fa-location-arrow`}
      ></p>
    </div>
  );
};

export default Keyboard;
