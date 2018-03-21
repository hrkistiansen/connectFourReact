import React, { Component } from 'react';
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        const winner = this.props.winner ? 'The winner is ' + this.props.winner : 'No winner yet!';
        return (
            <div className={this.props.winner ? 'won' : ''}><p>{winner}</p></div>
        );
    }
}

const mapStateToProps = state => ({
    winner: state.winner,
})

export default connect(mapStateToProps)(Result)
