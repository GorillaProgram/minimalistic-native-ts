/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import HomeActions from './home/HomeActions';
import LoginActions from './LoginActions';
import Just from '../../main/context/Just';

/* ============================= Action Type Start =============================== */
export const TEST = 'TEST';
export const DEFAULT = 'DEFAULT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const DELAY_ADD = 'DELAY_ADD';
export const DELAY_SUBTRACT = 'DELAY_SUBTRACT';
export const LOGIN = 'LOGIN';
export const VALIDATE_TELLER = 'VALIDATE_TELLER';
export const SHOW_INDEX_INFO = 'SHOW_INDEX_INFO';
/* ============================= Action Type End =============================== */

/* ============================= Action Private Start =============================== */
function delayAddAction(item: number) {
    return {
        type: DELAY_ADD,
        item: item + 1
    };
}

function delaySubtractAction(item: number) {
    return {
        type: DELAY_SUBTRACT,
        item: item - 1
    };
}

function delay(func: any, second: number) {
    return (dispatch: any) => {
        dispatch(new Promise((resolve) => {
            resolve(setTimeout(func, second));
        }));
    };
}
/* ============================= Action Private End =============================== */

/* ============================= Action Creator Start =============================== */
export function test(item: number) {
    return {
        type: TEST,
        payload: {
            item: item + 1
        }
    };
}

export function add(item: number) {
    return {
        type: ADD,
        item: item + 1
    };
}

export function subtract(item: number) {
    return {
        type: SUBTRACT,
        item: item - 1
    };
}

export function delayAdd(item: number, second: number) {
    return (dispatch: any) => {
        return dispatch(delay(delayAddAction(item), second));
    };
}

export function delaySubtract(item: number, second: number) {
    return (dispatch: any) => {
        return dispatch(delay(delaySubtractAction(item), second));
    };
}
/* ============================= Action Creator End =============================== */
