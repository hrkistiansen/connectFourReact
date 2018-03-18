import React, { Component } from 'react'
import Result from './Result'
import Board from './Board'

class Game extends Component {
    render() {
        return <div id="game">
            <Result />
            <Board />
        </div>
    }
}

export default Game
