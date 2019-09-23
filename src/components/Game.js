import React, { Component } from 'react'
import { connect } from 'react-redux'
import Result from './Result'
import Board from './Board'
import Restart from './Restart'
import Ingress from './Ingress'

class Game extends Component {
    render() {
        return <div className="game">
            <Ingress />
            <Result />
            <Board />
            <Restart style={{float: "left"}} />
        </div>
    }
}

const mapStateToProps = state => ({
    squares: state.squares
})

export default connect(mapStateToProps)(Game)
