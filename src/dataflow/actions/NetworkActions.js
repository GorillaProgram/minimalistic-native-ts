/**
 * Created by MeePwn
 * https://github.com/maybewaityou
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
    error: (params, error) => {
        return {
            type: ERROR,
            payload: {
                params,
                error
            }
        };
    },
    receivedData: (params, response) => {
        return {
            type: params.actionType,
            payload: {
                params,
                response
            }
        };
    },

};

export default NetworkActions;
