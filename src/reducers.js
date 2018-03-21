import { fromJS } from 'immutable'
import Constants from './Constants'
import { checkWinner } from './gamelogic/GameUtils'

const initialState = {
    squares: fromJS(new Array(Constants.numberOfSquares).fill(new Array(Constants.numberOfSquares).fill(''))),
    nextPlayer: 'X',
    winner: undefined,
}

export default function reducers(state = initialState, action) {
    console.log('reducer start');
    switch (action.type) {
        case 'SQUARE_CLICKED':
            const squares = state.squares.setIn([action.y, action.x], state.nextPlayer)
            const nextPlayer = state.nextPlayer === 'X' ? 'O' : 'X'
            const winner = checkWinner(squares)
            return {
                ...state,
                squares: squares,
                nextPlayer: nextPlayer,
                winner: winner,
            };
        case 'RESTART':
            return initialState
        default:
            return state
    }
}