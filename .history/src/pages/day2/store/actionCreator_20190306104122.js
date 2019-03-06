import * as actionTypes from './actionTypes'

export const clickNum = (value) => ({
    type: actionTypes.CLICK_NUM,
    value
})

export const clearNum = () => ({
    type: actionTypes.CLEAR_NUM
})

export const addDecimals = () => ({
    type: actionTypes.ADD_DECIMALS
})

export const breakUp = () => ({
    type: actionTypes.BREAK_UP
})

export const operator = (operator) => ({
    type: actionTypes.OPERATOR,
    operator
})