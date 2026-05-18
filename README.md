# Tic Tac Toe Web Game

A responsive, two-player **Tic Tac Toe** game built with vanilla HTML, CSS, and JavaScript. Play locally in the browser with turn tracking, win highlighting, and a scoreboard that persists across rounds.

## Features

- Classic 3×3 Tic Tac Toe gameplay for two players (X and O)
- Turn indicator showing whose move is next
- Winning line highlight when a player wins
- **Restart Game** — clears the board and keeps scores
- **New Game** — resets the board and scoreboard
- Live scoreboard for Player X, Player O, and draws
- Responsive layout for mobile and desktop

## Demo

Open `index.html` in your browser, or watch `Demo_video.mp4` for a walkthrough.

## Tech Stack

- HTML5
- CSS3 (CSS Grid, media queries)
- JavaScript (DOM APIs, no frameworks)

## Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)

### Run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/VISHNUVASANM/tic-tac-toe-web-game.git
   cd tic-tac-toe-web-game
   ```

2. Open `index.html` in your browser:
   - Double-click the file, or
   - Use a simple local server (optional):
     ```bash
     npx serve .
     ```

No build step or package manager is required.

## How to Play

1. Player **X** goes first. Click an empty cell to place your mark.
2. Players alternate until someone wins or the board is full (draw).
3. Use **Restart Game** to play another round without resetting scores.
4. Use **New Game** to reset wins, losses, and draws.

## Project Structure

```
├── index.html      # Game layout and board markup
├── styles.css      # Layout, board styling, responsive design
├── script.js       # Game logic, win detection, scoreboard
├── Demo_video.mp4  # Demo recording
└── README.md
```

## License

This project is open source and available for personal and educational use.

## Repository

https://github.com/VISHNUVASANM/tic-tac-toe-web-game

## Author

**[VISHNUVASANM](https://github.com/VISHNUVASANM)** — Vishnuvasan M
