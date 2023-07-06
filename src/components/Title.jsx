import { Link } from "react-router-dom";
import Hangman from "../assets/hangman.png";

const Title = () => {
  return (
    <div className="w-full h-full p-4 sm:p-8  flex flex-col justify-center items-center">
      <div className="p-2 flex flex-col justify-center items-center gap-2">
        <img
          className="h-40 sm:h-80 drop-shadow-xl"
          alt="title image"
          src={Hangman}
        />
        <h1 className="font-bold font-title text-center text-5xl sm:text-6xl md:text-8xl">
          _wordwits_
        </h1>
        <p className="p-2 font-hangman text-xl sm:text-2xl text-center">
          <span className="text-shadeAccent">HANGMAN</span> GAME
        </p>
      </div>

      <div>
        <Link to="play">
          <button className="p-2 font-primary text-sm sm:text-lg text-shadeWhite bg-shadeBlue hover:bg-shadeAccent">
            PLAY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Title;
