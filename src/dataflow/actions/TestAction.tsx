/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import { Action } from './Actions';

export default class TestAction extends Action {

    constructor() {
        super();
        this.type = 'TEST';
    }

    test(item: number) {
        return {
            type: this.type,
            payload: {
                item: item + 1
            }
        };
    }

};

/* ============================= Action Creator End =============================== */
