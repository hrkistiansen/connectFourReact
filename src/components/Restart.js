import React, { Component } from 'react'
import { connect } from 'react-redux'
import { restartButtonAction } from '../actions'

class Restart extends Component {
    render() {
        return (
            <p>
                <button onClick={this.props.onClick}>
                    Restart game
            </button >
            </p>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(restartButtonAction())
})

export default connect(null, mapDispatchToProps)(Restart)
