/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import { combineReducers } from 'redux';
import { TEST } from '../actions/Actions';

function test(state = {
    item: 0
}, action: any) {
    switch (action.type) {
    case TEST:
        console.log('======>>>>> TEST');
        return {
            ...state,
            item: action.payload.item
        };
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    test
});

export default rootReducer;
