import { fromJS } from 'immutable'
import Constants from './Constants'
import { checkWinner, findLandingSquare } from './gamelogic/GameUtils'

const initialState = {
    squares: fromJS(new Array(Constants.numberOfSquares).fill(new Array(Constants.numberOfSquares).fill(''))),
    nextPlayer: 'X',
    winner: undefined,
    lastMove: {},
}

export default function reducers(state = initialState, action) {
    console.log('reducer start');
    switch (action.type) {
        case 'SQUARE_CLICKED':
            const lowestSquareInColumn = findLandingSquare(Constants.numberOfSquares, state.squares, action.x);
            action.y = lowestSquareInColumn
            const squares = state.squares.setIn([action.y, action.x], state.nextPlayer)
            const nextPlayer = state.nextPlayer === 'X' ? 'O' : 'X'
            const winner = checkWinner(squares)
            const lastMove = {x: action.x, y: action.y}
            return {
                ...state,
                squares: squares,
                nextPlayer: nextPlayer,
                winner: winner,
                lastMove: lastMove,
            };
        case 'RESTART':
            return initialState
        default:
            return state
    }
}