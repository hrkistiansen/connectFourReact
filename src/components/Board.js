import React, { Component } from 'react';
import { connect } from 'react-redux'

import Square from './Square'

class Board extends Component {
    render() {
        const { squares } = this.props
        return (
            <p>Antall: {squares}</p>
        );
    }
}

export default Board
