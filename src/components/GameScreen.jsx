import { useSelector } from "react-redux";

import WordWrapper from "./WordWrapper";
import KeyboardLayout from "./KeyboardLayout";
import ResultDisplay from "./ResultDisplay";

const GameScreen = () => {
  const winStatus = useSelector((store) => store.word.winStatus);
  const remainingLives = useSelector((store) => store.hangman.remainingLives);

  return (
    <div className="w-full h-fit sm:h-screen py-2 px-4 sm:p-8 flex flex-col justify-center">
      {winStatus || remainingLives === 0 ? (
        <ResultDisplay />
      ) : (
        <div>
          <WordWrapper />
          <KeyboardLayout />
        </div>
      )}

      {/* <ResultDisplay /> */}
    </div>
  );
};

export default GameScreen;
