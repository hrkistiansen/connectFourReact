import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from './Result'
import Board from './Board'
import Restart from './Restart'

class Game extends Component {
    render() {
        return <div id="game">
            <Result />
            <Board />
            <Restart />
        </div>
    }
}

const mapStateToProps = state => ({
    squares: state.squares
})

export default connect(mapStateToProps)(Game)
