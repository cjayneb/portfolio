import React, { useEffect, useState } from "react";
import "./FlappyBird.css";
import Pipe from "./Pipe";

interface FlappyBirdProps {}

let nextPipeId = 0;
let numOfPipesOnScreen = 4;

const FlappyBird = () => {
  useEffect(() => {
    const intervalGenerate = setInterval(() => {
      if (gameStarted > 0) {
        generatePipes();
      }
    }, 2000);
    return () => {
      clearInterval(intervalGenerate);
    };
  });

  const [gameStarted, setGameStarted] = useState(0);
  const [pipes, setPipes] = useState([] as any);

  const handleClick = () => {
    console.log(gameStarted);
    pipes.pop();
  };

  const generatePipes = () => {
    let middle = Math.random();
    if (middle > 0.81) {
      middle -= 0.25;
    }
    if (middle < 0.21) {
      middle += 0.25;
    }

    const heightTop = 500 * middle - 100;
    const heightBottom = 500 - heightTop - 100;

    let idToDelete = nextPipeId - numOfPipesOnScreen;
    setPipes([
      ...pipes.filter((pipe: any) => pipe.id !== idToDelete),
      {
        id: nextPipeId++,
        heightT: heightTop,
        heightB: heightBottom,
      },
    ]);
  };

  return (
    <div
      id="flappyContainer"
      onClick={() => {
        setGameStarted(gameStarted + 1);
        handleClick();
      }}
    >
      {gameStarted > 0 &&
        pipes.map((pipe: any, index: any) => (
          <Pipe key={pipe.id} hT={pipe.heightT} hB={pipe.heightB} />
        ))}
    </div>
  );
};

export default FlappyBird;
