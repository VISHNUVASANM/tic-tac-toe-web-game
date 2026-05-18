const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');
const newGameButton = document.getElementById('new-game-button'); 
const scoreX = document.getElementById('score-x');
const scoreO = document.getElementById('score-o');
const scoreDraw = document.getElementById('score-draw');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let scores = { X: 0, O: 0, draws: 0 };

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Handle cell click
function handleCellClick(e) {
    const clickedCell = e.target;
    const clickedIndex = clickedCell.getAttribute('data-index');

    if (board[clickedIndex] !== '' || !gameActive) return;

    board[clickedIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    const winningCells = checkWin();
    if (winningCells) {
        gameActive = false;
        message.textContent = `Player ${currentPlayer} wins!`;
        highlightWinningCells(winningCells);
        scores[currentPlayer]++;
        updateScore();
    } else if (board.every(cell => cell !== '')) {
        gameActive = false;
        message.textContent = 'It\'s a draw!';
        scores.draws++;
        updateScore();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Player ${currentPlayer}'s turn`;
    }
}

// Check for win
function checkWin() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer) {
            return combination; // Return the winning combination
        }
    }
    return null; // No win
}

// Highlight the winning cells
function highlightWinningCells(winningCells) {
    winningCells.forEach(index => {
        cells[index].classList.add('winning-cell'); // Add the highlight class to the winning cells
    });
}

// Update scoreboard
function updateScore() {
    scoreX.textContent = scores.X;
    scoreO.textContent = scores.O;
    scoreDraw.textContent = scores.draws;
}

// Restart the game but keep the scores
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    message.textContent = `Player X's turn`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('winning-cell'); // Remove highlight when game resets
    });
}

// Reset everything, including the scores
function newGame() {
    resetGame(); // Clears the board
    scores = { X: 0, O: 0, draws: 0 }; // Reset scores
    updateScore(); // Update the scoreboard
}

// Attach event listeners
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
newGameButton.addEventListener('click', newGame); // Event listener for the new button
