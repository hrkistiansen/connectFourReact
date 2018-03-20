import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from './Result'
import Board from './Board'
import Constants from '../Constants'

class Game extends Component {
    checkFourEqualForPlayer(lineOfSquares, player) {
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

    checkWinnerForLine(lineOfSquares) {
        let winner;
        if (this.checkFourEqualForPlayer(lineOfSquares, Constants.player1)) {
            winner = Constants.player1
        }
        if (winner !== Constants.player1 && this.checkFourEqualForPlayer(lineOfSquares, Constants.player2)) {
            winner = Constants.player2
        }
        return winner;
    }

    checkWinner() {
        let allLinesOfSquares = []
        const numSquares = Constants.numberOfSquares;

        // add all horisontal lines
        this.props.squares.forEach((lineOfSquares) => {
            allLinesOfSquares.push(lineOfSquares);
        })

        // add all vertical lines
        for (let i = 0; i < numSquares; i++) {
            let verticalLine = []
            for (let ii = 0; ii < numSquares; ii++) {
                verticalLine.push(this.props.squares.getIn([ii, i]))
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
                diagLine1.push(this.props.squares.getIn([i + ii, ii]))
                diagLine2.push(this.props.squares.getIn([ii, i + ii]))
                diagLine3.push(this.props.squares.getIn([i + ii, (numSquares - 1) - ii]))
                diagLine4.push(this.props.squares.getIn([ii, ((numSquares - 1) - (i + ii))]))
            }
            allLinesOfSquares.push(diagLine1)
            allLinesOfSquares.push(diagLine2)
            allLinesOfSquares.push(diagLine3)
            allLinesOfSquares.push(diagLine4)
        }

        // check winner for each line
        let winner;
        allLinesOfSquares.every((lineOfSquares) => {
            winner = this.checkWinnerForLine(lineOfSquares)
            return !winner
        });
        return winner ? winner : 'No winner'
    }

    render() {
        const winner = this.checkWinner();
        return <div id="game">
            <Result winner={winner} />
            <Board winner={winner} />
        </div>
    }
}

const mapStateToProps = state => ({
    squares: state.squares,
})

export default connect(mapStateToProps)(Game)
