import React, { Component } from 'react'
import { connect } from 'react-redux'

import Square from './Square'

class Board extends Component {
    renderSquare(x, y, value) {
        return <Square key={x + y} x={x} y={y} value={value} />
    }

    renderRow(squaresInRow, y) {
        return (
            <div className="board-row" key={y}>
                {squaresInRow.map(
                    (_, x) => {
                        const value = this.props.squares.getIn([y, x])
                        return this.renderSquare(x, y, value)
                    }
                )}
            </div>
        )
    }

    render() {
        const { squares } = this.props
        return (
            <div className="board">
                {squares.map((squaresInRow, y) => {
                    return this.renderRow(squaresInRow, y)
                })}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    squares: state.squares,
})

export default connect(mapStateToProps)(Board)
