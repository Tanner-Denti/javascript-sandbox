(function() {
    const cells = Array.from(document.querySelector(".game-board").children)

    const gameBoard = (function() {
        const gameBoard = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];

        const len = gameBoard.length;

        function update(r, c, playerSymbol) {
            if (!gameBoard[r][c]) {
                gameBoard[r][c] = playerSymbol;
            } else {
                alert("You cannot go there!");
            }
        }

        function updatePlayerSymbol(oldSymbol, newSymbol) {
            for (let r = 0; r < len; r++) {
                for (let c = 0; c < len; c++) {
                    if (gameBoard[r][c] === oldSymbol) {
                        gameBoard[r][c] = newSymbol;
                    }
                }
            }
        }

        function checkGameOver(r, c, playerSymbol) {
            // Check row
            for (let i = 0; i < len; i++) {
                if (gameBoard[r][i] !== playerSymbol) {
                    break;
                }
                if (i === len - 1) {
                    return playerSymbol;
                }
            }

            // Check col
            for (let i = 0; i < len; i++) {
                if (gameBoard[i][c] !== playerSymbol) {
                    break;
                }
                if (i === len - 1) {
                    return playerSymbol;
                }
            }

            // Check diagonal
            if (r === c) {
                for (let i = 0; i < len; i++) {
                    if (gameBoard[i][i] !== playerSymbol) {
                        break;
                    }
                    if (i === len - 1) {
                        return playerSymbol;
                    }
                }
            }

            // Check antiDiagonal
            if (r + c === len - 1) {
                for (let i = 0; i < len; i++) {
                    if (gameBoard[i][len - 1 - i] !== playerSymbol) {
                        break;
                    }
                    if (i === len - 1) {
                        return playerSymbol;
                    }
                }
            }

            // Check Draw
            for (const row of gameBoard) {
                if (row.includes(null)) {
                    return "continue"; // Continue
                }
            }
            console.log("checked draw");
            return "draw"; // Draw
        }

        function createNewGameBoard() {
            for (let r = 0; r < len; r++) {
                for (let c = 0; c < len; c++) {
                    gameBoard[r][c] = null;
                }
            }
        }

        function getGameBoard() {
            return gameBoard.map((row) => [...row]);
        }

        return { update, updatePlayerSymbol, checkGameOver, createNewGameBoard, getGameBoard };
    })();

    const createPlayer = function(symbol) {
        let score = 0;

        const getScore = () => score;
        const setScore = (newScore) => {
            score = newScore;
        };
        const getSymbol = () => symbol;
        const setSymbol = (newSymbol) => {
            symbol = newSymbol;
        };

        return { getScore, setScore, getSymbol, setSymbol };
    };

    const playerOneModule = (function() {
        const playerOne = createPlayer("X");
        const playerOneSymbolP = document.querySelector(".player-one-symbol");
        const playerOneScoreP = document.querySelector(".player-one-score");
        const changePlayerOneSymbolBtn = document.querySelector(".sym1-btn");
        const changePlayerOneSymbolInput = document.getElementById("new-p1-symbol");
        const playerOneForm = document.querySelector(".player-one-form");

        changePlayerOneSymbolBtn.addEventListener(
            "click",
            handlePlayerOneSymbolBtnClick,
        );

        playerOneForm.addEventListener("submit", handlePlayerOneFormSubmit);

        function handlePlayerOneSymbolBtnClick() {
            playerOneForm.classList.toggle("hidden");
        }

        function handlePlayerOneFormSubmit(event) {
            event.preventDefault();
            const playerTwoSymbol = playerTwoModule.getPlayerTwo().getSymbol()
            const newSym = changePlayerOneSymbolInput.value;
            if (newSym !== playerTwoSymbol) {
                gameBoard.updatePlayerSymbol(playerOne.getSymbol(), newSym);
                gameBoardModule.updateBoard();

                playerOne.setSymbol(changePlayerOneSymbolInput.value);
                playerOneSymbolP.textContent = playerOne.getSymbol();
                changePlayerOneSymbolInput.value = "";
                playerOneForm.classList.add("hidden");
            }
        }

        function updateScore(newScore) {
            playerOne.setScore(newScore);
            playerOneScoreP.textContent = playerOne.getScore();
        }

        function getPlayerOne() {
            return playerOne;
        }

        return { getPlayerOne, updateScore };
    })();

    const playerTwoModule = (function() {
        const playerTwo = createPlayer("O");
        const playerTwoSymbolP = document.querySelector(".player-two-symbol");
        const playerTwoScoreP = document.querySelector(".player-two-score");
        const changePlayerTwoSymbolBtn = document.querySelector(".sym2-btn");
        const changePlayerTwoSymbolInput = document.getElementById("new-p2-symbol");
        const playerTwoForm = document.querySelector(".player-two-form");

        changePlayerTwoSymbolBtn.addEventListener(
            "click",
            handlePlayerTwoSymbolBtnClick,
        );

        playerTwoForm.addEventListener("submit", handlePlayerTwoFormSubmit);

        function handlePlayerTwoSymbolBtnClick() {
            playerTwoForm.classList.toggle("hidden");
        }

        function handlePlayerTwoFormSubmit(event) {
            event.preventDefault();
            const playerOneSymbol = playerOneModule.getPlayerOne().getSymbol()
            const newSym = changePlayerTwoSymbolInput.value;
            if (newSym !== playerOneSymbol) {
                gameBoard.updatePlayerSymbol(playerTwo.getSymbol(), newSym);
                gameBoardModule.updateBoard();

                playerTwo.setSymbol(changePlayerTwoSymbolInput.value);
                playerTwoSymbolP.textContent = playerTwo.getSymbol();
                changePlayerTwoSymbolInput.value = "";
                playerTwoForm.classList.add("hidden");
            }
        }

        function updateScore(newScore) {
            playerTwo.setScore(newScore);
            playerTwoScoreP.textContent = playerTwo.getScore();
        }

        function getPlayerTwo() {
            return playerTwo;
        }

        return { getPlayerTwo, updateScore };
    })();

    const gameBoardModule = (function() {
        const gameBoardGrid = document.querySelector(".game-board");
        const playAgainBtn = document.querySelector(".play-again-btn");
        const playerOne = playerOneModule.getPlayerOne();
        const playerTwo = playerTwoModule.getPlayerTwo();
        let currentPlayer = playerOne;

        gameBoardGrid.addEventListener("mouseover", handleCellHover);
        gameBoardGrid.addEventListener("mouseout", handleCellMouseout);
        gameBoardGrid.addEventListener("click", handleCellClick);
        playAgainBtn.addEventListener("click", handlePlayAgainBtnClick);

        function handleCellHover(event) {
            if (!event.target.classList.contains("filled")) {
                event.target.textContent = currentPlayer.getSymbol();
            }
        }

        function handleCellMouseout(event) {
            if (!event.target.classList.contains("filled")) {
                event.target.textContent = "";
            }
        }

        function handleCellClick(event) {
            if (!event.target.classList.contains("filled")) {
                // Add the item to our actual array.
                const cellIndex = cells.indexOf(event.target);
                const row = Math.floor(cellIndex / 3);
                const col = cellIndex % 3;

                gameBoard.update(row, col, currentPlayer.getSymbol());
                updateBoard();

                event.target.classList.add("filled");

                const gameOverIndicator = gameBoard.checkGameOver(
                    row,
                    col,
                    currentPlayer.getSymbol(),
                );

                if (gameOverIndicator !== "continue") {
                    playAgainBtn.classList.remove("hidden");
                    gameBoardGrid.removeEventListener("mouseover", handleCellHover);
                    gameBoardGrid.removeEventListener("mouseout", handleCellMouseout);
                    gameBoardGrid.removeEventListener("click", handleCellClick);
                }

                if (gameOverIndicator === playerOne.getSymbol()) {
                    playerOneModule.updateScore(playerOne.getScore() + 1);
                } else if (gameOverIndicator === playerTwo.getSymbol()) {
                    playerTwoModule.updateScore(playerTwo.getScore() + 1);
                }

                currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
            }
        }

        function updateBoard() {
            cells.forEach((cell, index) => {
                const row = Math.floor(index / 3);
                const col = index % 3;
                cell.textContent = gameBoard.getGameBoard()[row][col];
            });
        }

        function handlePlayAgainBtnClick() {
            gameBoard.createNewGameBoard();
            updateBoard()

            cells.forEach(cell => {
                if (cell.classList.contains("filled")) {
                    cell.classList.remove("filled");
                }
            });

            gameBoardGrid.addEventListener("mouseover", handleCellHover);
            gameBoardGrid.addEventListener("mouseout", handleCellMouseout);
            gameBoardGrid.addEventListener("click", handleCellClick);

            playAgainBtn.classList.add("hidden");
        }

        return { updateBoard }
    })();
})();
