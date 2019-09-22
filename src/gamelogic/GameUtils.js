import Constants from '../Constants'

const checkFourEqualForPlayer = (lineOfSquares, player) => {
    let winner;
    let inARow = 0;
    lineOfSquares.forEach(val => {
        if (val === player) {
            inARow++
        } else {
            inARow = 0
        }
        if (inARow === 4) {
            winner = player;
        }
    });
    return winner ? true : false;
}

const checkWinnerForLine = (lineOfSquares) => {
    let winner;
    if (checkFourEqualForPlayer(lineOfSquares, Constants.player1)) {
        winner = Constants.player1
    }
    if (winner !== Constants.player1 && checkFourEqualForPlayer(lineOfSquares, Constants.player2)) {
        winner = Constants.player2
    }
    return winner;
}

export const checkWinner = (squares) => {
    let allLinesOfSquares = []
    const numSquares = Constants.numberOfSquares;

    // add all horisontal lines
    squares.forEach((lineOfSquares) => {
        allLinesOfSquares.push(lineOfSquares);
    })

    // add all vertical lines
    for (let i = 0; i < numSquares; i++) {
        let verticalLine = []
        for (let ii = 0; ii < numSquares; ii++) {
            verticalLine.push(squares.getIn([ii, i]))
        }
        allLinesOfSquares.push(verticalLine);
    }
    // add all diagonal lines
    let diagLine1
    let diagLine2
    let diagLine3
    let diagLine4
    for (let i = 0; i < (numSquares - 3); i++) {
        diagLine1 = []
        diagLine2 = []
        diagLine3 = []
        diagLine4 = []
        for (let ii = 0; ii < numSquares - i; ii++) {
            diagLine1.push(squares.getIn([i + ii, ii]))
            diagLine2.push(squares.getIn([ii, i + ii]))
            diagLine3.push(squares.getIn([i + ii, (numSquares - 1) - ii]))
            diagLine4.push(squares.getIn([ii, ((numSquares - 1) - (i + ii))]))
        }
        allLinesOfSquares.push(diagLine1)
        allLinesOfSquares.push(diagLine2)
        allLinesOfSquares.push(diagLine3)
        allLinesOfSquares.push(diagLine4)
    }

    // check winner for each line
    let winner;
    allLinesOfSquares.every((lineOfSquares) => {
        winner = checkWinnerForLine(lineOfSquares)
        return !winner
    });
    return winner
}

export const findLandingSquare = (numSquares, squares, x) => {
    for (let ii = 0; ii < numSquares; ii++) {
        const squareValue = squares.getIn([ii, x])
        //console.log("val: " +  squareValue === "O" || squareValue === "X" ? true : false)
        if (squareValue === "O" || squareValue === "X") {
            return ii - 1
        }
    }
    return numSquares - 1;
}

