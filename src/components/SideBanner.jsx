import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SideBanner = () => {
  return (
    <div className="h-1/4 sm:h-screen w-full sm:w-2/5 py-2 sm:py-4 px-4 sm:px-8 flex flex-col justify-center items-center gap-2 md:gap-4 shadow-lg sm:shadow-none bg-shadeDark">
      <div className="p-2">
        <h1 className="font-extrabold font-title text-center sm:text-left text-3xl md:text-5xl lg:text-7xl">
          <span className="text-shadeWhite">Unravel, </span>
          <span className="text-shadeWhite">Guess, </span>
          <span className="text-shadeRed">Triumph!</span>
        </h1>
      </div>

      <div className="p-2 flex flex-col justify-center items-center sm:items-start">
        <h1 className="font-bold font-primary sm:text-lg md:text-xl text-shadeGray">
          Instructions
        </h1>

        <ul className="p-2 text-justify">
          <li className="py-2 font-primary text-sm text-shadeWhite">
            <FontAwesomeIcon className="mr-2 text-sm" icon={faArrowRight} />
            Guess the word, reveal letters, avoid the hangman.
          </li>
          <li className="py-2 font-primary text-sm text-shadeWhite">
            <FontAwesomeIcon className="mr-2 text-sm" icon={faArrowRight} />
            Guess one letter at a time to uncover the word.
          </li>
          <li className="py-2 font-primary text-sm text-shadeWhite">
            <FontAwesomeIcon className="mr-2 text-sm" icon={faArrowRight} />
            Win by guessing the word, lose if the hangman is complete.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBanner;
