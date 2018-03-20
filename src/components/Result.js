import React, { Component } from 'react';
import { connect } from 'react-redux'

class Result extends Component {
    render() {
        const { squares } = this.props;
        return (
            <div>Result: {this.props.winner}</div>
        );
    }
}

const mapStateToProps = state => ({
    squares: state.squares,
})

export default connect(mapStateToProps)(Result)
