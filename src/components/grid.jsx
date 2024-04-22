import React, { useState } from "react";
import Board from "./board";
import Player from "./player";
import drinkQuestion from "../data/drinkQuestion.json";

const Game = () => {
  const [playerPositions, setPlayerPositions] = useState([0, 0]);
  const [randomNumber, setRandomNumber] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(0);

  //   const drinkQuestion = require("../data/drinkQuestion.json"); // Import the JSON data

  // Extract titles from the JSON data
  const titleName = drinkQuestion.map((question) => question.title);

  const colors = ["red", "blue", "green", "yellow", "orange"]; // Add colors for each player

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(randomNumber);
    const newPlayerPositions = [...playerPositions];
    newPlayerPositions[currentPlayer] =
      (playerPositions[currentPlayer] + randomNumber) % titleName.length;
    setPlayerPositions(newPlayerPositions);
    setCurrentPlayer((currentPlayer + 1) % playerPositions.length);
  };

  const addPlayer = () => {
    if (playerPositions.length < 5) {
      setPlayerPositions([...playerPositions, 0]);
    }
  };

  return (
    <>
      <div>
        <div className="game">
          {/* <h1 className="text-2xl font-bold mb-4">Monopoly-like Game</h1> */}
          <Board
            titles={titleName}
            playerPositions={playerPositions}
            colors={colors}
          />
        </div>

        <div className="sticky bottom-20">
          <div className="current-location">
            Current Location: {playerPositions[currentPlayer]}
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={rollDice}
          >
            Roll Dice
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
            onClick={addPlayer}
          >
            Add Player
          </button>
          <div className="other-players">
            {playerPositions.map((position, index) => (
              <Player
                key={index}
                index={index}
                position={position}
                colors={colors}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
