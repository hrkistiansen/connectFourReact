export const squareClickedAction = (x, y) => ({
    type: 'SQUARE_CLICKED',
    x: x,
    y: y,
})

export const restartButtonAction = () => ({
    type: 'RESTART'
})