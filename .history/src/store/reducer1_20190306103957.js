import { combineReducers } from 'redux';
import { reducer as Day2Reducer } from '../pages/day2/store'

const reducer = combineReducers({
    day2: Day2Reducer
})
export default reducer;