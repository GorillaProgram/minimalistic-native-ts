/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import Just from '../context/Just';

const AtomicTask = {

    indexInfoTask() {
        return Just.promiseTask('padAdapter', 'showIndexInfo', [])
            .then((result) => {
                return Just.promise(result);
            }, (error) => {
                return Just.promiseError(error);
            });
    },
    validateTellerTask(userID) {
        return Just.promiseTask('padAdapter', 'validateTeller', [userID])
            .then((result) => {
                return Just.promise(result.responseJSON.bsadata);
            });
    },

};

export default AtomicTask;
