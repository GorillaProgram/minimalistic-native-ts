/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import NetworkActions from '../NetworkActions';
import Just from '../../../main/context/Just';

const HomeActions = {

    showIndexInfo(params) {
        return dispatch => {
            dispatch(NetworkActions.requesting());
            return Just.indexInfoTask()
                .then((response) => {
                    dispatch(NetworkActions.received());
                    return dispatch(NetworkActions.receivedData(params, response));
                }, (error) => {
                    return dispatch(NetworkActions.error(params, error));
                });
        };
    }

};

export default HomeActions;
