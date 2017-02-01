/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import { combineReducers } from 'redux';
import { TestAction } from '../actions/Actions';

function test(state = {
    item: 0
}, action: TestAction) {
    switch (action.type) {
    case 'TEST':
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
