import React from "react";
import style from "./keyboard.module.css";

const letters = [
  { id: 1, letter: "a" },
  { id: 2, letter: "b" },
  { id: 3, letter: "c" },
  { id: 4, letter: "d" },
  { id: 5, letter: "e" },
  { id: 6, letter: "f" },
  { id: 7, letter: "g" },
  { id: 8, letter: "h" },
  { id: 9, letter: "i" },
  { id: 10, letter: "j" },
  { id: 11, letter: "k" },
  { id: 12, letter: "l" },
  { id: 13, letter: "m" },
  { id: 14, letter: "n" },
  { id: 15, letter: "o" },
  { id: 16, letter: "p" },
  { id: 17, letter: "q" },
  { id: 18, letter: "r" },
  { id: 19, letter: "s" },
  { id: 20, letter: "t" },
  { id: 21, letter: "u" },
  { id: 22, letter: "v" },
  { id: 23, letter: "w" },
  { id: 24, letter: "x" },
  { id: 25, letter: "y" },
  { id: 26, letter: "z" },
  { id: 27, letter: "1" },
  { id: 28, letter: "2" },
  { id: 29, letter: "3" },
  { id: 30, letter: "4" },
  { id: 31, letter: "5" },
  { id: 32, letter: "6" },
  { id: 33, letter: "7" },
  { id: 34, letter: "8" },
  { id: 35, letter: "9" },
  { id: 36, letter: "0" },
  { id: 37, letter: " " },
];

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
