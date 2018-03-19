import React, { Component } from 'react'
import { connect } from 'react-redux'

import Square from './Square'

class Board extends Component {
    renderSquare(x, y, value) {
        const compositeKey = y + ':' + x
        return <Square key={compositeKey} x={x} y={y} squareId={compositeKey} value={value} />
    }

    renderRow(squaresInRowList, y) {
        return (
            <div className="board-row" key={y}>
                {squaresInRowList.map(
                    (Square, x) => {
                        return this.renderSquare(x, y, this.props.squares.getIn([y, x]))
                    }
                )}
            </div>
        )
    }

    render() {
        const { squares } = this.props
        return (
            <div id="board">
                {squares.map((squaresInRowList, y) => {
                    return this.renderRow(squaresInRowList, y)
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    squares: state.squares,
})

export default connect(mapStateToProps)(Board)
