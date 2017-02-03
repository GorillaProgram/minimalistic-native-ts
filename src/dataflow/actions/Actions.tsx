/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Just from '../../main/context/Just';
import NetworkActions from './NetworkActions';
/* ============================= Action Type Start =============================== */

export const TEST = 'TEST';

/* ============================= Action Type End =============================== */

/* ============================= Action Creator Start =============================== */

export class Action {

    constructor(public type: string, public payload: any) {
        this.type = type;
        this.payload = payload;
    }

};

/* ============================= Action Creator End =============================== */

export function actionCreator(type: string, payload: any) {
    const action = new Action(type, payload);
    return {
        type: action.type,
        payload: action.payload
    };
};

export function netWorkActionCreator(url: string, params: any) {
    return (dispatch: (action: any) => any) => {
        dispatch(NetworkActions.requesting());
        return Just.addNetworkJob(url, params)
            .then((response: any) => {
                dispatch(NetworkActions.received());
                return dispatch(NetworkActions.receivedData(url, params, response));
            }, (error: any) => {
                dispatch(NetworkActions.received());
                return dispatch(NetworkActions.error(url, params, error));
            });
    };
};
