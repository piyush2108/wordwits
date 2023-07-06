import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const ResultDisplay = () => {
  const winStatus = useSelector((store) => store.word.winStatus);
  const word = useSelector((store) => store.word);

  return (
    <div className="h-full p-2 sm:p-4 flex flex-col justify-center items-center">
      {winStatus ? (
        <h1 className="p-2 font-bold font-primary text-lg sm:text-3xl md:text-5xl">
          Good Job
        </h1>
      ) : (
        <h1 className="p-2 font-bold font-primary text-lg sm:text-3xl md:text-5xl">
          Try Again
        </h1>
      )}

      <p className="p-2 font-secondary text-sm sm:text-lg text-center text-shadeBlue">
        {winStatus
          ? "Well done! Your vocabulary skills are outstanding!"
          : "Losses are stepping stones to a broader vocabulary horizon."}
      </p>

      <div className="w-full p-2 mt-2 sm:mt-4 text-center">
        <h1 className="font-word text-sm sm:text-lg">
          Correct word:
          {winStatus ? (
            <span className="font-bold font-title text-shadeCorrect">
              {word.wordToGuess.toUpperCase()}
            </span>
          ) : (
            <span className="font-bold font-title text-shadeWrong">
              {word.wordToGuess.toUpperCase()}
            </span>
          )}
        </h1>

        <div className="p-2 font-word text-sm sm:text-lg flex flex-col justify-center items-center">
          Guessed letters
          <div className="flex justify-center flex-wrap">
            {word.guessedLetters.map((letter, index) => {
              return word.wordToGuessArray.includes(letter) ? (
                <p
                  key={index}
                  className="m-2 py-1 sm:py-2 px-2 sm:px-4 font-keys text-lightBg  border-[1px] border-shadeCorrect rounded-md"
                >
                  {letter}
                </p>
              ) : (
                <p
                  key={index}
                  className="m-2 py-1 sm:py-2 px-2 sm:px-4 font-ke text-lightBg ys border-[1px] border-shadeWrong rounded-md"
                >
                  {letter}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      <button
        className="mt-2 sm:mt-4 p-2 font-secondary text-shadeWhite bg-shadeBlue"
        onClick={() => window.location.reload(true)}
      >
        <FontAwesomeIcon className="mr-2" icon={faRotateRight} />
        Play Again
      </button>
    </div>
  );
};

export default ResultDisplay;
