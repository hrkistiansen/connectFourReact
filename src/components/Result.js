import React, { Component } from 'react';
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        const winner = this.props.winner ? this.props.winner + " won the game!" : 'No winner yet!';
        let winnerClassName = this.props.winner ? 'winner' : ''
        if (this.props.winner) {
            winnerClassName = 'animated infinite heartBeat' // + winnerClassName
        }
        return (
            <div id="winnertext-wrapper">
                <div id="winnertext" className={winnerClassName}>
                    <p>{winner}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    winner: state.winner,
})

export default connect(mapStateToProps)(Result)
