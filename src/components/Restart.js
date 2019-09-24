import React, { Component } from 'react'
import { connect } from 'react-redux'
import { restartButtonAction } from '../actions'

class Restart extends Component {
    render() {
        return (
            <div className="restart row">
                <p>
                    <button className="btn btn-primary restart" onClick={this.props.onClick}>
                        Restart game
                    </button >
                </p>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(restartButtonAction())
})

export default connect(null, mapDispatchToProps)(Restart)
