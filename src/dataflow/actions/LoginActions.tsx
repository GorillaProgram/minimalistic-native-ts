/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import NetworkActions from './NetworkActions';
import Just from '../../main/context/Just';

const LoginActions = {

    validateTeller(params) {
        return dispatch => {
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
    prevLogin(params) {
        return dispatch => {
            dispatch(NetworkActions.requesting());
            return Just.silenceTask(params.adapter, params.procedure, params.parameters)
                .then((response) => {
                    return dispatch(LoginActions.login(params, response));
                }, (error) => {
                    return dispatch(NetworkActions.error(params, error));
                });
        };
    },
    login(params, prevResponse) {
        return dispatch => {
            return Just.silenceTask(params.adapter, params.procedure, params.parameters)
                .then((response) => {
                    Just.log(prevResponse);
                    dispatch(NetworkActions.received());
                    return dispatch(NetworkActions.receivedData(params, response));
                }, (error) => {
                    return dispatch(NetworkActions.error(params, error));
                });
        };
    }

};

export default LoginActions;
