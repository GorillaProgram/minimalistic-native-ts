/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import NetworkActions from './NetworkActions';
import Just from '../../main/context/Just';

const LoginActions = {

    validateTeller(params: any) {
        return (dispatch: any) => {
            dispatch(NetworkActions.requesting());
            return Just.silenceTask(params.adapter, params.procedure, params.parameters)
                .then((response) => {
                    dispatch(NetworkActions.received());
                    return dispatch(NetworkActions.receivedData(params, response));
                }, (error) => {
                    return dispatch(NetworkActions.error(params, error));
                });
        };
    },
    prevLogin(params: any) {
        return (dispatch: any) => {
            dispatch(NetworkActions.requesting());
            return Just.silenceTask(params.adapter, params.procedure, params.parameters)
                .then((response: any) => {
                    return dispatch(LoginActions.login(params, response));
                }, (error: any) => {
                    return dispatch(NetworkActions.error(params, error));
                });
        };
    },
    login(params: any, prevResponse: any) {
        return dispatch => {
            return Just.silenceTask(params.adapter, params.procedure, params.parameters)
                .then((response: any) => {
                    // Just.log(prevResponse);
                    dispatch(NetworkActions.received());
                    return dispatch(NetworkActions.receivedData(params, response));
                }, (error: any) => {
                    return dispatch(NetworkActions.error(params, error));
                });
        };
    }

};

export default LoginActions;
