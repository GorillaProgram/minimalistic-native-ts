/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './dataflow/store/Store';
import App from './App';

interface Props {

}

interface State {

}

export default class ReduxApp extends Component<Props, State> {

    render() {
        return (
            <Provider store={configureStore()}>
                <App />
            </Provider>
        );
    }
};
