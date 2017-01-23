const FunctionUtility = {

    delayExecute(executor, timeInterval) {
        setTimeout(executor, timeInterval ? timeInterval : 500);
    },
    promise(params) {
        return new Promise((resolve) => {
            resolve(params);
        });
    },
    promiseError(error) {
        return new Promise((rejeck) => {
            rejeck(error);
        });
    }

};

export default FunctionUtility;
