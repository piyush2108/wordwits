import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Hangman from "../assets/hangmanLight.png";

const Footer = () => {
  return (
    <div className="min-h-fit sm:h-52 p-4 text-shadeWhite bg-shadeDark flex flex-col sm:flex-row justify-center items-center gap-2">
      <div className="sm:w-1/2 flex flex-col sm:flex-row justify-center items-center">
        <img className="h-24" alt="title image" src={Hangman} />

        <div className="flex flex-col justify-center items-center">
          <h1 className="p-2 font-title text-3xl">_wordwits_</h1>
          <p className="font-hangman">
            <span className="uppercase text-shadeAccent">Hangman</span> Game
          </p>
        </div>
      </div>

      <div className="w-1/2 flex flex-col justify-center">
        <p className="p-2 font-bold font-primary text-lg sm:text-2xl text-center">
          Connect
        </p>

        <ul className="p-2">
          <li className="p-2 font-word text-sm sm:text-lg text-center text-shadeGray hover:text-shadeWhite">
            <a target="_blank" href="https://github.com/piyush2108">
              <FontAwesomeIcon className="mr-2" icon={faLink} />
              Github
            </a>
          </li>
          <li className="p-2 font-word text-sm sm:text-lg text-center text-shadeGray hover:text-shadeWhite">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/piyush-sharma01/"
            >
              <FontAwesomeIcon className="mr-2" icon={faLink} />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
