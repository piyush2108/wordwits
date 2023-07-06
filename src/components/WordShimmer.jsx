import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faHeart } from "@fortawesome/free-solid-svg-icons";

const WordShimmer = () => {
  return (
    <div>
      <div className="p-2 flex justify-between">
        <p className="font-secondary">
          <FontAwesomeIcon
            className="mr-2 text-shadeAccent"
            icon={faLightbulb}
          />
          Info
        </p>

        <h1 className="font-secondary">
          <FontAwesomeIcon className="mr-2 text-shadeAccent" icon={faHeart} />6
        </h1>
      </div>

      <div className="w-full h-20 sm:h-56 p-2 sm:p-4 font-word text-lg sm:text-3xl flex justify-center items-center">
        Fetching Word...
      </div>
    </div>
  );
};

export default WordShimmer;
