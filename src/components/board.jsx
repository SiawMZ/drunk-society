import React from "react";
import Player from "./player";
import drinkQuestion from "../data/drinkQuestion.json";

const Board = ({ titles, playerPositions, colors }) => {
  return (
    <div className="grid grid-cols-5 grid-rows-6 gap-4">
      {titles.map((square, index) => {
        const question = drinkQuestion.find((item) => item.id === index + 1);
        return (
          <div key={index} className="relative">
            {playerPositions.map((position, playerIndex) => {
              if (position === index) {
                const left = 10 * playerIndex; // Adjust the left position
                return (
                  <div
                    key={playerIndex}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: colors[playerIndex],
                      top: "50%",
                      left: `calc(50% - 2px + ${left}px)`, // Set left position with a small gap
                      transform: "translate(-50%, -50%)",
                    }}
                  ></div>
                );
              } else {
                return null;
              }
            })}
            <div className="bg-gray-200 h-36">
              <div className="flex justify-center items-center text-xl font-bold">
                {question?.title || square}
              </div>
              <br />
              <div className="m-5">
                {question && question.Description
                  ? question.Description
                  : "No description available"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
