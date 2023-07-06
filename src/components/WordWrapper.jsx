import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLightbulb } from "@fortawesome/free-solid-svg-icons";

import { DICTIONARY_API, WORDS_API } from "../constant";

import { assignWord, assignWordInfo } from "../utils/store/slices/wordSlice";
import store from "../utils/store/store";
import WordShimmer from "./WordShimmer";
import Draw from "./Draw";

const WordWrapper = () => {
  const dispatch = useDispatch();
  const [showInfo, setShowInfo] = useState(false);
  const word = useSelector((store) => store.word);
  const remainingLives = useSelector((store) => store.hangman.remainingLives);

  const {
    wordToGuess,
    wordToGuessArray,
    validLetters,
    partOfSpeech,
    definitions,
  } = word;

  useEffect(() => {
    getWords();
  }, []);

  const getWords = async () => {
    try {
      const wordData = await fetch(WORDS_API);
      const wordJson = await wordData.json();
      const word = wordJson[Math.floor(Math.random() * 5)].toUpperCase();

      const infoData = await fetch(DICTIONARY_API + word);
      const infoJson = await infoData.json();

      dispatch(assignWord(word));
      dispatch(assignWordInfo(infoJson));
    } catch (error) {
      console.log(error);
      dispatch(assignWord(""));
    }
  };

  if (wordToGuess === "") return <WordShimmer />;

  return (
    <div>
      <div className="p-2 flex justify-between cursor-default">
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="font-secondary"
        >
          <FontAwesomeIcon
            className="mr-2 text-shadeAccent hover:text-shadeBlue"
            icon={faLightbulb}
          />
          Info
        </button>

        <h1 className="font-secondary">
          <FontAwesomeIcon
            className="mr-2 text-shadeAccent hover:text-shadeBlue"
            icon={faHeart}
          />
          {remainingLives}
        </h1>
      </div>

      {showInfo ? (
        <div className="m-2 shadow-md">
          <p className="p-2 font-secondary text-sm uppercase">
            <span className="font-bold text-shadeAccent">Part of Speech: </span>
            {partOfSpeech[0] ? partOfSpeech[0] : "Nil"}
          </p>
          <h1 className="p-2 font-secondary text-sm">
            <span className="font-bold text-shadeAccent">Definition: </span>
            {definitions[0] ? definitions[0] : "Definition not available"}
          </h1>
        </div>
      ) : null}

      <div className="mt-2 p-2 flex justify-center items-center gap-2 cursor-default">
        {wordToGuessArray.map((word, index) => {
          return validLetters.includes(word) ? (
            <p
              key={index}
              className="p-2 font-bold font-word text-xl border-b-[2px] border-black"
            >
              {word}
            </p>
          ) : (
            <p
              key={index}
              className="p-2 font-bold font-word text-xl text-transparent border-b-[2px] border-black"
            >
              -
            </p>
          );
        })}

        <Draw />
      </div>
    </div>
  );
};

export default WordWrapper;
