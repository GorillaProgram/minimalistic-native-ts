/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
export const REQUESTING = 'REQUESTING';
export const RECEIVED = 'RECEIVED';
export const ERROR = 'ERROR';

const NetworkActions = {

    requesting: () => {
        return {
            type: REQUESTING,
            payload: {}
        };
    },
    received: () => {
        return {
            type: RECEIVED,
            payload: {}
        };
    },
    error: (url: string, params: any, error: any) => {
        return {
            type: ERROR,
            payload: {
                url,
                params,
                error
            }
        };
    },
    receivedData: (url: string, params: any, response: any) => {
        return {
            type: params.actionType,
            payload: {
                url,
                params,
                response
            }
        };
    },

};

export default NetworkActions;
