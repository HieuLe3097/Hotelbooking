// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Get all the cells
  const cells = document.querySelectorAll(".cell");

  // Calculate the number of rows and columns
  const numCols = 6; // Update the number of columns

  // Keep track of the current player
  let currentPlayer = "X";

  // Add a click event listener to each cell
  cells.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  // Handle cell click event
  function handleCellClick(e) {
    // Get the clicked cell
    const clickedCell = e.target;

    // Check if the cell is already marked
    if (clickedCell.textContent !== "") {
      return;
    }

    // Mark the cell with the current player's symbol
    clickedCell.textContent = currentPlayer;

    // Check for a win or a draw
    if (checkWin() || checkDraw()) {
      // Display the result
      alert(currentPlayer + " wins!");

      // Reset the game
      resetGame();
      return;
    }

    // Switch the current player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }

  // Check for a win
  function checkWin() {
    // Define winning combinations for rows, columns, and diagonals
    const winningCombinations = [];

    // Check rows
    for (let i = 0; i < numCols; i++) {
      const rowCombination = [];
      for (let j = 0; j < numCols; j++) {
        rowCombination.push(i * numCols + j);
      }
      winningCombinations.push(rowCombination);
    }

    // Check columns
    for (let i = 0; i < numCols; i++) {
      const colCombination = [];
      for (let j = 0; j < numCols; j++) {
        colCombination.push(i + j * numCols);
      }
      winningCombinations.push(colCombination);
    }

    // Check diagonal (top-left to bottom-right)
    const diagonalCombination1 = [];
    for (let i = 0; i < numCols; i++) {
      diagonalCombination1.push(i * (numCols + 1));
    }
    winningCombinations.push(diagonalCombination1);

    // Check diagonal (top-right to bottom-left)
    const diagonalCombination2 = [];
    for (let i = 0; i < numCols; i++) {
      diagonalCombination2.push((i + 1) * (numCols - 1));
    }
    winningCombinations.push(diagonalCombination2);

    // Check each winning combination
    for (const combination of winningCombinations) {
      const isWinningCombination = combination.every(
        (index) => cells[index].textContent === currentPlayer
      );
      if (isWinningCombination) {
        return true;
      }
    }

    return false;
  }

  // Check for a draw
  function checkDraw() {
    return [...cells].every((cell) => cell.textContent !== "");
  }

  // Reset the game
  function resetGame() {
    cells.forEach((cell) => {
      cell.textContent = "";
    });
    currentPlayer = "X";
  }
});
