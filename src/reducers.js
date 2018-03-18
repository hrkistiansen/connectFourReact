import { List, fromJS } from 'immutable';

const initialState = {
    squares: fromJS([['00', '01', '02'], ['10', '11', '12']])
}

export default function reducers(state = initialState, action) {
    const squareList = state.squares;
    squareList.forEach(square => console.log(square));
    switch (action.type) {
        case 'ADD_X':
            return state;
        default:
            return state
    }
}