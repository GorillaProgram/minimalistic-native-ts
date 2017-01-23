/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import { combineReducers } from 'redux';
import Just from '../../main/context/Just';
import {
    REQUESTING,
    RECEIVED,
    ERROR,
} from '../actions/NetworkActions';
import {
    SHOW_INDEX_INFO,
    VALIDATE_TELLER,
    LOGIN,
    TEST, ADD, SUBTRACT
} from '../actions/Actions';

function test(state = {
    item: 0
}, action: any) {
    switch (action.type) {
    case TEST:
        Just.log('======>>>>> TEST');
        return {
            ...state,
            item: action.payload.item
        };
    default:
        return state;
    }
}

function calculate(state = {
    item: 0
}, action: any) {
    switch (action.type) {
    case ADD:
        Just.log('======>>>>> ADD');
        return {
            ...state,
            item: action.item
        };
    case SUBTRACT:
        Just.log('======>>>>> SUBTRACT');
        return {
            ...state,
            item: action.item
        };
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    calculate,
    test
});

export default rootReducer;
