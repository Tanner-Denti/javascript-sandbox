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
        if (x === y) {
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
                if (gameBoard[i][(len - 1) - i] !== playerSymbol) {
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
                return "C"; // Continue
            }
        }
        return "D" // Draw
    }

    function createNewGameBoard() {
        for (let r = 0; r < len; r++) {
            for (let c = 0; c < len; c++) {
                gameBoard[r][c] = null;
            }
        }
    }

    function getGameBoard() {
        return gameBoard.map(row => [...row]);
    }

    return { update, checkGameOver, createNewGameBoard, getGameBoard };
})();

const createPlayer = function(symbol) {
    
    const score = 0;

    const getScore = () => score; 
    const setScore = (newScore) => { score = newScore; }
    const getSymbol = () => symbol;
    const setSymbol = (newSymbol) => { symbol = newSymbol; }
    
    return { getScore, setScore, getSymbol, setSymbol }
}
