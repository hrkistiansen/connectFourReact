import React, { Component } from 'react'
import { connect } from 'react-redux'

import { squareClickedAction } from '../actions'

class Square extends Component {
    render() {
        const { squareId, x, y } = this.props
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button >
        );
    }
}

const mapStateToProps = state => ({
    squares: state.squares,
})

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(squareClickedAction(props.x, props.y))
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)
