/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import { combineReducers } from 'redux';
import { TEST, Action } from '../actions/Actions';
import NetworkActions, { REQUESTING, RECEIVED, ERROR } from '../actions/NetworkActions';
import Just from '../../main/context/Just';

function test(state = {
    payload: {
        item: -1
    }
}, action: Action) {
    switch (action.type) {
    case TEST:
        Just.log('======>>>>> TEST');
        return {
            ...state,
            payload: action.payload
        };
    default:
        return state;
    }
}

function network(state = {
    isFetching: false,
    params: {}
}, action: any) {
    switch (action.type) {
    case REQUESTING:
        Just.log('===== REQUESTING =====');
        
        return {
            ...state,
            isFetching: true,
        };
    case RECEIVED:
        Just.log('===== RECEIVED =====');
        return {
            ...state,
            isFetching: false,
        };
    case ERROR:
        Just.log('===== ERROR =====');
        return {
            ...state,
            isFetching: false,
            url: action.payload.url,
            params: action.payload.params,
            error: action.payload.error
        };
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    test,
    network
});

export default rootReducer;
