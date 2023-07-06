import { useDispatch, useSelector } from "react-redux";

import { KEYS } from "../constant";

import { addPressedKey } from "../utils/store/slices/wordSlice";
import { updateLives } from "../utils/store/slices/hangmanSlice";

const KeyboardLayout = () => {
  const dispatch = useDispatch();
  const wordToGuessArray = useSelector((store) => store.word.wordToGuessArray);

  const handleKeyPress = (e, key) => {
    e.target.disabled = true;
    e.target.className = e.target.className + " bg-shadeDisable shadow-sm";

    dispatch(addPressedKey(key));
    if (!wordToGuessArray.includes(key)) {
      dispatch(updateLives());
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full mt-2 p-2 flex justify-center items-center flex-wrap">
        {KEYS.map((key, index) => {
          return (
            <button
              className="m-1 sm:m-2 py-1 sm:py-2 px-2 sm:px-4 font-keys sm:text-lg shadow-lg rounded-md hover:bg-shadeDark hover:text-shadeWhite hover:shadow-sm"
              key={index}
              onClick={(e) => {
                handleKeyPress(e, key);
              }}
            >
              {key}
            </button>
          );
        })}
      </div>

      <button
        className="mt-2 p-2 font-primary text-lg text-shadeWhite bg-shadeBlue hover:bg-shadeAccent"
        onClick={() => window.location.reload(true)}
      >
        RETRY
      </button>
    </div>
  );
};

export default KeyboardLayout;
