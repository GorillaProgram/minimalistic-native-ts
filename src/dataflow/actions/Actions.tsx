/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
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

export function netWorkActionCreator(type: string, payload: any) {
    return (dispatch: (action: any) => void) => {
        return dispatch(actionCreator(type, payload));
    };
};
