/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
/* ============================= Action Type Start =============================== */
export const TEST = 'TEST';

export function test(item: number) {
    return {
        type: TEST,
        payload: {
            item: item + 1
        }
    };
}
/* ============================= Action Creator End =============================== */
