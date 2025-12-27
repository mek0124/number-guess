import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faDice } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


export default function Landing() {
  const [gameActive, setGameActive] = useState(false);
  const [gameOptions, setGameOptions] = useState({
    username: '',
    startNum: 0,
    endNum: 0
  });

  const navigate = useNavigate('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGameOptions({
      ...gameOptions,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !gameOptions.username.trim() ||
      !gameOptions.startNum > 0 ||
      !gameOptions.endNum > 0
    ) {};

    setGameActive(!gameActive);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full flex-grow">
      {!gameActive && (
        <div className="flex flex-col items-center justify-start space-y-6 w-2/3 flex-grow bg-gray-700 rounded-2xl m-2">
          <div className="flex flex-row items-center justify-center w-full border-b-black border-b-2">
            <span className="font-bold text-md italic text-gray-500 p-2">
              <FontAwesomeIcon icon={faGamepad} />
            </span>

            <span className="font-bold text-md italic text-gray-500 p-2">
              Start A New Game
            </span>

            <span className="font-bold text-md italic text-gray-500 p-2">
              <FontAwesomeIcon icon={faDice} />
            </span>
          </div>

          <form className="flex flex-col items-center justify-center w-full flex-grow" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-evenly w-full flex-grow">
              
            </div>

            <div className="flex flex-row items-center justify-center w-full m-2">
              <button
                type="submit"
                className="border-2 border-black rounded-2xl py-2 px-12 outline-none hover:outline-none focus:outline-none hover:bg-gray-400 hover:text-black transition-all delay-150 hover:scale-105"
              >

                Play Game
              </button>
            </div>
          </form>
        </div>
      )}

      {gameActive && <PlayGame gameOptions={gameOptions} />}
    </div>
  );
};
