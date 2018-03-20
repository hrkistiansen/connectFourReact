import React, { Component } from 'react'
import { connect } from 'react-redux'

import { squareClickedAction } from '../actions'

class Square extends Component {
    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button >
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(squareClickedAction(props.x, props.y))
})

export default connect(null, mapDispatchToProps)(Square)
