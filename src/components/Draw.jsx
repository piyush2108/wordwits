import { useSelector } from "react-redux";

import Stage1 from "../assets/hangmanStage1.png";
import Stage2 from "../assets/hangmanStage2.png";
import Stage3 from "../assets/hangmanStage3.png";
import Stage4 from "../assets/hangmanStage4.png";
import Stage5 from "../assets/hangmanStage5.png";
import Stage6 from "../assets/hangmanStage6.png";
import Stage7 from "../assets/hangmanStage7.png";
import store from "../utils/store/store";

const Draw = () => {
  const remainingLives = useSelector((store) => store.hangman.remainingLives);

  if (7 - remainingLives === 1)
    return (
      <img
        className="h-0 sm:h-40 md:h-52 drop-shadow-lg"
        alt="stage 1"
        src={Stage1}
      />
    );
  if (7 - remainingLives === 2)
    return (
      <img
        className="h-0 sm:h-40 md:h-52 drop-shadow-lg"
        alt="stage 2"
        src={Stage2}
      />
    );
  if (7 - remainingLives === 3)
    return (
      <img
        className="h-0 sm:h-40 md:h-52 drop-shadow-lg"
        alt="stage 3"
        src={Stage3}
      />
    );
  if (7 - remainingLives === 4)
    return (
      <img
        className="h-0 sm:h-40 md:h-52 drop-shadow-lg"
        alt="stage 4"
        src={Stage4}
      />
    );
  if (7 - remainingLives === 5)
    return (
      <img
        className="h-0 sm:h-40 md:h-52 drop-shadow-lg"
        alt="stage 5"
        src={Stage5}
      />
    );
  if (7 - remainingLives === 6)
    return (
      <img
        className="h-0 sm:h-40 md:h-52 drop-shadow-lg"
        alt="stage 6"
        src={Stage6}
      />
    );
  if (7 - remainingLives === 7)
    return <img className="h-0 sm:h-40 md:h-52" alt="stage 7" src={Stage7} />;
};

export default Draw;
