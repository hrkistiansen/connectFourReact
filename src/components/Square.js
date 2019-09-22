import React, { Component } from 'react'
import { connect } from 'react-redux'
import { squareClickedAction } from '../actions'
import { tsImportEqualsDeclaration } from '@babel/types'

class Square extends Component {
    render() {
        const disabled = this.props.winner ? true : false
        const lastMove = this.props.x === this.props.lastMove.x && this.props.y === this.props.lastMove.y
        return (
            <div className="square">
            <button className={lastMove ? "animated bounceInDown" : null} onClick={this.props.onClick} disabled={disabled} id={this.props.x + ":" + this.props.y}>
                {this.props.value}
            </button >
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(squareClickedAction(props.x, props.y))
})

const mapStateToProps = (state) => ({
    winner: state.winner,
    lastMove: state.lastMove,
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)
