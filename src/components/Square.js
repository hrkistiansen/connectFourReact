import React, { Component } from 'react'
import { connect } from 'react-redux'
import { squareClickedAction } from '../actions'

class Square extends Component {
    render() {
        const disabled = this.props.winner || this.props.value ? true : false
        return (
            <button className="square" onClick={this.props.onClick} disabled={disabled}>
                {this.props.value}
            </button >
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(squareClickedAction(props.x, props.y))
})

const mapStateToProps = (state) => ({
    winner: state.winner
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)
