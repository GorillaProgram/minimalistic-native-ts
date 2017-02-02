/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import { Action } from './Actions';

export function testAction(action: TestAction) {
    return {
        type: action.type,
        payload: action.payload
    };
};

export class TestAction extends Action {

    constructor(payload: any) {
        super();
        this.type = 'TEST';
        this.payload = payload;
    }

};

/* ============================= Action Creator End =============================== */
