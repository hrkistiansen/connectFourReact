import React, { Component } from 'react'
import { connect } from 'react-redux'
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

const mapStateToProps = state => ({
    squares: state.squares,
})

export default connect(mapStateToProps)(Game)
