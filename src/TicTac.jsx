import React, { useState } from "react";
// import "./tic-tac.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

const Game = () => {
  //  state For the Game component to track which player is next and the history of moves:
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquare) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  // Function To Access Past Moves
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to Game Start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div data-testid="square" className="game">
      <div className="game-board">
        <TicTac xIsNext={xIsNext} square={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

// TIC-TAC COMPONENTS
const TicTac = ({ xIsNext, square, onPlay }) => {
  const handleClick = (i) => {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    if (xIsNext) {
      nextSquare[i] = "x";
    } else {
      nextSquare[i] = "o";
    }
    //  onPlay Function call so that Game component can update the Board when the user clicks a square:
    onPlay(nextSquare);
  };

  // STATUS TO DETERMINE THE WINNER OR NEXT PLAYER
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "x" : "O");
  }

  return (
    <>
      <div className="status" style={{ textAlign: "left" }}>
        {status}
      </div>
      {/* ONE  */}
      <div className="board-row">
        <Square value={square[0]} onSquareClick={() => handleClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      {/* TWO  */}
      <div className="board-row">
        <Square value={square[3]} onSquareClick={() => handleClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      {/* THREE  */}
      <div className="board-row">
        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

// FUNCTION TO CALCULATE THE WINNER
const calculateWinner = (square) => {
  const lines = [
    [0, 1, 2], // Horizontal rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // Vertical columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // Diagonal lines
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
};

export default Game;
