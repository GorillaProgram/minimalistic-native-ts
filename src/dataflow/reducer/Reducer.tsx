/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import { combineReducers } from 'redux';
import { TEST, Action } from '../actions/Actions';

function test(state = {
    payload: {
        item: -1
    }
}, action: Action) {
    switch (action.type) {
    case TEST:
        console.log('======>>>>> TEST');
        return {
            ...state,
            payload: action.payload
        };
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    test
});

export default rootReducer;
